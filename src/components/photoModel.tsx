import * as React from "react";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

function PhotoModel(props: any) {
  const modelStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modelStyle}>
        <img
          style={{ maxWidth: "100%" }}
          src={props.img.url}
          alt={props.img.url}
        />
        <Typography gutterBottom variant="h6" color={"white"} component="div">
          {props.img.title}
        </Typography>
      </Box>
    </Modal>
  );
}
export default PhotoModel;
