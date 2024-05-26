import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const Page = () => {
    return (
        <div>
            <NavBar/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    padding: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mb: 2,
                    }}
                >
                    <Box>
                    <Typography variant="h2" gutterBottom>
                        Hola, Soy Juan Pablo SQ.
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Desarollador Full-Stack / Nurse
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Y este es mi portafolio
                    </Typography>
                    </Box>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 300, height: 300 }} />
                </Box>
                <Button
                    variant="contained"
                    color="info"
                    href="/resume.pdf"
                    download
                >
                    <Typography variant='h5'> Descarga mi CV </Typography>
                </Button>
            </Box>
        </div>
    );
};

export default Page;
