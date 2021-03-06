import React from "react";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import { Box, InputLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import abo from "../img/abo.jpg";
import Link from "@material-ui/core/Link";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
  root: {
    background: `url(${abo})`,
    minWidth: "100%",
    minHeight: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
  },
});
const Contact = () => {
  const classes = useStyles();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lsstwda",
        "template_0fmae1d",
        e.target,
        "user_NHrU4Oz02v5REJass9DD3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container className={classes.root}>
      <form onSubmit={sendEmail}>
        <Grid
          direction="column"
          alignContent="center"
          justify="center"
          alignItems="center"
          container
          spacing={4}
          style={{ marginTop: "10%" }}
        >
          <Grid item xl={12}>
            <Box
              style={{
                fontSize: "300%",
                background: "#ff944d",
                opacity: ".7",
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "22px ",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  opacity: "1",
                  textAlign: "center",
                }}
                href="tel:+905544095213"
              >
                İletişim
              </Link>

              <PhoneIcon fontSize="large" />
            </Box>
          </Grid>
          <Grid item xl={12}>
            <InputLabel required>
              <TextField
                label="Ad Soyad"
                multiline
                rowsMax={4}
                variant="outlined"
                name="name"
                fullWidth
                style={{ background: "#e67300", opacity: "..9" }}
              />
            </InputLabel>
          </Grid>
          <Grid item>
            <InputLabel required>
              <TextField
                label="Email"
                multiline
                rowsMax={4}
                variant="outlined"
                name="email"
                fullWidth
                style={{ background: "#604020", opacity: ".9" }}
              />
            </InputLabel>
          </Grid>

          <Grid item>
            <InputLabel required>
              <TextField
                id="outlined-multiline-static"
                label="Mesaj"
                multiline
                rows={4}
                variant="outlined"
                name="message"
                style={{ background: "#e67300", opacity: ".9" }}
                fullWidth
              />
            </InputLabel>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              style={{ background: "white" }}
            >
              Gönder
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;

/*
import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lsstwda",
        "template_0fmae1d",
        e.target,
        "user_NHrU4Oz02v5REJass9DD3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};


*/
