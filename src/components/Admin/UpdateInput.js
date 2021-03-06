import React, { useState } from "react";
import db from "../../firebase/config";
import { TextField, InputLabel, Button, Grid } from "@material-ui/core";

const UpdateInput = ({ docs }) => {
  const [name, setName] = useState(docs.name);
  const [description, setDescription] = useState(docs.description);

  var hdb = db.collection("products").doc(docs.id);
  const onDelete = () => {
    hdb.delete();
  };
  const updateName = () => {
    hdb.set({
      ...docs,
      name,
    });
  };
  const updateDesc = () => {
    hdb.set({
      ...docs,
      description,
    });
  };
  return (
    <Grid
      container
      spacing={3}
      alignContent="center"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={6}>
        <InputLabel>
          <TextField
            label="İsim Güncelle"
            rowsMax={4}
            variant="outlined"
            name="name"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
        </InputLabel>
      </Grid>
      <Grid item xs={6}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          onClick={updateName}
        >
          Ad Güncelle
        </Button>
      </Grid>
      <Grid item xs={6}>
        <InputLabel>
          <TextField
            label="Açıklama Güncelle"
            rowsMax={4}
            variant="outlined"
            name="name"
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputLabel>
      </Grid>
      <Grid item xs={6}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          onClick={updateDesc}
        >
          Açıklama Güncelle
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="secondary"
          fullWidth
          variant="contained"
          onClick={onDelete}
        >
          Sil
        </Button>
      </Grid>
    </Grid>
  );
};

export default UpdateInput;
