import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const onDownload = () => {
    const link = document.createElement("a");
    link.download = `download.txt`;
    link.href = "./download.txt";
    link.click();
  };

const Page = () => {

    return (
        <div>
            <NavBar/>
            <Box>
                <Typography variant="h2" gutterBottom>
                    Hola este es mi portafolio
                </Typography>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>
            <Button  onClick={onDownload} variant="contained" color="primary">
                Descarga mi CV aqui!
            </Button>
        </div>
    )
};

export default Page