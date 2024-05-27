import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Contact = () => {
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

        <Typography variant="h2" gutterBottom sx={{ color:  'SkyBlue' }}>
            CONTACTAME
        </Typography>
      <Box sx={{display: 'flex',flexDirection: 'row'}}>
        <Typography variant="body1" gutterBottom>
            Mi correo:
        </Typography>
      <Box sx={{pl:2}}>
        <Typography variant="body1" gutterBottom sx={{ color:  'SkyBlue' }}>
            jp.sherka@gmail.com
        </Typography>
      </Box>
      </Box>
      <Box sx={{display: 'flex',flexDirection: 'row'}}>
        <Typography variant="body1" gutterBottom>
            Mi telefono:
        </Typography>
      <Box sx={{pl:2}}>
        <Typography variant="body1" gutterBottom sx={{ color:  'SkyBlue' }}>
          +56 979 009 008
        </Typography>
      </Box>
      </Box>
      <Box sx={{display: 'flex',flexDirection: 'row'}}>
        <Typography variant="body1" gutterBottom>
            Mi Linkedin:
        </Typography>
      <Box sx={{pl:2}}>
        <Link  href="https://www.linkedin.com/in/jpsq/"  target="_blank">
          https://www.linkedin.com/in/jpsq/
        </Link>
      </Box>
      </Box>
      <Box sx={{display: 'flex',flexDirection: 'row'}}>
        <Typography variant="body1" gutterBottom>
          Mi GitHub:
        </Typography>
      <Box sx={{pl:2}}>
        <Link  href="https://github.com/JuanPabloSQ"  target="_blank">
          https://github.com/JuanPabloSQ
        </Link>
      </Box>
      </Box>
    </Box>
</Box>
  )
};

export default Contact