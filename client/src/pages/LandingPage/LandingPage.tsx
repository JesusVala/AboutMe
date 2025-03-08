import '../../styles/css/landing.css';
import ResumeFunction from './ResumeFunction.tsx';
import AboutInfo from './AboutInfo.tsx';
import ProjectsLane from './ProjectsLane.tsx'
import { useEffect, useRef } from "react";
import { TextEvolutionAnimator } from "../../utils/TextGlitchAnimator.tsx";

function LandingPage() {

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
    }, [textRef])

    return (
        <>
            <div ref={textRef} className="full h-min-screen">
                <div className="px">
                    <div className="flex row wrap">
                        <ResumeFunction />
                        <AboutInfo reference={textRef}/>
                        <ProjectsLane />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
