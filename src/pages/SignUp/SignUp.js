import Button from '@material-ui/core/Button'
import Page from 'material-ui-shell/lib/containers/Page'
import Paper from '@material-ui/core/Paper'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from 'base-shell/lib/providers/Auth'
import { useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useMenu } from 'material-ui-shell/lib/providers/Menu'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: `100%`,
  },
  arrow: {
    margin: '40px 371px 0px 16px',
    color: '#00d04c',
  },
  title: {
    width: '98px',
    height: '36px',
    margin: '61px 297px 31px 16px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '24px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  form: {
    margin: '0 16px 48px 16px',
  },
  label: {
    width: '66px',
    height: '24px',
    margin: '0px 0px 31px 0px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '16px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  errorInfo: {
    width: '58px',
    height: '21px',
    margin: '16px 321px 55px 0px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#ff3b30',
  },
  passwordInfo: {
    width: '169px',
    height: '24px',
    margin: '16px 211px 55px 0px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#979797',
  },
  privacyInfo: {
    width: '-webkit-fill-available',
    height: '45px',
    margin: '16px 0px 0px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  submit: {
    width: '-webkit-fill-available',
    height: '48px',
    margin: '40px 0px 0px 0px',
    backgroundColor: '#00d04c',
    color: '#ffffff',
  },
})
const api = axios.create({
  baseURL: "https://gohiking-server.herokuapp.com"
});



const SignUp = () => {
  const classes = useStyles()
  const history = useHistory()
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { toggleThis } = useMenu()
  const { setAuth } = useAuth()
  const { register } = useForm()

  const authenticate = (user) => {
    
    setAuth({ isAuthenticated: true, ...user })
    toggleThis('isAuthMenuOpen', false)

    let _location = history.location
    let _route = '/home'

    if (_location.state && _location.state.from) {
      _route = _location.state.from.pathname
      history.push(_route)
    } else {
      history.push(_route)
    }
  }
  //API POST TEST
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://gohiking-server.herokuapp.com/api/register`, {
      "email": "test1@gmail.com",
      "password": "test1"
     })
     .then(res => {
      console.log(res.data);
     })
     .catch(err => {
      console.log(Error);
    })
  }
  
  //Go Next
  let back = useHistory();
  function GoToRegister0_1() {
    back.push("/register0_1");
  }
  return (
    <Page>
      <div className={classes.container}>
        <ArrowBackIcon className={classes.arrow} />
        <div className={classes.title}>註冊帳號</div>
        <form className={classes.form} onSubmit={handleSubmit} >
          <label className={classes.label}>電子信箱</label>
          <Input placeholder="請輸入電子信箱" fullWidth />
          <div className={classes.errorInfo}>錯誤資訊</div>
          <label className={classes.label}>密碼</label><br />
          <Input placeholder="請輸入密碼" fullWidth />
          <div className={classes.passwordInfo}>密碼必須包含8個字元以上</div>
          <label className={classes.label}>確認密碼</label><br />
          <Input placeholder="請重新輸入密碼" fullWidth />
          <div className={classes.privacyInfo}>使用這個應用程式前，請先詳閱「Go Hiking」的
          《<span style={{ color: '#007aff' }}>隱私權政策</span>》及《<span style={{ color: '#007aff' }}>服務條款</span>》
        </div>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={GoToRegister0_1}
            className={classes.submit}
            onSubmit={handleSubmit}
          >
            同意並註冊
          </Button>
        </form>
      </div>
    </Page>
  )
}

export default SignUp
