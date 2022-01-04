import React from "react"
import { Container, Link, Tooltip, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import PropTypes from "prop-types"


function Copyright() {
  return (
    <Tooltip title={`<Typography variant="body2" color="textSecondary">`} arrow>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Tooltip>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}))

export default function BlogFooter(props) {
  const classes = useStyles()
  const { description, title } = props

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Tooltip title={`<Typography variant="h6">`} arrow>
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textSecondary" variant="subtitle1">`}
          arrow
        >
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </Tooltip>
        <Copyright />
      </Container>
    </footer>
  )
}

BlogFooter.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}
