import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import AboutMe from './AboutMe';
import Intro from "./Intro";
import Skills from "./Skills";
import Proyects from './Proyects';
import Education from "./Education";
import Contact from "./Contact";

const Page = () => {
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const proyectsRef = useRef(null);
    const educationRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div>
            <NavBar introRef={introRef} 
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    proyectsRef={proyectsRef}
                    educationRef={educationRef} 
                    contactRef={contactRef} 
            />
            <Intro ref={introRef}/>
            <AboutMe ref={aboutRef} />
            <Skills ref={skillsRef}/>
            <Proyects ref={proyectsRef}/>
            <Education ref={educationRef}/>
            <Contact ref={contactRef} />
        </div>
    );
};

export default Page;
