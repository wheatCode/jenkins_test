import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import PrivacyPolicyContent from '../../components/Content/PrivacyPolicyContent'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={{pathname:'/home'}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIcon style={{color:'white'}}/>
          </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            隱私權政策
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={2}>
          <PrivacyPolicyContent/>
        </Box>
      </Container>
    </div>
    </>
  );
}
