import '../../styles/css/landing.css';
import ResumeFunction from './components/ResumeFunction.tsx';
import AboutInfo from './components/AboutInfo.tsx';
import ProjectsLane from './components/ProjectsLane.tsx'
//import { useEffect, useRef } from "react";
//import { TextEvolutionAnimator } from "../../utils/TextGlitchAnimator.tsx";
//import GlitchedComponnent from '../../components/GlitchedComponnent.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.tsx";
import Experience from "./components/Experience.tsx";
import Education from "./components/Education.tsx";
import Hobbies from "./components/Hobbies.tsx";

function LandingPage() {

    /*
    const textRef = useRef(null);
    useEffect(() => {
        console.log('usseEffect')
        if (textRef.current) {
            console.log('in use effect in main')
            const animator = new TextEvolutionAnimator(textRef.current);

            animator.initialize();
            animator.start();

            return () => {

            }
        }
    }, [textRef])*/

    return (
        <>
            <div className="full h-min-screen">
                <div className="px">
                    <div className="flex row wrap">


                        <BrowserRouter>
                            <ResumeFunction />
                            <Routes>

                                <Route index element={<AboutInfo />} />
                                <Route path="AboutMe" element={<AboutInfo />} />
                                <Route path="education" element={<Education />} />
                                <Route path="experience" element={<Experience />} />
                                <Route path="hobbies" element={<Hobbies />} />
                                <Route path="contactme" element={<NotFound />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                            <ProjectsLane />
                        </BrowserRouter>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
