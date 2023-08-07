import logo from "./logo.svg";
import * as React from "react";
import { useState } from "react";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { Label } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Charts from "./components/charts";
import Form from "./components/form";

function App() {
 

  return (
    <>
      <Charts />
      <hr></hr>
      <Form />
    </>
  );
}

export default App;
