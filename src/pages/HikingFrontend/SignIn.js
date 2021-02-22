import React from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AndroidIcon from '@material-ui/icons/Android';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Page from 'material-ui-shell/lib/containers/Page';
import { Link as RouterLink} from "react-router-dom";
import { MemoryRouter as Router } from 'react-router';

const useStyles = makeStyles((theme)=> ({
  container: {
    display:'flex',
    flexDirection: 'column',  // flexDirection:'column' 使button strech 開來
    width:'411px',
    height: '768px',
  },
  root:{
    maxheight: '600',
  },
  google:{
    margin: 'auto', 
  },
  facebook:{
    root:{
      backgroundColor: "#4267b2",
    },
    
  },
}));

const ColorButton1 = withStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: "#ffffff",
    letterSpacing: 1.6,
    color: "#000000",
    width: '379px',
    height: '44px',
    marginBottom: '16px',
    margin: 'auto', 
    fontWeight: '700',  
  },
}))(Button);

const ColorButton2 = withStyles(() => ({
  root: {
    backgroundColor: "#4267b2",
    letterSpacing: 2,
    color: "#ffffff",
    width: '379px',
    height: '44px',
    marginBottom: '16px',
    margin: 'auto',  
    
  },
}))(Button);

const ColorButton3 = withStyles(() => ({
  root: {
    backgroundColor: "#000000",
    letterSpacing: 2,
    color: "#ffffff",    
    width: '379px',
    height: '44px',
    marginBottom: '16px',
    marginRight: 'auto',     
  },
}))(Button);

const ColorButton4 = withStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: "#ffffff",
    letterSpacing: 1.6,
    color: "#000000",
    width: '379px',
    height: '44px',
    margin: 'auto', 
    fontWeight: '700',  
  },
}))(Button);

const imageTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiCardMedia: {
      // Name of the rule
      img: {
        //Some CSS
        height: '381px',
        width: '411px',
      //   margin: '0px 8px',
        objectFit: 'cover',
      },
      
    },
  },
});

const testTheme = createMuiTheme({
  palette: {
    primary:{
      main: '#b000ff',
      contrastText: '#ffffff',
    }
  }
});


export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    
    <Page>      
      <div className= {classes.container}>
        <ThemeProvider theme={imageTheme}>
          <Card className={classes.root} style={{backgroundColor: "white"}}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Climbing Image"
                  height="381"
                  image="/asset/images/sample.jpg" 
                  title="Sign-in background img"
                  classes={{}}
                />
              </CardActionArea>
          </Card>
        </ThemeProvider>
        <div style={{margin: "32px 16px 0px",}}>
          <ColorButton1 className = {classes.google} variant = "contained" startIcon={<AndroidIcon style={{color: "#00d04c"}}/>}>
            透過Google登入
          </ColorButton1>
          <ColorButton2 className = {classes.facebook} variant = "contained" startIcon={<FacebookIcon style={{color: "#ffffff"}}/>}>
            透過Facebook登入
          </ColorButton2>
          <ColorButton3 variant = "contained" startIcon={<AppleIcon style={{color: "#ffffff"}}/>}>
            透過Apple ID登入
          </ColorButton3>
          <ColorButton4 variant = "contained" startIcon={<MailOutlineIcon style={{color: "#000000"}}/>}>
            透過Mail登入
          </ColorButton4>
        </div>
          <ThemeProvider theme = {testTheme}>
            <div style={{margin: "24px 0px 0px 0px"}}></div>
          </ThemeProvider>
          <Typography variant="body2" component="p" style={{color: "black", direction: "column", textAlign: "center"}}>
            還不是會員嗎? <RouterLink to="/signup" style={{color: '#000000'}}>註冊新帳號</RouterLink>
          </Typography>
          <Button variant = "outlined" component={RouterLink} to="/home_home3" style={{color: "#00d04c", fontWeight:"700" , borderColor: "#00d04c", width:"182px", height: "40px", margin: "auto", }}>
            直接使用
          </Button>
      </div>
      
    </Page>
      
        /*  */


      //   <CardActions>
      //     <Grid container spacing={3} direction="column" justifyContent = "center" alignItems = "center" >
      //       <Grid item xs = {12}>
      //         <ColorButton1 variant = "contained" startIcon={<AndroidIcon style={{color: "#00d04c"}}/>}>
      //           透過Google登入
      //         </ColorButton1>
      //       </Grid>
      //       <Grid item xs = {12}>
      //         <ColorButton2  variant="contained" startIcon={<FacebookIcon/>}>
      //           透過Facebook登入
      //         </ColorButton2>
      //       </Grid>
      //       <Grid item xs = {12}>
      //         <ColorButton3 variant = "contained" color = "secondary" startIcon={<AppleIcon />} style={{letterSpacing: "1.3px"}} >
      //           透過Apple ID登入
      //         </ColorButton3>
      //       </Grid>
      //       <Grid item xs = {12}>
      //         <ColorButton1 variant = "contained" startIcon={<MailOutlineIcon/>}>
      //           透過Email登入
      //         </ColorButton1>
      //       </Grid>
      //     </Grid>
      //   </CardActions>
      //     <CardContent >
      //         <Typography variant="body2" component="p" style={{color: "black", direction: "column", alignItems: "center"}}>
      //           還不是會員嗎?
      //         </Typography>
      //         <Typography variant="body2" component="p" style={{color: "black"}}>
      //           註冊新帳號
      //         </Typography>
      //         <Button variant = "outlined" style={{color: "#00d04c", borderColor: "#00d04c"}}>
      //           直接使用
      //         </Button>
      //     </CardContent>
          
      // </Card>
  );
}