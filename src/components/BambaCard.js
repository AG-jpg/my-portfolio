import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea, Link } from '@mui/material';

const BambaCard = () => {

  return <Grid item xs={3}>
    <Link href="https://simmer.io/@Asimov/bamba-adventure" target="_blank">
<Card sx={{ maxWidth: 345 }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="150"
      image={"https://aldoguzman.design/wp-content/uploads/2022/11/bambasadventure.webp"}
    />
    <CardContent>
      <Typography style={{
        fontWeight: 600,
        textAlign: "center",
      }}>
      {"Bamba's Adventure"}
      </Typography>
      <hr style={{
        margin: 7
      }}></hr>
      <Typography variant="body1" color="white" marginLeft={2}>
      {"Help the cutest dog in her trip trough the snowy lands."}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</Link>
</Grid>

}

export default BambaCard;