import GlitchedComponnent from "../../../components/GlitchedComponnent.tsx";

function Experience() {

    return (
        <div className="full md:half lg:screen-v-scroll flex row wrap relative">
            <GlitchedComponnent>
            <div className="full md:py">
                <header className="full noselect pl-1 svelte-11np3qp">
                    <div className="px md:py">
                        <div className="large title white svelte-11np3qp">Experience</div>
                    </div>
                </header>
                <article className="pl-1 svelte-11np3qp">
                    <div className="pad white flex col">
                        <div className="mb tweak-1 svelte-11np3qp">
                            With over 4 years of experience as a <em className="fuschia">Full-Stack Developer</em>, I’ve dedicated my career to crafting digital solutions that bridge creativity and functionality.

                            <br /><br />
                            At <em className="blue">Bosch</em>, I’ve brought ideas to life by developing intuitive chatbot interfaces that streamline data interaction and automate processes.
                            I’ve also built and maintained backend systems powered by AI to classify potential email threats, ensuring security and efficiency.
                            My work extends to managing SQL databases, generating insightful reports, and optimizing Azure cloud applications to reduce costs and improve performance.
                            <br /><br />
                            During my time at <em className="blue">Lubtrac</em>, I led a distributed team to design and develop web and mobile applications that transformed business operations.
                            One of my proudest achievements was creating a mobile app for quotations that became so successful, it was sold as a standalone service.
                            My ability to optimize critical business processes through technology has consistently delivered measurable results.
                            <br /><br />

                            (<em className="yellow">My toolkit</em>) <span className="blue">{'=>'}</span> {'{'}
                            <br />
                            <span className="yellow"> Frontend:</span> [
                            <span className="orange"> "JavaScript (ES6+)" </span>,
                            <span className="orange"> "React.js" </span>,
                            <span className="orange"> "Vue.js" </span>
                            ]
                            <br />

                            <span className="yellow"> Backend:</span> [
                            <span className="orange"> "Laravel" </span>,
                            <span className="orange"> "PHP" </span>,
                            <span className="orange"> "Node.js" </span>
                            ]
                            <br />

                            <span className="yellow"> Databases:</span> [
                            <span className="orange"> "MySQL" </span>,
                            <span className="orange"> "PostgreSQL" </span>,
                            <span className="orange"> "MongoDB" </span>
                            ]
                            <br />

                            <span className="yellow"> Cloud:</span> [
                            <span className="orange"> "Azure (Basic Administration)" </span>,
                            <span className="orange"> "React.js" </span>,
                            <span className="orange"> "Vue.js" </span>
                            ]
                            <br />

                            <span className="yellow"> Tools:</span> [
                            <span className="orange"> "Git" </span>,
                            <span className="orange"> "REST APIs" </span>,
                            <span className="orange"> "CI/CD" </span>,
                            <span className="orange"> "Agile Methodologies" </span>
                            ]
                            <br />
                            {'}'}
                            <br /><br />
                            Let’s collaborate and build something extraordinary.</div>
                    </div>
                    <div className="y-space"></div>
                </article>
            </div>
            </GlitchedComponnent>
        </div>
    );
}

export default Experience;
