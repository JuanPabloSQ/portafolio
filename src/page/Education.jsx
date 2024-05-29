import { motion, useAnimation } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { forwardRef, useEffect } from 'react';

const Education = forwardRef((props, ref) => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = ref.current.offsetTop;
            const sectionBottom = sectionTop + ref.current.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
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
                    width: '70%', 
                    maxWidth: '1000px', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: 2,
                    textAlign: 'center', 
                    margin: 'auto',
                    mt: 30
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
                        padding: 2,
                    }}
                >   
                    <Typography variant="h2" gutterBottom sx={{ color: '#228B22'  }}>
                        EDUCACÍON
                    </Typography>
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            BOOTCAMP UDD DESAROLLO WEB FULL-STACK
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Universidad del Desarollo 
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/resume.pdf"
                            download
                        >
                            <Typography variant='h6'> Certificado </Typography>
                        </Button>
                    </Box>
                    <Box sx={{ mt: 10 }}>
                        <Typography variant="h5" gutterBottom>
                            METODOLOGÍAS ÁGILES
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Scrum Foundation 
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/resume.pdf"
                            download
                        >
                            <Typography variant='h6'> Certificado </Typography>
                        </Button>
                    </Box>
                    <Box sx={{ mt: 10 }}>
                        <Typography variant="h5" gutterBottom>
                            CURSO DE JAVASCRIPT, HTML, CSS Y NODEJS 
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Udemy
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/resume.pdf"
                            download
                        >
                            <Typography variant='h6'> Certificado </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
});

export default Education;
