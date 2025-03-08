import '../../styles/css/landing.css';
import ResumeFunction from './components/ResumeFunction.tsx';
import AboutInfo from './components/AboutInfo.tsx';
import ProjectsLane from './components/ProjectsLane.tsx'
//import { useEffect, useRef } from "react";
//import { TextEvolutionAnimator } from "../../utils/TextGlitchAnimator.tsx";
//import GlitchedComponnent from '../../components/GlitchedComponnent.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.tsx";

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
                                <Route path="experience" element={<ProjectsLane />} />
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
