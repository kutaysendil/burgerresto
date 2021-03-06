import React from "react";
import hmbr from "../img/hakk.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Maps from "../Maps";

const useStyles = makeStyles({
  root: {
    background: `url(${hmbr})`,
    textAlign: "center",
    minWidth: "100%",
    minHeight: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    position: "fixed",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
        style={{ marginTop: "10%" }}
      >
        <Grid item sm={12} md={6} lg={4}>
          <Typography component="h2">Lorem ipsum dolor sit amet.</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Typography component="h5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, sit!
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            voluptatibus iste numquam. Ducimus, sequi deserunt consequuntur, ex
            possimus nemo sint adipisci, expedita quam facilis commodi.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4} style={{ marginTop: "10%" }}>
          <Maps />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
