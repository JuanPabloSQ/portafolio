import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaTrain, FaMoneyCheckAlt, FaChartBar } from 'react-icons/fa';
import { SiMui, SiExpress, SiJsonwebtokens, SiVercel, SiMongodb, SiFirebase } from 'react-icons/si';
import { RiToolsLine } from 'react-icons/ri';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
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

                <Typography variant="h5" gutterBottom sx={{ color: 'SkyBlue', mt: 4 }}>
                    LENGUAJES
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
                    {[{ Icon: FaHtml5, color: "#E34F26", label: "HTML", delay: 0.5 },
                      { Icon: FaCss3Alt, color: "#1572B6", label: "CSS", delay: 1 },
                      { Icon: FaJsSquare, color: "#F7DF1E", label: "JavaScript", delay: 1.5 }]
                      .map(({ Icon, color, label, delay }) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay, duration: 0.5 }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Icon size={50} color={color} />
                                <Typography variant="body1" sx={{ mt: 1 }}>{label}</Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Box>

                <Typography variant="h5" gutterBottom sx={{ color: 'SkyBlue', mt: 4 }}>
                    FRAMEWORK Y LIBRERIAS
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
                    {[{ Icon: FaReact, color: "#61DAFB", label: "React", delay: 0.5 },
                      { Icon: SiMui, color: "#007FFF", label: "Material-UI", delay: 1 },
                      { Icon: FaBootstrap, color: "#7952B3", label: "Bootstrap", delay: 1.5 },
                      { Icon: RiToolsLine, color: "#F7DF1E", label: "Yup", delay: 2 },
                      { Icon: SiExpress, label: "Express", delay: 2.5 },
                      { Icon: SiJsonwebtokens, label: "JWT", delay: 3 }]
                      .map(({ Icon, color, label, delay }) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay, duration: 0.5 }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Icon size={50} color={color} />
                                <Typography variant="body1" sx={{ mt: 1 }}>{label}</Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Box>

                <Typography variant="h5" gutterBottom sx={{ color: 'SkyBlue', mt: 4 }}>
                    BASE DE DATOS
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
                    {[{ Icon: SiMongodb, color: "#47A248", label: "MongoDB", delay: 0.5 },
                      { Icon: SiFirebase, color: "#FFCA28", label: "Firebase", delay: 1 }]
                      .map(({ Icon, color, label, delay }) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay, duration: 0.5 }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Icon size={50} color={color} />
                                <Typography variant="body1" sx={{ mt: 1 }}>{label}</Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Box>

                <Typography variant="h5" gutterBottom sx={{ color: 'SkyBlue', mt: 4 }}>
                    SOFTWARE Y HERRAMIENTAS
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
                    {[{ Icon: FaGitAlt, color: "#F05032", label: "Git", delay: 0.5 },
                      { Icon: FaGithub, label: "GitHub", delay: 1 },
                      { Icon: SiVercel, label: "Vercel", delay: 1.5 },
                      { Icon: FaTrain, color: "#007FFF", label: "Railway", delay: 2 },
                      { Icon: FaMoneyCheckAlt, color: "#00BFFF", label: "MercadoPago", delay: 2.5 },
                      { Icon: FaChartBar, color: "#FFD700", label: "Charts", delay: 3 }]
                      .map(({ Icon, color, label, delay }) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
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
        </Box>
    )
});

export default Skills;
