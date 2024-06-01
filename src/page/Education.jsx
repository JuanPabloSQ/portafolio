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
                    mb: 20,
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
                    <Typography variant="h2" gutterBottom sx={{ color: '#228B22'  }}>
                        EDUCACIÓN
                    </Typography>
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" gutterBottom>
                            BOOTCAMP UDD DESARROLLO WEB FULL-STACK
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Universidad del Desarrollo 
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/resume.pdf"
                            download
                            sx={{
                                position: 'relative',
                                '&:hover': {
                                    boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.6)',
                                },
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <Typography variant='h6'> Certificado </Typography>
                        </Button>
                    </Box>
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" gutterBottom>
                            METODOLOGÍAS ÁGILES
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Scrum Foundation 
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            href="https://github.com/JuanPabloSQ/portafolio/blob/main/public/certificate.pdf"
                            target="_blank"
                            download
                            sx={{
                                position: 'relative',
                                '&:hover': {
                                    boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.6)',
                                },
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <Typography variant='h6'> Certificado </Typography>
                        </Button>
                    </Box>
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" gutterBottom>
                            CURSO DE JAVASCRIPT, HTML, CSS Y NODEJS 
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Udemy
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            href="https://github.com/JuanPabloSQ/portafolio/blob/main/public/udemy.pdf"
                            target="_blank"
                            download
                            sx={{
                                position: 'relative',
                                '&:hover': {
                                    boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.6)',
                                },
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                        >
                            <Typography variant='h6'> Certificado </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box >
        </motion.div>
    );
});

export default Education;
