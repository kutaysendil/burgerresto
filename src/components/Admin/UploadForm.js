import React, { useState, useEffect } from "react";
import db, { auth, imgStorage, timeStamp } from "../../firebase/config";
import Login from "./Login";
import { Grid, InputLabel, TextField, Button, Box } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState(null);
  const [open, setOpen] = useState(false);
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
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = imgStorage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setUrl(await fileRef.getDownloadURL());
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const addDate = timeStamp();
    db.collection("products").add({
      addDate,
      name,
      description,
      url,
    });
    setDescription("");
    setName("");
    await setTimeout(() => {
      setUrl(null);
    }, 1000);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {user ? (
        <Box m={20}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <InputLabel>
                <TextField
                  label="Yemek Ad"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>
                <TextField
                  label="Açıklama"
                  variant="outlined"
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={6}>
                <input
                  accept="image/*"
                  type="file"
                  onChange={handleChange}
                  id="raised-button-file"
                />
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <label htmlFor="raised-button-file"></label>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    onClick={handleUpload}
                    color="primary"
                    variant="outlined"
                    component="span"
                    disabled={!url}
                  >
                    Yemek Ekle
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Başarıyla yüklendi.
                    </Alert>
                  </Snackbar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => auth.signOut()}
              >
                Çıkış Yap
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Login />
      )}
    </>
  );
};

export default UploadForm;

/* 
<div className="form-group" style={{ marginTop: "10%" }}>
          <form>
            <label>Yemek Adı</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control form-control-lg"
            />
            <br />
            <label>Yemak Açıklaması</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control form-control-lg"
            />
            <br />
            <div className="custom-file">
              <input
                onChange={handleChange}
                type="file"
                className="custom-file-input"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Resim Seçiniz
              </label>
              <div className="text-center mt-4">
                <MDBBtn onClick={handleUpload} disabled={!url} color="primary">
                  Ekle
                </MDBBtn>
              </div>
            </div>
          </form>
          <div className="text-right mt-4">
            <MDBBtn color="danger" onClick={() => auth.signOut()}>
              Çıkış Yap
            </MDBBtn>
          </div>
        </div>
        */
