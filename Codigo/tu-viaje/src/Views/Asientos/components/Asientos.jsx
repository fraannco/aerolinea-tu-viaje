import React, { useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AirlineSeatReclineExtraSharpIcon from "@mui/icons-material/AirlineSeatReclineExtraSharp";
import { Link } from "react-router-dom";
import FlightsContext from "../../../context/flights";

const Asientos = () => {

  const {busquedaIdaVuelta, setBusquedaIdaVuelta, vueloSeleccionado, assientosSeleccionado} = useContext(FlightsContext)

  const asientos = [
    "A01",
    "A02",
    "A03",
    "A04",
    "A05",
    "A06",
    "A07",
    "A08",
    "A09",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
    "A16",
    "A17",
    "A18",
    "A19",
    "A20",
    "A21",
    "A22",
    "A23",
    "A24",
    "A25",
    "A26",
    "A27",
    "A28",
    "A29",
    "A30",
    "A31",
    "A32",
    "A33",
    "A34",
    "A35",
    "A36",
    "A37",
    "A38",
    "A39",
    "A40",
    "A41",
    "A42",
    "A43",
    "A44",
    "A45",
    "A46",
    "A47",
    "A48",
    "A49",
    "A50",
    "A51",
    "A52",
    "A53",
    "A54",
    "A55",
    "A56",
    "A57",
    "A58",
    "A59",
    "A60",
  ];

  if(vueloSeleccionado.length > 1 && assientosSeleccionado.length===1) setBusquedaIdaVuelta(true)
  else setBusquedaIdaVuelta(false)
  console.log(busquedaIdaVuelta)

  return (
    <Grid>
      <Grid item>
        <Box>
          <Grid container>
            <Grid item xs={12} p={2}>
              <Typography variant="h5" style={{ fontStyle: "italic" }}>
                ¡Elige el asiento que más te guste!
              </Typography>
            </Grid>
            <Grid item bgcolor="#F8F8F8">
              <Box>
                <Grid container align="center" justify="center" p={4}>
                  {asientos.map((value, index) => {
                    return (
                      <Grid item key={index} xs={2} p={2}>
                        <Box p={2} borderRadius="4px" bgcolor="#3F51B5">
                          <AirlineSeatReclineExtraSharpIcon
                            style={{ color: "#fff" }}
                          />
                        </Box>
                        <Button fullWidth variant="outlined" >
                          <Link
                            to={
                              busquedaIdaVuelta
                                ? `/asientos_vuelta/${vueloSeleccionado[1].codigoVuelo}`
                                : `/pago/`
                            }
                            onClick={() => {
                              assientosSeleccionado.push({
                                asiento: value,
                              })
                              console.log(assientosSeleccionado)
                            }}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography variant="subtitle1">{value}</Typography>
                          </Link>
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Asientos;
