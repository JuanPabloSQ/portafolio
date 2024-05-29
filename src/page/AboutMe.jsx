import { motion, useAnimation } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'; // Importar Link
import { forwardRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

const AboutMe = forwardRef((props, ref) => {
    const controls = useAnimation();
    const theme = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start({ opacity: 1, y: 0 });
                    } else {
                        controls.start({ opacity: 0, y: 50 });
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
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
                    mt: { xs: '56px', md: '64px' },
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
                    <Typography variant="h2" gutterBottom sx={{ color: '#228B22' }}>
                        SOBRE MI
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Soy desarrollador web full stack con experiencia en diversos proyectos. Me apasionan los desafíos innovadores y busco constantemente expandir mis habilidades. Además, tengo una segunda carrera en enfermería. Esta formación me ha proporcionado habilidades blandas esenciales como la comunicación efectiva, el trabajo en equipo y la resolución de problemas en situaciones de alta presión.
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.2rem', color: theme.palette.primary.main }}>
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
                        <Link href="https://www.linkedin.com/in/jpsq/" target="_blank" sx={{ fontSize: '1.2rem', color: theme.palette.primary.main }}>
                            LinkedIn
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    );
});

export default AboutMe;
