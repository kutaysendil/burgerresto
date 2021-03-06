import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Box, Grid } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(to right, #bdc3c7, #2c3e50)",
    minWidth: "100%",
    minHeight: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "center",
    height: "100vh",
  },
  button: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(20),
  },
  grid: {
    marginTop: theme.spacing(10),
  },
}));

const Admin = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <Box className={classes.root}>
      {user ? (
        <Container>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "50vh" }}
            spacing={5}
          >
            <Link to="/uploadform" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                className={classes.button}
              >
                Ürün Ekle
              </Button>
            </Link>
            <Link to="/deleteform" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                endIcon={<DeleteIcon />}
                className={classes.button}
              >
                Ürün Sil ve Güncelle
              </Button>
            </Link>
            <Button
              color="secondary"
              variant="contained"
              endIcon={<ExitToAppIcon />}
              onClick={() => auth.signOut()}
              className={classes.button}
            >
              Çıkış Yap
            </Button>
          </Grid>
        </Container>
      ) : (
        <div style={{ paddingTop: "20%" }}>
          <Login />
        </div>
      )}
    </Box>
  );
};

export default Admin;
