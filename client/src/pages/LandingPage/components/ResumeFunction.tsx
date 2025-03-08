import { Link } from "react-router-dom";
import GlitchedComponnent from "../../../components/GlitchedComponnent.tsx";

function ResumeFunction() {

    return (
        <div className="full md:half lg:quarter lg:screen-v-scroll flex row wrap">
            <GlitchedComponnent>
                <header className="full noselect pt">
                    <div className="pad break-anywhere pr-1 pb-0 svelte-1enhvii">
                        <div className="md:hidden">
                            <span className="green">
                                <em>getResume</em>
                            </span>(<span className="yellow">'Jesus Valadez'</span>);
                            <br /><br />
                        </div>

                        <div className="hidden md:inline">
                            <em className="blue">function </em>
                            <span className="green">getResume</span>(
                            <em className="orange">developer </em> = <span className="yellow">'Jesus Valadez'</span>)
                            {' { '}

                            <span className="fuschia">return</span> {'{'}
                            <br />
                            <span className="yellow"> name:</span> <span> developer, </span> <br />
                            <span className="yellow">role:</span> <span className="orange"> "FullStack", </span> <br />
                            <span className="yellow">skills:</span>
                            <span> [ <span className="orange">"JS"</span>, <span className="orange"> "PHP"</span>,<span className="orange"> "React"</span>,<span className="orange"> "SQL"</span>] </span> <br />
                            &nbsp; {'}'};
                            <br />
                            {' }'}
                        </div>

                        <br className="hidden md:inline" />
                        <br className="hidden md:inline" />

                        <div className="hidden md:inline">
                            <span className="green">while</span>( <em className="fuschia">true </em> ) {'{'}
                            <br />
                            <em className="blue">learnNewTech</em>();
                            <br />
                            <em className="blue">buildProjects</em>();
                            <br />
                            <em className="blue">deploySolutions</em>();
                            <br />
                            {'}'};
                        </div>
                    </div>
                    <br className="hidden md:inline" />
                    <br className="hidden md:inline" />

                </header>

                <div className="full noselect grey">
                    <div className="pad pr-0 pt-0">
                        <Link to="/" className="blue">[about]</Link>
                        {/* <a href="/about" className="blue">[about]</a> &nbsp; */}
                        <Link to="/experience" className="blue">[experience]</Link>
                        {/* <a href="/experience" className="blue">[experience]</a> */}
                        <br />
                        <Link to="/education" className="blue">[education]</Link>
                        <Link to="/hobbies" className="blue">[hobbies]</Link>
                        <br />
                        <a target="_blank" href="https://www.linkedin.com/in/jesus-antonio-valadez-flores/" className="orange">[linkedin]</a>
                        <br />
                        <Link to="/contactme" className="fuschia">[contact.me]</Link>
                        <br />
                        <span className="hover purple">[invert]</span> &nbsp;
                        <span className="hover purple">[fullscreen]</span>

                    </div>
                </div>
            </GlitchedComponnent>
        </div>
    );
}

export default ResumeFunction;
