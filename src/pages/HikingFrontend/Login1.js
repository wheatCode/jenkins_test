import React from 'react';
import './Login1.css';
import FormInputLabel from '../components/FormInputLabel';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";



function Login1() {
    let history = useHistory();
    let back = useHistory();
    function handleClick() {
      history.push("/PersonalPage");
    }
    function backhandleClick() {
      back.push("/");
    }
    return (
      <div className="container">
        <ArrowBackIcon className="MaterialIcons-blackArrow-back" onClick={backhandleClick} ></ArrowBackIcon>
        <div className="title">登入</div>
        <FormInputLabel label={'電子信箱'} placeholder={'請輸入電子信箱'} id={'useremail'} />
        <hr className="divider"></hr>
        <div className="error-info">錯誤資訊</div>
        <FormInputLabel label={'密碼'} placeholder={'請輸入密碼'} id={'userpassword'} />
        <hr className="divider"></hr>
        <div>
          <p  className="error-info">錯誤資訊</p>
          <p  className="forgot-password" ><Link to="/forgotPassword">忘記密碼</Link></p>
        </div>
        <Button className="Rectangle" variant="contained" color="primary" fullWidth="true"  onClick={handleClick}>繼續</Button>
      </div>
    );
}

export default Login1;