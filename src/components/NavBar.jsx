import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles'; 

export default function NavBar({ introRef, aboutRef, skillsRef, proyectsRef, contactRef, educationRef, recognitionRef }) {
  const theme = useTheme(); 

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
      <AppBar position="fixed" >
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => scrollToSection(introRef)}
            sx={{
              '&:hover': {
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`
              }
            }}
          >
            JPSQ
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection(aboutRef)}
            sx={{
              '&:hover': {
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`
              }
            }}
          >
            SOBRE MI
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection(skillsRef)}
            sx={{
              '&:hover': {
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`
              }
            }}
          >
            SKILLS
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection(proyectsRef)}
            sx={{
              '&:hover': {
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`
              }
            }}
          >
            PROYECTOS
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection(educationRef)}
            sx={{
              '&:hover': {
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`
              }
            }}
          >
            EDUCACION
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection(recognitionRef)}
            sx={{
              '&:hover': {
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`
              }
            }}
          >
            RECONOCIMIENTOS
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection(contactRef)}
            sx={{
              '&:hover': {
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`
              }
            }}
          >
            CONTACTO
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
