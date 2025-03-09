import GlitchedComponnent from "../../../components/GlitchedComponnent.tsx";

function Experience() {

    return (
        <div className="full md:half lg:screen-v-scroll flex row wrap relative">
            <GlitchedComponnent>
                <div className="full md:py">
                    <header className="full noselect pl-1 svelte-11np3qp">
                        <div className="px md:py">
                            <div className="large title white svelte-11np3qp">Experience.js</div>
                        </div>
                    </header>
                    <article className="pl-1 svelte-11np3qp">
                        <div className="pad white flex col">
                            <div className="mb tweak-1 svelte-11np3qp">
                                <em className="grey"> //Bosch Experience (2022 - Present) </em> <br />
                                <em className="blue">function </em><em className="green">boschExperience</em>() {'{'} <br />
                                <em className="blue">const </em><em className="yellow">details</em> = {'{'} <br />
                                <em className="green">duration: </em><em className="orange">"2022 – Present",</em> <br />
                                <em className="green">location: </em><em className="orange">"Guadalajara, Jalisco",</em> <br />
                                <em className="green">role: </em><em className="orange">"Full-Stack Developer",</em> <br />
                                <em className="green">achievements: </em>
                                [<br />
                                &nbsp;<em className="orange">"Developed chatbot interfaces for data interaction and process automation."</em>,<br />
                                &nbsp;<em className="orange">"Implemented web-based solutions to improve internal workflows."</em>,<br />
                                &nbsp;<em className="orange">"Maintained and enhanced a backend system using AI to classify email threats."</em>,<br />
                                &nbsp;<em className="orange">"Managed multiple SQL databases and generated detailed reports."</em>,<br />
                                &nbsp;<em className="orange">"Administered Azure cloud applications, optimizing resource costs."</em><br />
                                &nbsp;]{'}'};
                                <br />
                                <em className="fuschia">return </em> <em className="blue">details</em>: <br />
                                {'}'}
                                <br /><br />

                                <em className="grey"> //Lubtrac Experience (2021 - 2022) </em> <br />
                                <em className="blue">function </em><em className="green">lubtracExperience</em>() {'{'} <br />
                                <em className="blue">const </em><em className="yellow">details</em> = {'{'} <br />
                                <em className="green">duration: </em><em className="orange">"2021 – 2022",</em> <br />
                                <em className="green">location: </em><em className="orange">"Guadalajara, Jalisco",</em> <br />
                                <em className="green">role: </em><em className="orange">"Full-Stack Developer",</em> <br />
                                <em className="green">achievements: </em>
                                [<br />
                                &nbsp;<em className="orange">"Designed and developed web and mobile apps for business management."</em>,<br />
                                &nbsp;<em className="orange">"Built a successful mobile app for quotations, later sold as a service."</em>,<br />
                                &nbsp;<em className="orange">"Led a distributed team using Agile methodologies."</em>,<br />
                                &nbsp;<em className="orange">"Optimized critical business processes through web platforms."</em>,<br />
                                &nbsp;<em className="orange">"Created reports using SQL and NoSQL databases."</em><br />
                                &nbsp;]{'}'};
                                <br />
                                <em className="fuschia">return </em> <em className="blue">details</em>: <br />
                                {'}'}
                                <br /><br />

                                <em className="grey"> //Agilgob Experience (2020) </em> <br />
                                <em className="blue">function </em><em className="green">agilgobExperience</em>() {'{'} <br />
                                <em className="blue">const </em><em className="yellow">details</em> = {'{'} <br />
                                <em className="green">duration: </em><em className="orange">"2020",</em> <br />
                                <em className="green">location: </em><em className="orange">"Guadalajara, Jalisco",</em> <br />
                                <em className="green">role: </em><em className="orange">"Full-Stack Developer Jr",</em> <br />
                                <em className="green">achievements: </em>
                                [<br />
                                &nbsp;<em className="orange">"Maintained government systems for seamless operations."</em>,<br />
                                &nbsp;<em className="orange">"Developed new features to accommodate client use cases."</em><br />
                                &nbsp;]{'}'};
                                <br />
                                <em className="fuschia">return </em> <em className="blue">details</em>: <br />
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

export default Experience;
