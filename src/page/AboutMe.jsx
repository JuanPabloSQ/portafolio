import { motion, useAnimation } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { forwardRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles'; 

const AboutMe = forwardRef((props, ref) => {
    const controls = useAnimation();
    const theme = useTheme(); 

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
                    <Typography variant="h2" gutterBottom sx={{ color:  '#228B22' }}>
                        SOBRE MI
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Soy desarrollador web full stack con experiencia en diversos proyectos. Me apasionan los desafíos innovadores y busco constantemente expandir mis habilidades. Además, tengo una segunda carrera en enfermería. Esta formación me ha proporcionado habilidades blandas esenciales como la comunicación efectiva, el trabajo en equipo y la resolución de problemas en situaciones de alta presión.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.2rem', color: theme.palette.primary.main  }}>
                        Actualmente estoy buscando una nueva oportunidad laboral, cuento con experiencia tanto en frontend como backend en el desarrollo web.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Si quieres contactarte conmigo puedes escribirme a{' '}
                        <Typography variant="body1" component="span" sx={{ color: theme.palette.primary.main }}>
                            jp.sherka@gmail.com
                        </Typography>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Mira mi experiencia laboral en{' '}
                        <Typography variant="body1" component="span" sx={{ color: theme.palette.primary.main }}>
                            LinkedIn
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    );
});

export default AboutMe;

