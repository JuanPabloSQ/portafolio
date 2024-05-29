import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Box } from '@mui/material';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const BasicCard = ({ title, body, imagen, repo, link, icons }) => {
  return (
    <Card
      sx={{
        width: 300,
        margin: 4,
        position: 'relative',
        '&:hover': {
          boxShadow: '0 0 20px 5px rgba(0, 255, 0, 0.6)',
        },
        transition: 'box-shadow 0.3s ease-in-out',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {icons.map(({ Component, props }, index) => (
              <Box key={index} sx={{ mx: 1 }}>
                <Component {...props} />
              </Box>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton href={repo} target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href={link} target="_blank">
          <LinkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
