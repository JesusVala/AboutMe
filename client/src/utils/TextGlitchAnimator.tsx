
export class TextEvolutionAnimator {
    static GLITCH_CHARACTERS = "—~±§|[].+$^@*()•x%!?#";
    element: HTMLElement;
    duration: number;
    delay: number;
    reverse: boolean;
    //absolute: boolean;
    //pointerEvents: boolean;
    textNodes: never[] | { nodeType: number; nodeValue: string; }[];
    originalNodeLengths: never[] | number[];
    fullText: string;
    placeholders: string;
    currentGlitchText: string;
    requestId: null | number;
    startTime: null | number;
    running: boolean;

    constructor(
        element: HTMLElement
    ) {
        //params values
        this.element = element;

        //this.reverse = reverse;
        this.reverse = false;
        //this.absolute = absolute;
        //this.pointerEvents = pointerEvents;

        //Hardcoded values
        this.duration = 5000;
        this.delay = 0; // maybe erased
        this.textNodes = [];
        this.originalNodeLengths = [];
        this.fullText = "";
        this.placeholders = "";
        this.currentGlitchText = "";
        this.requestId = null;
        this.startTime = null;
        this.running = false;
    }

    /**
     * Gathers and stores the element's text node structure, the final text,
     * plus placeholders for glitch effect. Must be called before start().
     */
    initialize() {
        // If needed, style tweaks:
        /*
        if (this.absolute) {
          this.element.style.position = "absolute";
          this.element.style.top = "0";
        }
        if (!this.pointerEvents) {
          this.element.style.pointerEvents = "none";
        }
          */

        // Gather all text nodes in this.element:
        this.textNodes = this._collectTextNodes(this.element);

        // Record lengths and build final text string:
        this.originalNodeLengths = this.textNodes.map(node => node.nodeValue.length);
        this.fullText = this.textNodes.map(node => node.nodeValue).join("");

        // Create placeholders: same word structure, but with non-breaking spaces
        this.placeholders = this.fullText
            .split(" ")
            .map(word => "\u00A0".repeat(word.length))
            .join(" ");

        // We start from placeholders if not reversed. If reversed, start from final text.
        this.currentGlitchText = this.reverse ? this.fullText : this.placeholders;
    }

    /**
   * Starts the animation. Internally calls requestAnimationFrame,
   * and uses this.tick(progress) each frame. 
   */
    start() {
        this.running = true;
        this.startTime = performance.now() + this.delay;

        const animate = (now: number) => {
            // Possibly check if we have canceled or finalized:
            if (!this.running) return;

            // If we have not reached the official start time, keep waiting
            if (this.startTime && now < this.startTime) {
                this.requestId = requestAnimationFrame(animate);
                return;
            }

            // Compute how far along we are in [0..1]
            const elapsed = now - (this.startTime || 0);
            let progress = elapsed / this.duration;
            if (progress > 1) progress = 1;

            // Update the text state
            this.tick(progress);

            // If we haven't reached 1.0, keep animating
            if (progress < 1) {
                this.requestId = requestAnimationFrame(animate);
            } else {
                // By default, finalize automatically
                this.finalize();
            }
        };

        this.requestId = requestAnimationFrame(animate);
    }

