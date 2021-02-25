import React, {useState, useRef} from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    container: {
        display:'flex',
        flexDirection: 'column',  // flexDirection:'column' 使button strech 開來
        height: '768px',
        width: '411px',
      },
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0 73px 0 74px',
        // flexWrap: 'wrap',
      },
      textField:{
          width: '54px',
          height: '40px',
          margin: '48px 0 0',
          padding: '9px 0 0',
      },
}))
const bottomBoard = createMuiTheme({
  palette: {
    primary: {
      light: '#00d04c',
      main: '#00d04c',
      dark: '#00d04c',
      contrastText: '#00d04c',
    },
  },
});

function Verify2(){
    const classes = useStyles();

    const codeOneInput = useRef(null);
    const codeTwoInput = useRef(null);
    const codeThreeInput = useRef(null);
    const codeFourInput = useRef(null);
    return(        
        <div className = {classes.container}>
            <Typography style={{margin: '84px 144px 0px', width: '123px', height: '36px', fontSize: '24px', fontWeight: '900'}}>輸入驗證碼</Typography>
            <Typography style={{margin: '16px 16px 0px', width: '379px', height: '42px', fontSize: '15px', fontWeight: '500', color: '#232323'}}>已把驗證碼發至您的信箱 johndoe@example.com，請確認您的信箱及輸入4位數驗證碼。</Typography>

            <form className={classes.root} noValidate autoComplete="off">
              <ThemeProvider theme={bottomBoard}>
                <TextField 
                  className={classes.textField} 
                  onKeyUp={(event) => {
                    if (event.key!= 'null')
                      console.log('non-0!');
                    // this.sendMessage();
                  }} 
                  label="" 
                />
                <TextField 
                  autoFocus='false'
                  className={classes.textField} 
                  onKeyUp={(event) => {
                    if (event.key!= 'null')
                      console.log('non-1!');
                    // this.sendMessage();
                  }} 
                  label="" 
                />
                <TextField 
                  autoFocus = 'true'
                  className={classes.textField} 
                  onKeyUp={(event) => {
                    if (event.key!= 'null')
                      console.log('non-2!');
                    // this.sendMessage();
                  }} 
                  label="" 
                />
                <TextField 
                  className={classes.textField} 
                  onKeyUp={(event) => {
                    if (event.key!= 'null')
                      console.log('non-3!');
                    // this.sendMessage();
                  }} 
                  label="" 
                />
              </ThemeProvider>               
            </form>

            <Typography style={{margin: '16px auto 0 ',color: '#ff3b30', }}>錯誤資訊</Typography>
            <Button variant = "contained" component = {RouterLink} to='/home_home3' style={{backgroundColor: '#00d04c',color: "#ffffff", fontWeight:"700" , borderColor: "#00d04c", width:"379px", height: "48px", margin: "27px auto 0", borderRadius: '4px'}}>
              繼續
            </Button>
            <Button variant = "outlined" style={{color: "#00d04c", fontWeight:"700" , borderColor: "#00d04c", width:"379px", height: "48px", margin: "24px auto 0", }}>
              重新發送驗證碼
            </Button>
        </div>
        
        
        );
};

export default Verify2;