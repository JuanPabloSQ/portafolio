import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicCard from '../components/BasicCard';
import eCommerce from '../img/eCommerce.jpg'; 
import RestaurantApp from "../img/RestaurantApp.png";
import Pokedex from "../img/Pokedex.png";
import EmotonialLink from"../img/EmotonialLink.png";
import ToDoList from "../img/ToDoList.png"
import Blog from "../img/Blog.png"

const Proyects = () => {
    return(
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
            <Typography variant="h2" gutterBottom sx={{ color: 'SkyBlue' }}>
                PROYECTOS
            </Typography>
            <Box                     
                sx={{
                display: 'flex',
                flexDirection: 'row',}} 
            >
                <BasicCard title="eCommerce" body="Sitio Web para la venta de plantas usando plataforma de pago" imagen={eCommerce}  link="https://juanpablosq.github.io/Proyecto-5/#/"  />
                <BasicCard title="RestaurantApp" body="Web diseñada con implementacion de menu, contacto y reserva" imagen={RestaurantApp} link="https://juanpablosq.github.io/Proyecto-4/"/>
                <BasicCard title="EmotonialLink" body="App web para registro de eventos y emociones por medio de nodos" imagen={EmotonialLink} link="https://alfredo-baquedano.github.io/emotion-linking/" />
            </Box>
            <Box                     
                sx={{
                display: 'flex',
                flexDirection: 'row',}} 
            >
                <BasicCard title="PokeDex" body="App que consume data base de pokemon con una interfaz interactiva" imagen={Pokedex} link="https://juanpablosq.github.io/Proyecto-3/" />
                <BasicCard title="To Do List" body="Lista de tareas con funcionalidad de CRUD" imagen={ToDoList} link="https://juanpablosq.github.io/Proyecto-2/" />
                <BasicCard title="Static Web" body="Sitio Web estilo blog estatico" imagen={Blog} link="https://juanpablosq.github.io/Proyecto-1/" />
            </Box>
        </Box>
    </Box>
    )
};

export default Proyects;