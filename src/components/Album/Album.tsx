import * as React from "react";
import { Card, Grid, Box, Typography, Button } from "@mui/material";

function AlbumCard(props: any) {
  const {album, goToLink} = props
  
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card style={{ padding: "1rem", backgroundColor: "white" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize={20} marginLeft={2}>
            {album.title}
          </Typography>
          <Button onClick={()=>{goToLink(`/album/${album.id}`)}} variant="contained" style={{ maxHeight: "3rem" }}>
              Photos
            </Button>
          </Box>
      </Card>
    </Grid>
  );
}
export default AlbumCard;
