import React from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AndroidIcon from '@material-ui/icons/Android';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
  },
});

const ColorButton1 = withStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    letterSpacing: 1.6,
    color: "#000000",
    // fullWidth: true,
  },
}))(Button);

const ColorButton2 = withStyles((theme) => ({
  root: {
    backgroundColor: "#4267b2",
    letterSpacing: 2,
    color: "#ffffff",
  },
}))(Button);

const ColorButton3 = withStyles((theme) => ({
  root: {
    backgroundColor: "#000000",
    color: "#ffffff",
    letterSpacing: 2,
    
  },
}))(Button);


const theme = createMuiTheme({
  typography:{
    button:{
      fontSize: "16px",
    }
  },
})


export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme = {theme}>
      <Card className={classes.root} style={{backgroundColor: "white"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Climbing Image"
            height="600"
            image="/asset/images/sample.jpg"  /*圖片只能放在public底下，而且路徑不需要寫public和../ */ 
            title="Sign-in background img"
          />
        </CardActionArea>
        <CardActions>
          <Grid container spacing={3}>
            <Grid item xs = {12}>
              <ColorButton1 variant = "contained"   startIcon={<AndroidIcon style={{color: "#000000"}}/>}>
                透過Google登入
              </ColorButton1>
            </Grid>
            <Grid item xs = {12}>
              <ColorButton2  variant="contained" startIcon={<FacebookIcon/>}>
                透過Facebook登入
              </ColorButton2>
            </Grid>
            <Grid item xs = {12}>
              <ColorButton3 variant = "contained" color = "secondary" startIcon={<AppleIcon />} style={{letterSpacing: "1.3px"}} >
                透過Apple ID登入
              </ColorButton3>
            </Grid>
            <Grid item xs = {12}>
              <ColorButton1 variant = "contained" startIcon={<MailOutlineIcon/>}>
                透過Email登入
              </ColorButton1>
            </Grid>
            
          </Grid>
        </CardActions>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              還不是會員嗎?
            </Typography>
            <Typography variant="body2" component="p">
              註冊新帳號
            </Typography>
            <Button variant = "outlined" style={{color: "#00d04c", borderColor: "#00d04c"}}>
              直接使用
            </Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}