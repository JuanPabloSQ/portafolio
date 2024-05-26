import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import AboutMe from './AboutMe';
import Intro from "./Intro"

const Page = () => {
    return (
        <div>
            <NavBar/>
            <Intro/>
            <AboutMe/>              
¿           <Box 
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
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        minHeight: '100vh',
                        textAlign: 'start',
                        padding: 2,
                    }}>
                    <Typography variant="h2" gutterBottom sx={{ color:  'SkyBlue' }}>
                        HABILIDADES TECNICAS
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        
                    </Typography>
                </Box>           
            </Box>
        </div>
    );
};

export default Page;
