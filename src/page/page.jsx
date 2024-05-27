import NavBar from '../components/NavBar';
import AboutMe from './AboutMe';
import Intro from "./Intro";
import Skills from "./Skills";
import Proyects from './Proyects';
import Education from "./Education";
import Contact from "./Contact"


const Page = () => {
    return (
        <div>
            <NavBar/>
            <Intro/>
            <AboutMe/>
            <Skills/>
            <Proyects/>
            <Education/>
            <Contact/>
        </div>
    );
};

export default Page;