    /**
   * Applies the glitch transformation for a given progress [0..1].
   * If you do manual stepping of the animation, you can call tick() yourself.
   *
   * @param {number} progress – A number from 0.0 up to 1.0
   */
    tick(progress: number) {
        // Standard easeInOut squared easing.
        let eased = (1 - Math.cos(Math.PI * progress)) / 2;
        eased = Math.pow(eased, 2);

        const n = this.fullText.length;

        if (this.reverse) {
            // In reverse mode, we want the text to vanish from the beginning.
            // Invert eased so that at progress=0 the entire text is correct,
            // and at progress=1 none is correct.
            const effectiveEased = 1 - eased;
            // "Correct" text is taken from the tail.
            const correctCount = Math.floor(n * effectiveEased);
            // Compute indices relative to the tail.
            const startCorrectIndex = n - correctCount;
            // Use a smaller glitch frame in reverse mode.
            const glitchFrameCount = Math.floor(n * 0.25);
            const glitchProbability = 0.1;
            const glitchRunLength = Math.floor(
                2 * (0.5 - Math.abs(effectiveEased - 0.5)) * glitchFrameCount,
            );
            const glitchStart = Math.max(startCorrectIndex - glitchRunLength, 0);

            // Occasionally update some random positions (in the left portion) with a glitch character.
            if (Math.random() < 0.5 && progress < 1 && progress !== 0) {
                for (let j = 0; j < 20; j++) {
                    const fraction = j / 20;
                    // Work from the beginning (index 0) toward startCorrectIndex.
                    let glitchIndex = startCorrectIndex -
                        Math.floor((1 - Math.random()) * glitchFrameCount * fraction);
                    if (glitchIndex < 0) glitchIndex = 0;
                    if (glitchIndex >= this.currentGlitchText.length) {
                        glitchIndex = this.currentGlitchText.length - 1;
                    }
                    const charAtIndex = this.currentGlitchText[glitchIndex];
                    if (charAtIndex !== " ") {
                        this.currentGlitchText = this._replaceCharacter(
                            this.currentGlitchText,
                            glitchIndex,
                            Math.random() > glitchProbability
                                ? this.fullText[glitchIndex]
                                : this._randomGlitchChar(),
                        );
                    }
                }
            }

            // Build the display:
            // 1. From index 0 to glitchStart, use placeholders.
            // 2. From glitchStart to startCorrectIndex, use (possibly glitched) text.
            // 3. From startCorrectIndex to the end, show the final text.
            let display = this.placeholders.slice(0, glitchStart) +
                this.currentGlitchText.slice(glitchStart, startCorrectIndex) +
                this.fullText.slice(startCorrectIndex);

            // Update the text nodes.
            let offset = 0;
            this.textNodes.forEach((node, i) => {
                node.nodeValue = display.slice(
                    offset,
                    offset + this.originalNodeLengths[i],
                );
                offset += this.originalNodeLengths[i];
            });
        } else {
            // Non-reverse: animate from placeholders to final text (left to right).
            const correctCount = Math.floor(n * eased);
            const glitchFrameCount = Math.floor(n * 1.5);
            const glitchProbability = 0.8;
            const glitchRunLength = Math.floor(
                2 * (0.5 - Math.abs(eased - 0.5)) * glitchFrameCount,
            );

            if (Math.random() < 0.5 && progress < 1 && progress !== 0) {
                for (let j = 0; j < 20; j++) {
                    const fraction = j / 20;
                    let glitchIndex = correctCount +
                        Math.floor((1 - Math.random()) * glitchFrameCount * fraction);
                    if (glitchIndex < 0) glitchIndex = 0;
                    if (glitchIndex >= this.currentGlitchText.length) {
                        glitchIndex = this.currentGlitchText.length - 1;
                    }
                    const charAtIndex = this.currentGlitchText[glitchIndex];
                    if (charAtIndex !== " ") {
                        this.currentGlitchText = this._replaceCharacter(
                            this.currentGlitchText,
                            glitchIndex,
                            Math.random() > glitchProbability
                                ? this.fullText[glitchIndex]
                                : this._randomGlitchChar(),
                        );
                    }
                }
            }

            let display = this.fullText.slice(0, correctCount) +
                this.currentGlitchText.slice(
                    correctCount,
                    correctCount + glitchRunLength,
                ) +
                this.placeholders.slice(correctCount + glitchRunLength);

            let offset = 0;
            this.textNodes.forEach((node, i) => {
                node.nodeValue = display.slice(
                    offset,
                    offset + this.originalNodeLengths[i],
                );
                offset += this.originalNodeLengths[i];
            });
        }
    }

    /**
    * Immediately ends the animation, restoring the "final" text (or placeholders if reversed).
    */
    finalize() {
        this.running = false;
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
            this.requestId = null;
        }
        // Force the final text state
        const final = this.reverse ? this.placeholders : this.fullText;
        let offset = 0;
        this.textNodes.forEach((node, i) => {
            node.nodeValue = final.slice(offset, offset + this.originalNodeLengths[i]);
            offset += this.originalNodeLengths[i];
        });
    }
    // ----------------- private helpers ------------------

    /**
     * Recursively collects text nodes from the given element.
     */
    _collectTextNodes(el: HTMLElement) {
        const nodes: { nodeType: number; nodeValue: string; }[] = [];
        el.childNodes.forEach((child: any) => {
            if (child.nodeType === Node.TEXT_NODE) {
                const trimmed = child.nodeValue.replace(/(\n|\r|\t)/gm, "");
                if (trimmed.length > 0) {
                    child.nodeValue = trimmed;
                    nodes.push(child);
                }
            } else {
                nodes.push(...this._collectTextNodes(child));
            }
        });
        return nodes;
    }

    /**
     * Replaces a single character in a string at the given index.
     */
    _replaceCharacter(str: string, index: number, newChar: any) {
        if (index < 0 || index >= str.length) return str;
        return str.substring(0, index) + newChar + str.substring(index + 1);
    }

    /**
     * Picks one random "glitch" character.
     */
    _randomGlitchChar() {
        const pool = TextEvolutionAnimator.GLITCH_CHARACTERS;
        return pool[Math.floor(Math.random() * pool.length)];
    }

}