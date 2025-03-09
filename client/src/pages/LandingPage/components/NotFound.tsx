import { Link } from "react-router-dom";
import GlitchedComponnent from "../../../components/GlitchedComponnent.tsx";

function NotFound() {

    return (
        <div className="full md:half lg:screen-v-scroll flex row wrap relative">
            <GlitchedComponnent>
                <div className="full md:py">
                    <header className="full noselect pl-1 svelte-11np3qp">
                        <div className="px md:py">
                            <div className="large title white svelte-11np3qp">page_not_found.md</div>
                        </div>
                    </header>
                    <article className="pl-1 svelte-11np3qp">
                        <div className="pad white flex col">
                            <div className="mb tweak-1 svelte-11np3qp">
                                <p>
                                Oops! It looks like you’ve stumbled into the void. <br />
                                Don’t worry, I’m a <em className="blue">Full-Stack Developer</em>. I can help!</p>
<br />
                                <p>Here’s what might have happened: </p><br />
                                - The page you’re looking for got lost in the cloud. <br />
                                - A rogue semicolon broke the link. <br />
                                - The backend ate your <em className="blue">request</em> (<em className="green">it does that sometimes</em>). <br />

                                While I debug this issue, why not check out my work? <br />
                                I build chatbots, web apps, and mobile solutions that never return <em className="fuschia">404</em>. <br />
<br /><br />
                                👉 <Link to="/" className="blue">[about]</Link>
<br /><br />
                                <em className="blue">console</em>.<em className="blue">log</em>(<em className="orange">"Error: Page not found. But Jesus is on it! 🛠️"</em>)
                            </div>
                        </div>
                        <div className="y-space"></div>
                    </article>
                </div>
            </GlitchedComponnent>
        </div>
    );
}

export default NotFound;
