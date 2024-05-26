import NavBar from '../components/NavBar';
import AboutMe from './AboutMe';
import Intro from "./Intro";
import Skills from "./Skills"

const Page = () => {
    return (
        <div>
            <NavBar/>
            <Intro/>
            <AboutMe/>              
            <Skills/>
        </div>
    );
};

export default Page;
