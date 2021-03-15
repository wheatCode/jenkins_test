import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'material-ui-shell/lib/containers/Page';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    width: '-webkit-fill-available',
    height: '48',
    margin: '56px 0 0',
    padding: '12px 172px 12px 174px',
    backgroundColor: '#00d04c',
    color: '#ffffff',
    borderRadius: 4
  },
  container: {
    width: '-webkit-fill-available',
    height: 768,
    padding: '40px 16px 213px',
    backgroundColor: '#ffffff'
  },
  InputBackground:{
    width: '-webkit-fill-available',
    height: '40',
    margin: '1px 0 0',
    padding: '9px 0 0',
    borderColor:'#232323',
  },
  Title:{
    width: '98',
    height: '36',
    margin: '0 281px 31px 0',
    fontFamily: "NotoSansCJKtc",
    fontSize: '24px',
    fontweight: 500,
    lineheight: 1.5,
    letterspacing: '0.5px',
    color: '#232323'
  },
  Text:{
    width: '66',
    height:'24',
    margin: '0 313px 1px 0',
    fontSize: '16px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  Hint:{
    width: '168',
    height: '21',
    margin: '16px 211px 55px 0',
    fontFamily: "NotoSansCJKtc",
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#979797',
  },
  ModifyTextFieldColor: {
    // Theme Color, or use css color in quote
    fontSize: '14px',
    color: '#979797',  
    borderColor:'#979797'
  },
  DailogTitle:{
    fontFamily: "NotoSansCJKtc",
    fontSize: '20px',
    fontWeight:500,
    borderColor:'#232323'
  },
  DailogContent:{
    fontFamily: "NotoSansCJKtc",
    fontSize: '16px',
    borderColor:'#979797'
  },
  DailogCheck:{
    fontFamily: "NotoSansCJKtc",
    fontSize: '14px',
    fontWeight:500,
    borderColor:'#007aff'
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const fullWidth = React.useState(true);
  const [maxWidth] = React.useState('xs');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Page>
      <div className={classes.container}>
        <Typography className={classes.Title} textAlign="left">
          重設密碼
        </Typography>
        <FormControl className={classes.form}>
        <Typography className={classes.Text}  textAlign="left">
          密碼 
        </Typography>   
          <TextField
            InputLabelProps={{
              className: classes.ModifyTextFieldColor
            }}
            className={classes.InputBackground}
            id="email"
            label="請輸入新的密碼"
            name="email"
          />
        <Typography className={classes.Hint}  textAlign="left">
          密碼必須包含八個字元以上
        </Typography>  
        <Typography className={classes.Text}  textAlign="left">
          確認密碼
        </Typography>  
          <TextField
            InputLabelProps={{
              className: classes.ModifyTextFieldColor
            }}
            className={classes.InputBackground}
            id="password"
            label="請重新輸入密碼 "
            name="password"
          />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleClickOpen }
          >
          繼續
        </Button>
        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
        <Typography className={classes.DailogTitle}>密碼更新成功</Typography>
        </DialogTitle>
        <DialogContent >
          <DialogContentText>
            <Typography className={classes.DailogContent}>請重以新的密碼新登入使用。</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary"  >
          <Typography className={classes.DailogCheck}>完成</Typography>
          </Button>
        </DialogActions>
      </Dialog>
      </FormControl>
    </div>
  </Page>
  );
}