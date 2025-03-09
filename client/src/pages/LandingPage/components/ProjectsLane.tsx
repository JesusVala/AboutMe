import GlitchedComponnent from "../../../components/GlitchedComponnent.tsx";

function ProjectsLane() {

    return (
        
            <div className="full md:hidden lg:flex lg:quarter lg:screen-v-scroll flex row wrap">
                <GlitchedComponnent>
                <aside className="full noselect py">
                    <em className="grey"> /*This section it's new, so no much to see*/</em> <br />
                    <em className="blue">const </em><em className="yellow">MY_PROJECTS</em> <span className="blue"></span> {' = {'}
                    <div className="pad green x-multi-column">
                        <a target="_blank" href="https://jesusvala.github.io/resumegame/"><em>01: Game Resume</em></a><br />

                    </div>
                    {'}'}
                    <div className="y-space"></div>
                </aside>
                </GlitchedComponnent>
            </div>
        
    );
}

export default ProjectsLane;
