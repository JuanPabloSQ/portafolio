import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


const BasicCard = ({ title, body, imagen, repo, link }) => { 
  return (
    <Card sx={{ width: 300, margin: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagen} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
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
}

export default BasicCard;
