import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Searchbox from "../../../Inicio/components/SearchBox";


const useStyles = makeStyles({
  resultFilter: {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    padding: "1em",
    margin: "1em",
  },
});

const Filter = () => {
    const classes = useStyles();
  return (
    <Box className={classes.resultFilter}>
      <Typography variant="h6" ml={2} align="left" py={2}>
        Modifica tu busqueda
      </Typography>
      <Searchbox />
    </Box>
  );
};

export default Filter;
