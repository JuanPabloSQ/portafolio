import { motion, useAnimation } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { forwardRef, useEffect } from 'react';
import EmotonialLink from '../img/EmotonialLink.webp';
import BasicCard from '../components/BasicCard';
import { FaReact, FaJsSquare } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';

const Recognition = forwardRef((props, ref) => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = ref.current.offsetTop;
            const sectionBottom = sectionTop + ref.current.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            if ((window.scrollY >= sectionTop && window.scrollY < sectionBottom) || (scrollPosition > sectionTop && scrollPosition <= sectionBottom)) {
                controls.start({ opacity: 1, y: 0 });
            } else {
                controls.start({ opacity: 0, y: 50 });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, ref]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
        >
            <Box
                sx={{
                    width: { xs: '90%', md: '70%' },
                    maxWidth: '1000px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: { xs: 1, md: 2 },
                    textAlign: 'center',
                    margin: 'auto',
                    mt: 10,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        minHeight: '100vh',
                        textAlign: 'start',
                        padding: { xs: 1, md: 2 },
                    }}
                >
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ 
                            color: '#228B22',
                            fontSize: { xs: '2rem', md: '3rem' } // Ajuste del tamaño del texto para dispositivos móviles y más grandes
                        }}
                    >
                        RECONOCIMIENTOS
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        1° HACKATHON HEALTHY GAMER
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Equipo ganador de la primera hackaton realizada por el equipo de desarollo de HEALTHY GAMER
                    </Typography>
                    <Box sx={{ width: '100%', mt: 4 }}>
                        <BasicCard
                            title="EmotonialLink"
                            body="App web para registro de eventos y emociones por medio de nodos"
                            imagen={EmotonialLink}
                            repo="https://github.com/alfredo-baquedano/emotion-linking"
                            link="https://alfredo-baquedano.github.io/emotion-linking/"
                            icons={[
                                { Component: FaReact, props: { size: 30, color: "#61DAFB" } },
                                { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } },
                                { Component: SiMui, props: { size: 30, color: "#007FFF" } },
                            ]}
                        />
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
});

export default Recognition;
