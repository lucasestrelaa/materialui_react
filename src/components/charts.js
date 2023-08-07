import React from "react";
import { useState } from "react";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { Label } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Charts = () => {
  const [uData, setUData] = useState([
    4000, 3000, 2000, 2780, 1890, 2390, 3490,
  ]);
  const [pData, setPData] = useState([
    2400, 1398, 9800, 3908, 4800, 3800, 4300,
  ]);
  const [pizzaData, setPizzaData] = useState([5, 19, 35]);
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  setTimeout(() => {
    setUData([1000, 8000, 9000, 1780, 9890, 9390, 9490]);
    setPData([9400, 9398, 1800, 9908, 9800, 9800, 1300]);
    setPizzaData([19, 6, 22]);
  }, 5000);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Gráfico de Barra
              </Typography>
              <BarChart
                width={400}
                height={200}
                series={[
                  { data: pData, label: "pv", id: "pvId" },
                  { data: uData, label: "uv", id: "uvId" },
                ]}
                xAxis={[{ data: xLabels, scaleType: "band" }]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Gráfico de Linha
              </Typography>
              <LineChart
                xAxis={[{ data: pData }]}
                series={[
                  {
                    data: uData,
                  },
                ]}
                width={400}
                height={210}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Gráfico de Pizza
              </Typography>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: pizzaData[0], label: "series A" },
                      { id: 1, value: pizzaData[1], label: "series B" },
                      { id: 2, value: pizzaData[2], label: "series C" },
                    ],
                  },
                ]}
                width={400}
                height={210}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Charts;
