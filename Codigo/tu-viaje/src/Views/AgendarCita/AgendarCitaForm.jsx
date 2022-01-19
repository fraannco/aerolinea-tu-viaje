import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Grid, Paper, Box, Button, MobileStepper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CardCita from "../../Components/Cards/CardCita";
import FormCita from "../../Components/Cards/FormCita";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
}));

const steps = [<CardCita />, <FormCita />];

const AgendarCitaForm = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 2;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid item xs={12} md={5}>
      <Item>
        {steps[activeStep]}

        {/* SECCIÓN PARA LOS PASOS 

        */}
        <Box mt={3}>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Continuar
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Atrás
              </Button>
            }
          />
        </Box>
      </Item>
    </Grid>
  );
};

export default AgendarCitaForm;
