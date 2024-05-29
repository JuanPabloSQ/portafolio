import { forwardRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles'; 

const Contact = forwardRef((props, ref) => {
  const theme = useTheme(); 

  return (
    <Box
      ref={ref}
      sx={{
        width: { xs: '90%', md: '70%' },
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',  // Cambio aquí
        padding: { xs: 1, md: 2 },
        textAlign: 'center',
        margin: 'auto',
        mt: 10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Cambio aquí
          justifyContent: 'center', // Cambio aquí
          minHeight: '100vh',
          textAlign: 'center', // Cambio aquí
          padding: { xs: 1, md: 2 },
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{ 
            color: '#228B22',
            fontSize: { xs: '2rem', md: '3rem' } 
          }}
        >
          CONTACTAME
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Email sx={{ color: theme.palette.primary.main, mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              Mi correo:
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: theme.palette.primary.main, fontSize: '1.2rem', mb: 2 }}>
            jp.sherka@gmail.com
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Phone sx={{ color: theme.palette.primary.main, mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              Mi teléfono:
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: theme.palette.primary.main, fontSize: '1.2rem', mb: 2 }}>
            +56 979 009 008
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LinkedIn sx={{ color: theme.palette.primary.main, mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              Mi LinkedIn:
            </Typography>
          </Box>
          <Link href="https://www.linkedin.com/in/jpsq/" target="_blank" sx={{ fontSize: '1.2rem', mb: 2 }}>
            https://www.linkedin.com/in/jpsq/
          </Link>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <GitHub sx={{ color: theme.palette.primary.main, mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              Mi GitHub:
            </Typography>
          </Box>
          <Link href="https://github.com/JuanPabloSQ" target="_blank" sx={{ fontSize: '1.2rem', mb: 2 }}>
            https://github.com/JuanPabloSQ
          </Link>
        </Box>
      </Box>
    </Box>
  );
});

export default Contact;
