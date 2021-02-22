import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Navigation from '../../components/Bottom/Navigation'
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marquee:{
    position:'relative',
    //display:'flex',
    width:'100%',
    height:'30%',
    backgroundColor:'#03fc14',//green
  },
  marqueeText:{
    position:'absolute',
    backgroundColor:'#232323',
    width:'70%',
    height:'100%',
    zIndex:1,
  },
  marqueeImg:{
    position:'absolute',
    backgroundColor:'#fcba03',//yellow
    right:0,
    width:'70%',
    height:'100%',
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Go Hiking
          </Typography>
          <Button color="inherit"><SearchIcon/></Button>
        </Toolbar>
      </AppBar>

      <div className={classes.marquee}>
      <div className={classes.marqueeText}>
        親子步道上線囉
        <br/>
        帶你的老爸冒險去
        <br/>
        查看步道
      </div>
      <div className={classes.marqueeImg}>
        
        {/* <img src="https://media.gettyimages.com/photos/japanese-father-and-son-smiling-at-camera-in-nature-picture-id1197742259?s=1024x1024" alt="gohikingImg"/> */}
      </div>
      </div>

      

      <Navigation />
    </div>
  );
}