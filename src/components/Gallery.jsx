import { CardMedia, Grid } from "@mui/material";
import React from "react";

const Gallery = ({ images }) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "100%",
      }}
    >
      {images?.map((image) => (
        <Grid
          item
          key={image.id}
          xs={3}
          sx={{
            height: "300px",
          }}
        >
          <CardMedia
            component="img"
            image={image.url}
            alt={image.name}
            onClick={() => {
              window.open(image.url);
            }}
            sx={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              border: "2px solid gray",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
