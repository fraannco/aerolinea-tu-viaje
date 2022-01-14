import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import SearchboxV2 from "../SearchBoxV2";

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
        Vuelos
      </Typography>
      <SearchboxV2 />
    </Box>
  );
};

export default Filter;
