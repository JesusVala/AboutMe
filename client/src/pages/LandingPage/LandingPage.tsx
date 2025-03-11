import '../../styles/css/landing.css';
import ResumeFunction from './components/ResumeFunction.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const AboutInfo = lazy(() => import('./components/AboutInfo.tsx'));
const ProjectsLane = lazy(() => import("./components/ProjectsLane.tsx"));
const NotFound = lazy(() => import("./components/NotFound.tsx"));
const Experience = lazy(() => import('./components/Experience.tsx'));
const Education = lazy(() => import("./components/Education.tsx"));
const Hobbies = lazy(() => import("./components/Hobbies.tsx"));

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
                            <Suspense fallback={<div>...</div>}>
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
                            </Suspense>
                        </BrowserRouter>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
