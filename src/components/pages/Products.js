import React, { useState, useEffect } from "react";
import db from "../../firebase/config";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "lightGray",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  media: {
    paddingTop: "60%",
    borderRadius: "12px",
  },
  card: {
    marginTop: "5%",
    width: "100%",
    margin: "10%",
    position: "relative",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#88182F",
    fontFamily: "DotGothic16",
  },
  desc: {
    fontSize: "1.2rem",
    fontFamily: "Akaya Telivigala",
    color: "#881818",
  },
}));

const Products = () => {
  const [data, setData] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("products")
        .orderBy("addDate", "desc")
        .get();
      setData(
        data.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchData();
  }, []);

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={5}>
          {data.map((i) => {
            return (
              <Grid
                item
                container
                key={i.name}
                xs={12}
                md={6}
                style={{ marginTop: "4%" }}
              >
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography className={classes.title} align="center">
                        {i.name}
                      </Typography>
                    </CardContent>
                    <CardMedia className={classes.media} image={i.url} />
                    <CardContent>
                      <Typography
                        className={classes.desc}
                        component="p"
                        variant="body2"
                      >
                        {i.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
