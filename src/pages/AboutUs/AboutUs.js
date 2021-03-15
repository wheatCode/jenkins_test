import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
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

export default function AboutUs() {
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
            關於我們
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{width:'100%',height:'30%'}}>
      <img src="https://media.gettyimages.com/photos/father-and-child-paddling-kayak-together-in-mangrove-swamp-japan-picture-id1142821570?s=2048x2048" alt="Ippei Naoi hiking" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'10% 0%'}}></img>
      </div>
      <Container>
        <Box my={2}>
        <Typography variant="body1">
        關於Go Hiking
        </Typography>
        <br/>
        <Typography variant="body2">
        「Go Hiking App」
        是一群喜歡從事戶外休閒活動的工程師與設計師共同開發，
        希望把熱愛山林親近自然的美好經驗，
        推廣給更多國人能夠一起參與體驗。
        同時我們也非常重視登山的「安全」，
        登山攻頂只是一個過程，「平安下山回家」才是最重要的，
        因此 Go Hiking App 能夠讓用戶輕鬆找到適合自己體能狀況的健行步道，
        更快速瞭解掌握山路狀況，並找到志同道合的朋友一起探索不孤單。
        </Typography>
        </Box>
      </Container>
    </div>
    </>
  );
}
