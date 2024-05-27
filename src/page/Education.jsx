import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Education = () => {
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
                EDUCACíON
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
                color="info"
                href="/resume.pdf"
                download
            >
                <Typography variant='h6'> Certificado </Typography>
                </Button>
            </Box>
            <Box sx={{mt:10}}>
                <Typography variant="h5" gutterBottom>
                Metodologías ágiles
                </Typography>
                <Typography variant="h6" gutterBottom>
                Scrum Foundation 
                </Typography>
                <Button
                variant="contained"
                color="info"
                href="/resume.pdf"
                download
            >
                <Typography variant='h6'> Certificado </Typography>
                </Button>
            </Box>
            <Box sx={{mt:10}}>
                <Typography variant="h5" gutterBottom>
                Curso de JavaScript, HTML, CSS y NodeJS
                </Typography>
                <Typography variant="h6" gutterBottom>
                Udemy
                </Typography>
                <Button
                variant="contained"
                color="info"
                href="/resume.pdf"
                download
            >
                <Typography variant='h6'> Certificado </Typography>
                </Button>
            </Box>
        </Box>
    </Box>

    )
};

export default Education;