import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

export default function NavBar({ introRef, aboutRef, skillsRef, proyectsRef, contactRef, educationRef, recognitionRef }) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth',
      });
      setDrawerOpen(false); // Close drawer when clicking on a menu item
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'JPSQ', ref: introRef },
    { label: 'SOBRE MI', ref: aboutRef },
    { label: 'SKILLS', ref: skillsRef },
    { label: 'PROYECTOS', ref: proyectsRef },
    { label: 'EDUCACION', ref: educationRef },
    { label: 'RECONOCIMIENTOS', ref: recognitionRef },
    { label: 'CONTACTO', ref: contactRef },
  ];

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => scrollToSection(item.ref)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList()}
          </Drawer>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => scrollToSection(item.ref)}
                sx={{
                  '&:hover': {
                    border: `2px solid ${theme.palette.primary.main}`,
                    boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
