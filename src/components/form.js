import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Form = () => {
    const submit = () => {
        alert('Formulário enviado!')
    }
  return (
    <Container style={{ textAlign: "-webkit-center" }}>
      <FormControl
        sx={{
          alignItems: "center",
          width: "100vh",
          height: "75vh",
          margin: 10,
          padding: 10,
          border: "1px solid #3c3c3c44",
          boxShadow: "0px 1px 8px #0000004a;",
          borderRadius: 10,
        }}
      >
      <Typography variant="h5">
        Formulário
      </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: 300 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: 300 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        </Box>
        <Autocomplete
          style={{ margin: 10 }}
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Filme" />}
        />

        <FormGroup>
        <Typography variant="h6" style={{ fontSize: "14px"}}>
        Onde prefere assistir?
      </Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Cinema"
          />
          <FormControlLabel required control={<Checkbox />} label="Televisão" />
        </FormGroup>
        <hr style={{ color: "#3c3c3c" }}></hr>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Feminino"
            />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          </RadioGroup>
        </FormControl>

        <Button style={{ margin: 10 }} variant="outlined" onClick={() => submit()}>
          Enviar
        </Button>
      </FormControl>
    </Container>
  );
};

export default Form;
