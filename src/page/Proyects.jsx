import { motion, useAnimation } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicCard from '../components/BasicCard';
import eCommerce from '../img/eCommerce.webp'; 
import RestaurantApp from "../img/RestaurantApp.webp";
import Pokedex from "../img/Pokedex.webp";
import EmotonialLink from"../img/EmotonialLink.webp";
import ToDoList from "../img/ToDoList.webp";
import Blog from "../img/Blog.webp";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaMoneyCheckAlt, FaChartBar } from 'react-icons/fa';
import { SiMui, SiExpress, SiJsonwebtokens, SiMongodb, SiFirebase } from 'react-icons/si';
import { RiToolsLine } from 'react-icons/ri';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Proyects = forwardRef((props, ref) => {
    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.2 
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const projects = [
        {
            title: "eCommerce",
            body: "Sitio Web para la venta de plantas usando plataforma de pago",
            imagen: eCommerce,
            repo: "https://github.com/JuanPabloSQ/Proyecto-5",
            link: "https://juanpablosq.github.io/Proyecto-5/#/",
            icons: [
                { Component: FaReact, props: { size: 20, color: "#61DAFB" } },
                { Component: FaJsSquare, props: { size: 20, color: "#F7DF1E" } },
                { Component: SiMui, props: { size: 20, color: "#007FFF" } },
                { Component: RiToolsLine, props: { size: 20, color: "#F7DF1E" } },
                { Component: SiExpress, props: { size: 20 } },
                { Component: SiJsonwebtokens, props: { size: 20 } },
                { Component: FaMoneyCheckAlt, props: { size: 20, color: "#00BFFF" } },
                { Component: SiMongodb, props: { size: 20, color: "#47A248" } },
            ]
        },
        {
            title: "RestaurantApp",
            body: "Web diseñada con implementacion de menu, contacto y reserva",
            imagen: RestaurantApp,
            repo: "https://github.com/JuanPabloSQ/Proyecto-4",
            link: "https://juanpablosq.github.io/Proyecto-4/",
            icons: [
                { Component: FaReact, props: { size: 30, color: "#61DAFB" } },
                { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } },
                { Component: SiMui, props: { size: 30, color: "#007FFF" } },
                { Component: RiToolsLine, props: { size: 30, color: "#F7DF1E" } },
                { Component: SiFirebase, props: { size: 30, color: "#FFCA28" } } 
            ]
        },
        {
            title: "EmotonialLink",
            body: "App web para registro de eventos y emociones por medio de nodos",
            imagen: EmotonialLink,
            repo: "https://github.com/alfredo-baquedano/emotion-linking",
            link: "https://alfredo-baquedano.github.io/emotion-linking/",
            icons: [
                { Component: FaReact, props: { size: 30, color: "#61DAFB" } },
                { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } },
                { Component: SiMui, props: { size: 30, color: "#007FFF" } },
            ]
        },
        {
            title: "PokeDex",
            body: "App que consume data base de pokemon con una interfaz interactiva",
            imagen: Pokedex,
            repo: "https://github.com/JuanPabloSQ/Proyecto-3",
            link: "https://juanpablosq.github.io/Proyecto-3/",
            icons: [
                { Component: FaReact, props: { size: 30, color: "#61DAFB" } },
                { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } },
                { Component: SiMui, props: { size: 30, color: "#007FFF" } },
                { Component: FaChartBar, props: { size: 30, color: "#FFD700" } },
            ]
        },
        {
            title: "To Do List",
            body: "Lista de tareas con funcionalidad de CRUD",
            imagen: ToDoList,
            repo: "https://github.com/JuanPabloSQ/Proyecto-2",
            link: "https://juanpablosq.github.io/Proyecto-2/",
            icons: [
                { Component: FaHtml5, props: { size: 30, color: "#E34F26" } },
                { Component: FaCss3Alt, props: { size: 30, color: "#1572B6" } },
                { Component: FaJsSquare, props: { size: 30, color: "#F7DF1E" } }
            ]
        },
        {
            title: "Static Web",
            body: "Sitio Web estilo blog estatico",
            imagen: Blog,
            repo: "https://github.com/JuanPabloSQ/Proyecto-1",
            link: "https://juanpablosq.github.io/Proyecto-1/",
            icons: [
                { Component: FaHtml5, props: { size: 30, color: "#E34F26" } },
                { Component: FaCss3Alt, props: { size: 30, color: "#1572B6" } }
            ]
        }
    ];

    return (
        <Box
            ref={ref}
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
                mt: 10,
                mb: 10,
            }}
        >
            <Box
                ref={inViewRef}
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
                <Typography variant="h2" gutterBottom sx={{ color: '#228B22'  }}>
                    PROYECTOS
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                        gap: 3,
                        justifyContent: 'center'
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 50 }
                            }}
                            transition={{ delay: index * 0.3, duration: 0.5 }}
                        >
                            <BasicCard
                                title={project.title}
                                body={project.body}
                                imagen={project.imagen}
                                repo={project.repo}
                                link={project.link}
                                icons={project.icons}
                            />
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
});

export default Proyects;
