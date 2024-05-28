import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicCard from '../components/BasicCard';
import eCommerce from '../img/eCommerce.jpg'; 
import RestaurantApp from "../img/RestaurantApp.png";
import Pokedex from "../img/Pokedex.png";
import EmotonialLink from"../img/EmotonialLink.png";
import ToDoList from "../img/ToDoList.png";
import Blog from "../img/Blog.png";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaTrain, FaMoneyCheckAlt, FaChartBar } from 'react-icons/fa';
import { SiMui, SiExpress, SiJsonwebtokens, SiMongodb, SiFirebase } from 'react-icons/si';
import { RiToolsLine } from 'react-icons/ri';

const Proyects = () => {
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
                <Typography variant="h2" gutterBottom sx={{ color: 'SkyBlue' }}>
                    PROYECTOS
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <BasicCard
                        title="eCommerce"
                        body="Sitio Web para la venta de plantas usando plataforma de pago"
                        imagen={eCommerce}
                        repo="https://github.com/JuanPabloSQ/Proyecto-5"
                        link="https://juanpablosq.github.io/Proyecto-5/#/"
                        icons={[
                            { Component: FaReact, props: { size: 20, color: "#61DAFB" } },
                            { Component: FaJsSquare, props: { size: 20, color: "#F7DF1E" } },
                            { Component: SiMui, props: { size: 20, color: "#007FFF" } },
                            { Component: RiToolsLine, props: { size: 20, color: "#F7DF1E" } },
                            { Component: SiExpress, props: { size: 20 } },
                            { Component: SiJsonwebtokens, props: { size: 20 } },
                            { Component: FaMoneyCheckAlt, props: { size: 20, color: "#00BFFF" } },  
                            { Component: SiMongodb, props: { size: 20, color: "#47A248" } },  
                        ]}
                    />
                    <BasicCard
                        title="RestaurantApp"
                        body="Web diseñada con implementacion de menu, contacto y reserva"
                        imagen={RestaurantApp}
                        repo="https://github.com/JuanPabloSQ/Proyecto-4"
                        link="https://juanpablosq.github.io/Proyecto-4/"
                        icons={[
                            { Component: FaReact, props: { size: 30, color: "#61DAFB" } },
                            { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } },
                            { Component: SiMui, props: { size: 30, color: "#007FFF" } },
                            { Component: RiToolsLine, props: { size: 30, color: "#F7DF1E" } },
                            { Component: SiFirebase, props: { size: 30, color: "#FFCA28" } }  // Firebase
                        ]}
                    />
                    <BasicCard
                        title="EmotonialLink"
                        body="App web para registro de eventos y emociones por medio de nodos"
                        imagen={EmotonialLink}
                        repo="https://github.com/alfredo-baquedano/emotion-linking"
                        link="https://alfredo-baquedano.github.io/emotion-linking/"
                        icons={[
                            { Component: FaReact, props: { size: 30, color: "#61DAFB" } },
                            { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } },
                            { Component: SiMui, props: { size: 30, color: "#007FFF" } },
                        ]}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <BasicCard
                        title="PokeDex"
                        body="App que consume data base de pokemon con una interfaz interactiva"
                        imagen={Pokedex}
                        repo="https://github.com/JuanPabloSQ/Proyecto-3"
                        link="https://juanpablosq.github.io/Proyecto-3/"
                        icons={[
                            { Component: FaReact, props: { size: 30, color: "#61DAFB" } },
                            { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } },
                            { Component: SiMui, props: { size: 30, color: "#007FFF" } },
                            { Component: FaChartBar, props: { size: 30, color: "#FFD700" } },
                        ]}
                    />
                    <BasicCard
                        title="To Do List"
                        body="Lista de tareas con funcionalidad de CRUD"
                        imagen={ToDoList}
                        repo="https://github.com/JuanPabloSQ/Proyecto-2"
                        link="https://juanpablosq.github.io/Proyecto-2/"
                        icons={[
                            { Component: FaHtml5, props: { size: 30, color: "#E34F26" } },
                            { Component: FaCss3Alt, props: { size: 30, color: "#1572B6" } },
                            { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } }
                        ]}
                    />
                    <BasicCard
                        title="Static Web"
                        body="Sitio Web estilo blog estatico"
                        imagen={Blog}
                        repo="https://github.com/JuanPabloSQ/Proyecto-1"
                        link="https://juanpablosq.github.io/Proyecto-1/"
                        icons={[
                            { Component: FaHtml5, props: { size: 30, color: "#E34F26" } },
                            { Component: FaCss3Alt, props: { size: 30, color: "#1572B6" } }
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Proyects;
