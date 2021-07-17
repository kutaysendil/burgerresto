import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Box, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import img1 from "../img/home-carousel/1.jpg";
import img2 from "../img/home-carousel/2.jpg";
import img3 from "../img/home-carousel/3.jpg";
import img4 from "../img/home-carousel/4.jpg";
import img5 from "../img/home-carousel/5.jpg";
import img6 from "../img/home-carousel/6.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to bottom, #000000, #434343)",
    display: "flex",
    minWidth: "100%",
    minHeight: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
  },
  div: {
    position: "relative",
    marginTop: "4%",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container fixed style={{ marginTop: "10%" }}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={2500}
          className={classes.div}
        >
          <div data-src={img1}></div>
          <div data-src={img2}></div>
          <div data-src={img3}></div>
          <div data-src={img4}></div>
          <div data-src={img5}></div>
          <div data-src={img6}></div>
        </AutoplaySlider>
      </Container>
    </Box>
  );
}

export default Home;
