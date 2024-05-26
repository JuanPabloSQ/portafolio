import NavBar from '../components/NavBar';
import AboutMe from './AboutMe';
import Intro from "./Intro";
import Skills from "./Skills";
import Proyects from './Proyects';


const Page = () => {
    return (
        <div>
            <NavBar/>
            <Intro/>
            <AboutMe/>
            <Skills/>
            <Proyects/>
        </div>
    );
};

export default Page;
