import '../../styles/css/landing.css';
import ResumeFunction from './ResumeFunction.tsx';
import AboutInfo from './AboutInfo.tsx';
import ProjectsLane from './ProjectsLane.tsx'

function LandingPage() {

    return (
        <>
            <div className="full h-min-screen">
                <div className="px">
                    <div className="flex row wrap">
                        <ResumeFunction />
                        <AboutInfo />
                        <ProjectsLane/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
