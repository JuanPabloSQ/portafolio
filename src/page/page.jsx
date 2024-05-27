import NavBar from '../components/NavBar';
import AboutMe from './AboutMe';
import Intro from "./Intro";
import Skills from "./Skills";
import Proyects from './Proyects';
import Education from "./Education";


const Page = () => {
    return (
        <div>
            <NavBar/>
            <Intro/>
            <AboutMe/>
            <Skills/>
            <Proyects/>
            <Education/>
        </div>
    );
};

export default Page;
