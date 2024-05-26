import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AboutMe = () => {
    return (
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
            <Typography variant="h2" gutterBottom sx={{ color:  'SkyBlue' }}>
                SOBRE MI
            </Typography>
            <Typography variant="body1" gutterBottom>
                Soy un desarrollador web full stack con experiencia en la creación de una variedad de proyectos. Me apasionan los desafíos nuevos e innovadores y estoy constantemente buscando oportunidades para expandir mis habilidades y conocimientos.
                Además, tengo una segunda carrera en enfermería, lo cual me ha permitido desarrollar habilidades blandas como la comunicación efectiva, el trabajo en equipo y la resolución de problemas. Estas habilidades complementan mis habilidades técnicas y me permiten ofrecer soluciones completas y centradas en el usuario en mis proyectos.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.2rem', color: 'SkyBlue' }}>
                Actualmente estoy buscando una nueva oportunidad laboral, cuento con experiencia tanto en frontend como backend en el desarrollo web.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Si quieres contactarte conmigo puedes escribirme a{' '}
             <Typography variant="body1" component="span" sx={{ color: 'skyblue' }}>
            jp.sherka@gmail.com
            </Typography>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Mira mi experiencia laboral en{' '}
            <Typography variant="body1" component="span" sx={{ color: 'skyblue' }}>
                LinkedIn
            </Typography>
            </Typography>
        </Box>
    </Box>
    )
};

export default AboutMe;