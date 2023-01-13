import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Card, Grid, Typography, CardActionArea } from "@mui/material";

function PhotoCard(props: any) {
  const {photo, handleOpen} = props
  return (
    <Grid item xs={3} sm={3} md={3}>
      <Card
        onClick={() => {
          handleOpen(photo);
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={photo.thumbnailUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {photo.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
export default PhotoCard;
