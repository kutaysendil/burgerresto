import React, { useEffect, useState } from "react";
import db, { auth } from "../../firebase/config";
import Login from "./Login";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import UpdateInput from "./UpdateInput";
import { CardActionArea, Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
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

const DeleteForm = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [docs, setDocs] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  useEffect(() => {
    db.collection("products")
      .orderBy("addDate", "desc")
      .onSnapshot((snap) => {
        let docu = [];
        snap.forEach((doc) => docu.push({ ...doc.data(), id: doc.id }));
        setDocs(docu);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("products").get();
      setData(
        data.docs.map((doc) => {
          return doc.data();
        })
      );
    };

    fetchData();
  }, []);

  return (
    <>
      {user ? (
        <Box className={classes.root}>
          <Container>
            <Grid container spacing={5}>
              {docs.map((i) => {
                return (
                  <Grid
                    item
                    container
                    key={i.name}
                    xs={6}
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

                          <UpdateInput docs={i} />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      ) : (
        <Login />
      )}
    </>
  );
};

export default DeleteForm;
