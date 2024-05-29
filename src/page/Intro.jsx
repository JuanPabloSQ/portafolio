import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import img from '../img/img.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { forwardRef } from 'react';


const Intro = forwardRef((props, ref) => {
    return (
        <Box
            ref={ref}
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
                        Juan Pablo Sepúlveda Q.
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Desarrollador Full-Stack 
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        <EmailIcon/> Email: jp.sherka@gmail.com
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        <LocalPhoneIcon/> Tef: +56 979 009 008
                    </Typography>
                </Box>
                <Avatar alt="JPSQ" src={img} sx={{ width: 300, height: 300 }} />
            </Box>
            <Button
                variant="contained"
                color="primary" 
                href="/resume.pdf"
                download
            >
                <Typography variant='h5'> Curriculum </Typography>
            </Button>
            <Box sx={{display:"flex", flexDirection:"row", mt: 2}}>
                <IconButton href="https://www.linkedin.com/in/jpsq/" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/JuanPabloSQ" target="_blank">
                    <GitHubIcon/>
                </IconButton>
            </Box>
        </Box>
    );
});

export default Intro;
