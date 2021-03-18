import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import usericon from "../../asset/img/hpic3202.jpg";
import "./sidebar.scoped.scss";
import Avatar from "@material-ui/core/Avatar";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: "353px",
    fontFamily: "NotoSansCJKtc",
  },
  fullList: {
    width: "auto",
  },
  iconButton: {
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    margin: 0,
  },
  avater: {
    height: "64px",
    width: "64px",
    marginTop: "16px",
    margin: "0 42px 16px 16px",
  },
  name: {
    margin: "16px 59px 16px 16px",
    fontWeight: "bold",
    fontSize: "18px",
  },
  mail: {
    color: "#919191",
    fontFamily: "Roboto",
    margin: "16px 154px 16px 16px",
    fontSize: "14px",
    lineHeight: "1.43",
  },
  scrim: {
    padding: "12px 185px 12px 16px",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: 1.5,
    height:"48px",
    "&:hover": {
      backgroundColor: "rgba(0, 208, 76, 0.05)",
      color: "#00d04c",
    },
  },
  link: {
    color: "#000000",
    textDecoration: "none",
    "&:hover": {
      color: "#00d04c",
    },
  },
  text: {
    margin: "0 0 0 32px",
  },
  tangle: {
    width: "100%",
    height: "1px",

    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  sion: {
    height: "48px",
  },
  version: {
    fontSize: "14px",
    fontWeight: "bold",
    textAlign:"center",
    marginLeft: "15%",
    width: "323px",
  },
  versiont: {
    
    marginLeft: "50%",
    textAlign: "right",

    color: "#919191",
  },
  log: {
    color: "#007aff",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "1.5",
    marginLeft: "15%",
  },
});
const demoapi = axios.create({
  //測試 api
  baseURL: "http://09da54f0b81b.ngrok.io",
  headers: {
    "X-Secure-Code": "12345678",
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const [user, setuser] = useState([]);
  const [state, setState] = useState(false);
  const [anchor] = useState("left");
  const id ="2";
  const userApi = async (id) => {
    await demoapi.get("/api/user/"+id).then((res) => {
      setuser(res.data);
    });
  };
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown") return;
    setState(open);
  };
  useEffect(() => {
    userApi(id);
  }, [id]);

  return (
    <>
      <div className={classes.list} role="presentation">
        <Avatar className={classes.avater} src={user.image} />
        <Grid className={classes.name}>{user.name}</Grid>
    
        <Grid className={classes.mail}>{user.email}</Grid>
        <Grid className={classes.tangle} />

        <Grid >
          <Button size="large" className={classes.scrim}>
            
            <BsFillPersonFill  />
  
            <span className={classes.text}>個人檔案</span>
          </Button>

          <br />
          <Link to="/privacyPolicy" className={classes.link}>
            <Button size="large" className={classes.scrim}>
              <BsFillLockFill />

              <span className={classes.text}>隱私權政策</span>
            </Button>
          </Link>
          <br />
          <Link to="/aboutUs" className={classes.link}>
            <Button size="large" className={classes.scrim}>
              <BsFillInfoCircleFill />
              <span className={classes.text}>關於我們</span>
            </Button>
          </Link>
        </Grid>

        <Grid className={classes.tangle} />
        <Grid className={classes.sion}>
          <span className={classes.version}>版本</span>
          <span className={classes.versiont}>1.0.1</span>
        </Grid>
        <Grid className={classes.tangle} />
        <Grid className={classes.log}>登出</Grid>
      </div>
    </>
  );
}
