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
        justifyContent: 'flex-start',
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
          alignItems: { xs: 'center', md: 'flex-start' }, 
          justifyContent: 'flex-start',
          minHeight: '80vh',
          textAlign: { xs: 'center', md: 'start' },  
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

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mt: 2 }}>
          <Email sx={{ color: theme.palette.primary.main, mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 0 } }} />
          <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: { xs: 1, sm: 0 } }}>
            Mi correo:
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2 } }}>
            <Typography variant="body1" sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }}>
              jp.sherka@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mt: 2 }}>
          <Phone sx={{ color: theme.palette.primary.main, mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 0 } }} />
          <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: { xs: 1, sm: 0 } }}>
            Mi teléfono:
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2 } }}>
            <Typography variant="body1" sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }}>
              +56 979 009 008
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mt: 2 }}>
          <LinkedIn sx={{ color: theme.palette.primary.main, mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 0 } }} />
          <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: { xs: 1, sm: 0 } }}>
            Mi LinkedIn:
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2 } }}>
            <Link href="https://www.linkedin.com/in/jpsq/" target="_blank" sx={{ fontSize: '1.2rem' }}>
              https://www.linkedin.com/in/jpsq/
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mt: 2 }}>
          <GitHub sx={{ color: theme.palette.primary.main, mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 0 } }} />
          <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: { xs: 1, sm: 0 } }}>
            Mi GitHub:
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2 } }}>
            <Link href="https://github.com/JuanPabloSQ" target="_blank" sx={{ fontSize: '1.2rem' }}>
              https://github.com/JuanPabloSQ
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default Contact;
