import React from "react";

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1em"
  },
  media: {
    height: 140,
  },
}));

const MediaCard = ({
  image,
  title,
  description,
  description2,
  description3,
  description4,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <CardActionArea>
              <CardMedia
                image={image}
                title="Francia, Paris"
                className={classes.media}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textScondary"
                  component="p"
                >
                  {description}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textScondary"
                  component="p"
                >
                  {description2}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textScondary"
                  component="p"
                >
                  {description3}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textScondary"
                  component="p"
                >
                  {description4}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} align="center" p={2}>
            <Button size="small" color="primary">
              VER DETALLES
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default MediaCard;
