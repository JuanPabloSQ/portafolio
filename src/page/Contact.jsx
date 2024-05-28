import { forwardRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = forwardRef((props, ref) => {
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
        mt: 10,
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
          CONTACTAME
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
          <Email sx={{ color: 'SkyBlue', mr: 1 }} />
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            Mi correo:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ color: 'SkyBlue', fontSize: '1.2rem' }}>
              jp.sherka@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
          <Phone sx={{ color: 'SkyBlue', mr: 1 }} />
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            Mi telefono:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ color: 'SkyBlue', fontSize: '1.2rem' }}>
              +56 979 009 008
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
          <LinkedIn sx={{ color: 'SkyBlue', mr: 1 }} />
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            Mi LinkedIn:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Link href="https://www.linkedin.com/in/jpsq/" target="_blank" sx={{ fontSize: '1.2rem' }}>
              https://www.linkedin.com/in/jpsq/
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
          <GitHub sx={{ color: 'SkyBlue', mr: 1 }} />
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            Mi GitHub:
          </Typography>
          <Box sx={{ pl: 2 }}>
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

