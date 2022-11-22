import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea } from '@mui/material';
import portfolioCard from '../card_data';

const ImageCard = () => {

  return <Grid item xs={3}>
<Card sx={{ maxWidth: 345 }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="150"
      image={portfolioCard.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" color="secondary">
      {portfolioCard.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {portfolioCard.description}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</Grid>
}

export default ImageCard;