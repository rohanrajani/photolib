import * as React from "react";
import { Card, Grid, Avatar, Box, Typography, Button } from "@mui/material";

function UserCard(props: any) {
  const {user, goToLink} = props
  return (
    <>
    <Grid item xs={4} sm={4} md={4}>
      <Card style={{ padding: "1rem", backgroundColor: "white" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Avatar />
          <Typography fontSize={30} marginLeft={2}>
            {user.name}
          </Typography>
          <Button
            onClick={() => {
              goToLink(`/user/${user.id}`);
            }}
            variant="contained"
            style={{ maxHeight: "3rem" }}
          >
            Albums
          </Button>
        </Box>
        <Box>
          <Typography>
            <b>Email :</b> <a href={`mailto:${user.email}`}>{user.email}</a>
          </Typography>
        </Box>
        <Box>
          <Typography>
            <b>Phone :</b> {user.phone}
          </Typography>
        </Box>
      </Card>
    </Grid>
    </>
  );
}
export default UserCard;
