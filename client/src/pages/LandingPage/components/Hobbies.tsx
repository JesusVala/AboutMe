import GlitchedComponnent from "../../../components/GlitchedComponnent.tsx";

function Hobbies() {

    return (
        <div className="full md:half lg:screen-v-scroll flex row wrap relative">
            <GlitchedComponnent>
                <div className="full md:py">
                    <header className="full noselect pl-1 svelte-11np3qp">
                        <div className="px md:py">
                            <div className="large title white svelte-11np3qp">Hobbies.css</div>
                        </div>
                    </header>
                    <article className="pl-1 svelte-11np3qp">
                        <div className="pad white flex col">
                            <div className="mb tweak-1 svelte-11np3qp">
                                <em className="grey"> /* My Hobbies */ </em> <br />
                                <em className="grey"> /* Martial Arts */ </em> <br />
                                <em className="green">#martial-arts</em> {'{'}<br />
                                <em className="yellow">disipline: </em> Taekwondo; <br />
                                <em className="yellow">belt-color: </em> Black <br />
                                <em className="yellow">skills: </em> Discipline, Focus, Perseverance, Respect, Fitness; <br />
                                {'}'}
                                <br /><br />

                                <em className="grey"> /* Gaming */ </em> <br />
                                <em className="green">#gamming</em> {'{'}<br />
                                <em className="yellow">group-video-games: </em> <em className="orange">"Co-op adventures and competitive matches with friends"</em>; <br />
                                <em className="yellow">indie-solo-games: </em> <em className="orange">"Creative, story-driven indie games"</em>; <br />
                                <em className="yellow">board-games: </em> <em className="orange">"Strategy and social dynamics in tabletop games"</em>; <br />
                                {'}'}
                                <br /><br />

                                <em className="grey"> /* Tech Exploration */ </em> <br />
                                <em className="green">#tech-exploration</em> {'{'}<br />
                                <em className="yellow">description: </em> <em className="orange">"Always experimenting with new technologies, frameworks, and gadgets"</em>; <br />
                                <em className="yellow">traits: </em> Curiosity, Innovation, Adaptability; <br />
                                {'}'}
                                <br /><br />

                                <em className="grey"> /* Hobbies Summary */ </em> <br />
                                <em className="green">.hobbies-summary::after</em> {'{'}<br />
                                <em className="yellow">content: </em> <em className="orange">"Martial Arts, Gaming, Tech Exploration - Always active and exploring!"</em>; <br />
                                <em className="yellow">display: </em> block; <br />
                                <em className="yellow">font-weight: </em> bold; <br />
                                <em className="yellow">margin-top: </em> 20px; <br />
                                {'}'}

                            </div>
                        </div>
                        <div className="y-space"></div>
                    </article>
                </div>
            </GlitchedComponnent>
        </div>
    );
}

export default Hobbies;
