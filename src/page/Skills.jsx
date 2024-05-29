import { motion, useAnimation } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaTrain, FaMoneyCheckAlt, FaChartBar } from 'react-icons/fa';
import { SiMui, SiExpress, SiJsonwebtokens, SiVercel, SiMongodb, SiFirebase } from 'react-icons/si';
import { RiToolsLine } from 'react-icons/ri';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = forwardRef((props, ref) => {
    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.4 
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const skillsData = [
        {
            category: "LENGUAJES",
            skills: [
                { Icon: FaHtml5, color: "#E34F26", label: "HTML", delay: 0.5 },
                { Icon: FaCss3Alt, color: "#1572B6", label: "CSS", delay: 1 },
                { Icon: FaJsSquare, color: "#F7DF1E", label: "JavaScript", delay: 1.5 }
            ]
        },
        {
            category: "FRAMEWORK Y LIBRERIAS",
            skills: [
                { Icon: FaReact, color: "#61DAFB", label: "React", delay: 0.5 },
                { Icon: SiMui, color: "#007FFF", label: "Material-UI", delay: 1 },
                { Icon: FaBootstrap, color: "#7952B3", label: "Bootstrap", delay: 1.5 },
                { Icon: RiToolsLine, color: "#F7DF1E", label: "Yup", delay: 2 },
                { Icon: SiExpress, label: "Express", delay: 2.5 },
                { Icon: SiJsonwebtokens, label: "JWT", delay: 3 }
            ]
        },
        {
            category: "BASE DE DATOS",
            skills: [
                { Icon: SiMongodb, color: "#47A248", label: "MongoDB", delay: 0.5 },
                { Icon: SiFirebase, color: "#FFCA28", label: "Firebase", delay: 1 }
            ]
        },
        {
            category: "SOFTWARE Y HERRAMIENTAS",
            skills: [
                { Icon: FaGitAlt, color: "#F05032", label: "Git", delay: 0.5 },
                { Icon: FaGithub, label: "GitHub", delay: 1 },
                { Icon: SiVercel, label: "Vercel", delay: 1.5 },
                { Icon: FaTrain, color: "#007FFF", label: "Railway", delay: 2 },
                { Icon: FaMoneyCheckAlt, color: "#00BFFF", label: "MercadoPago", delay: 2.5 },
                { Icon: FaChartBar, color: "#FFD700", label: "Charts", delay: 3 }
            ]
        }
    ];

    return (
        <Box
            ref={ref}
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
                mt: 10
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
                    padding: 2,
                }}
            >
                <Typography variant="h2" gutterBottom sx={{ color: 'SkyBlue' }}>
                    HABILIDADES TECNICAS
                </Typography>

                {skillsData.map(({ category, skills }) => (
                    <Box key={category}>
                        <Typography variant="h5" gutterBottom sx={{ color: 'SkyBlue', mt: 4 }}>
                            {category}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 3,
                                mt: 2,
                            }}
                        >
                            {skills.map(({ Icon, color, label, delay }) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={controls}
                                    variants={{
                                        visible: { opacity: 1, y: 0 },
                                        hidden: { opacity: 0, y: 50 }
                                    }}
                                    transition={{ delay, duration: 0.5 }}
                                >
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Icon size={50} color={color} />
                                        <Typography variant="body1" sx={{ mt: 1 }}>{label}</Typography>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
});

export default Skills;
