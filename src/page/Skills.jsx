import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaTrain, FaMoneyCheckAlt, FaChartBar, } from 'react-icons/fa';
import { SiMui, SiExpress, SiJsonwebtokens, SiVercel, SiMongodb, SiFirebase } from 'react-icons/si';
import { RiToolsLine } from 'react-icons/ri';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
    return(
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
                mt:10
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaHtml5 size={50} color="#E34F26" />
                        <Typography variant="body1" sx={{ mt: 1 }}>HTML</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaCss3Alt size={50} color="#1572B6" />
                        <Typography variant="body1" sx={{ mt: 1 }}>CSS</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaJsSquare size={50} color="#F7DF1E" />
                        <Typography variant="body1" sx={{ mt: 1 }}>JavaScript</Typography>
                    </Box>
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaReact size={50} color="#61DAFB" />
                        <Typography variant="body1" sx={{ mt: 1 }}>React</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <SiMui size={50} color="#007FFF" />
                        <Typography variant="body1" sx={{ mt: 1 }}>Material-UI</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaBootstrap size={50} color="#7952B3" />
                        <Typography variant="body1" sx={{ mt: 1 }}>Bootstrap</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <RiToolsLine size={50} color="#F7DF1E" />
                        <Typography variant="body1" sx={{ mt: 1 }}>Yup</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <SiExpress size={50} />
                        <Typography variant="body1" sx={{ mt: 1 }}>Express</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <SiJsonwebtokens size={50} />
                        <Typography variant="body1" sx={{ mt: 1 }}>JWT</Typography>
                    </Box>
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <SiMongodb size={50} color="#47A248" />
                        <Typography variant="body1" sx={{ mt: 1 }}>MongoDB</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <SiFirebase size={50} color="#FFCA28" />
                        <Typography variant="body1" sx={{ mt: 1 }}>Firebase</Typography>
                    </Box>
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaGitAlt size={50} color="#F05032" />
                        <Typography variant="body1" sx={{ mt: 1 }}>Git</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaGithub size={50} />
                        <Typography variant="body1" sx={{ mt: 1 }}>GitHub</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <SiVercel size={50} />
                        <Typography variant="body1" sx={{ mt: 1 }}>Vercel</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaTrain size={50} color="#007FFF" />
                        <Typography variant="body1" sx={{ mt: 1 }}>Railway</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaMoneyCheckAlt size={50} color="#00BFFF" />
                        <Typography variant="body1" sx={{ mt: 1 }}>MercadoPago</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FaChartBar size={50} color="#FFD700" />
                        <Typography variant="body1" sx={{ mt: 1 }}>Charts</Typography>
                    </Box>
                </Box>
            </Box>           
        </Box>
    )
});

export default Skills;
