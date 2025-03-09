import GlitchedComponnent from "../../../components/GlitchedComponnent.tsx";

function Education() {

    return (
        <div className="full md:half lg:screen-v-scroll flex row wrap relative">
            <GlitchedComponnent>
                <div className="full md:py">
                    <header className="full noselect pl-1 svelte-11np3qp">
                        <div className="px md:py">
                            <div className="large title white svelte-11np3qp">Education</div>
                        </div>
                    </header>
                    <article className="pl-1 svelte-11np3qp">
                        <div className="pad white flex col">
                            <div className="mb tweak-1 svelte-11np3qp">
                                <em className="grey"> --Education Schema </em> <br />
                                <em className="blue">CREATE TABLE </em><em className="green">Education </em>( <br />
                                id <em className="blue">SERIAL PRIMARY KEY </em>, <br />
                                degree <em className="blue">VARCHAR</em>(<em className="fuschia">255</em>)  <em className="blue">NOT NULL</em>, <br />

                                institution <em className="blue">VARCHAR</em>(<em className="fuschia">255</em>)  <em className="blue">NOT NULL</em>, <br />
                                duration <em className="blue">VARCHAR</em>(<em className="fuschia">50</em>)  <em className="blue">NOT NULL</em>, <br />
                                location <em className="blue">VARCHAR</em>(<em className="fuschia">255</em>)  <em className="blue">NOT NULL</em>, <br />
                                );
                                <br /><br />

                                <em className="grey"> --Insert Education Data </em> <br />

                                <em className="blue">INSERT INTO </em><em className="green">Education </em> (degree, institution, duration, location) <br />
                                <em className="blue">VALUES </em>( <br />
                                <em className="orange">'Computational Systems Engineering'</em>, <br />
                                <em className="orange">'Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)'</em>, <br />
                                <em className="orange">'2015 – 2020'</em>, <br />
                                <em className="orange">'Guadalajara, Jalisco'</em>, <br />
                                );
                                <br /><br />

                                <em className="grey"> --Query Education Data </em> <br />
                                <em className="blue">SELECT </em><em className="fuschia"> * </em><em className="blue"> FROM </em><em className="green"> Education </em>
                                

                            </div>
                        </div>
                        <div className="y-space"></div>
                    </article>
                </div>
            </GlitchedComponnent>
        </div>
    );
}

export default Education;
