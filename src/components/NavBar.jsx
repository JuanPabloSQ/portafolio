import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function NavBar({ introRef, aboutRef, skillsRef, proyectsRef,contactRef, educationRef, }) {
  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit" onClick={() => scrollToSection(introRef)}>JPSQ</Button>
          <Button color="inherit" onClick={() => scrollToSection(aboutRef)}>SOBRE MI</Button>
          <Button color="inherit" onClick={() => scrollToSection(skillsRef)}>SKILLS</Button>
          <Button color="inherit" onClick={() => scrollToSection(proyectsRef)}>PROYECTOS</Button>
          <Button color="inherit" onClick={() => scrollToSection(educationRef)}>EDUCACION</Button>
          <Button color="inherit" onClick={() => scrollToSection(contactRef)}>CONTACTO</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
