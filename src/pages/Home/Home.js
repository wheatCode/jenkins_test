import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import getty from "../../asset/img/gettyimages-1197938495-2048x2048.jpg";
import getty2 from "../../asset/img/gettyimages-1181433728-2048x2048.jpg";
import getty3 from "../../asset/img/gettyimages-760239297-2048x2048.jpg";
import magetty from "../../asset/img/gettyimages-1197742259-2048x2048.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "@material-ui/core";
// Import Swiper styles
import "swiper/swiper.scss";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Navigation from "../../components/Bottom/Navigation";
import { Height } from "@material-ui/icons";
import mapple from "../../asset/img/icon-mapple.png";
import chellenge from "../../asset/img/icon-chellenge.png";
import hotSpring from "../../asset/img/icon-hot-spring.png";
import family from "../../asset/img/icon-family.png";
import forest from "../../asset/img/icon-forest.png";
import sakura from "../../asset/img/icon-sakura.png";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../../components/SideBar/Sidebar-menu";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00d04c",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "NotoSansCJKtc",
    flexGrow: 1,
    width: "100%",
  },
  appbar: {
    backgroundColor: "#3c5754",
    color: "#ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  rectangle: {
    height: "230px",
    maxWidth: "100%",
  },
  title: {
    flexGrow: 1,
  },
  marquee: {
    height: "100%",
    width: "259px",
    
    backgroundColor: "#000000",
  },
  matitle: {
    letterSpacing:"0.46px",
    margin: "0 69px 8px 0",
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "bold",
  },
  matext: {
    color: "#ffffff",
    fontSize: "16px",
  },
  mabutton: {
    backgroundColor: "#00d04c",
  },
  maimg: {
    height: "230px",
  },
  swiper: {

    
    backgroundColor: "#fffff",
    height: "112px",
    textAlign: "center",
    margin: "16px 0 0",

  },
  collection:{
    margin: "0 0 7px",
    padding:"16px",
    textAlign:"center", 
  },
  icontext:{
    margin: "7px 9px 0 10px",
    textAlign:"center",
    width:"29px",
    fontWeight:"bold",
  },

  iconImg: {
    width: "48px",
  },
  scarch: {
    marginLeft: "50%",
  },

  retitle: {
    fontWeight: "bold",
    fontSize: "22px",
    color: "#232323",
  },
  
  linkstlye: {
    color: "#000",
    textDecoration: "none",
  },
  text: {
    maxWidth: "164px",
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  time: {
    color: "#919191",
    fontSize: "10px",
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  Img: {
    height: "96px",
    width:"174px",
  },
  tangle: {
    width: "100%",
    height: "16px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
}));
const api = axios.create({
  baseURL: "https://go-hiking-backend-laravel.herokuapp.com/",
  headers: {
    "X-Secure-Code": "12345678",
  },
});
const demoapi = axios.create({
  //?????? api
  baseURL: "http://09da54f0b81b.ngrok.io",
  headers: {
    "X-Secure-Code": "12345678",
  },
});
const obj = {
  "mapple.png": mapple,
  "chellenge.png": chellenge,
  "hotSpring.png": hotSpring,
  "family.png": family,
  "forest.png": forest,
  "sakura.png": sakura,
};
export default function HomePage() {
  const classes = useStyles();
  const [collection, setcollection] = useState([]);
  const [articles, setarticle] = useState([]);

  //????????????api
  const collectionApi = async () => {
    await api.get("/api/collection").then((res) => {
      setcollection(res.data);
    });
  };

  //??????????????????api
  const articleApi = async () => {
    await demoapi.get("/api/home").then((res) => {
      setarticle(res.data.articles);
    });
  };
  const [state, setState] = useState(false);
  const [anchor] = useState("left");

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown") return;
    setState(open);
  };

  useEffect(() => {
    collectionApi();
    articleApi();
  }, []);
  console.log(articles);

  return (
    <>
      <div className={classes.root}>
        <ThemeProvider theme={lightTheme}>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state}
                onClose={toggleDrawer(false)}
              >
                <TemporaryDrawer />
              </Drawer>
              <Typography variant="h6" className={classes.title}>
                Go Hiking
              </Typography>
              <Button color="inherit">
                
                <SearchIcon />
              </Button>
            </Toolbar>
          </AppBar>

          <Swiper
            className={classes.rectangle}
            spaceBetween={100} //side ????????????
            slidesPerView={2} //???????????????????????????slides??????
            mousewheel={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Grid className={classes.marquee}>
                <Grid className={classes.matitle}>?????????????????????</Grid>
                <br />
                <Grid className={classes.matext}>????????????????????????</Grid>
                <br />
                <Button variant="contained" className={classes.mabutton}>
                  ????????????
                </Button>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <img src={magetty} className={classes.maimg} />
            </SwiperSlide>
          </Swiper>

          <Grid className={classes.tangle} />

          <Swiper
            className={classes.swiper}
            spaceBetween={25}
            slidesPerView={6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            showsButtons
            loop={false}
          >
            {collection.map((collection) => (
              <SwiperSlide  className={classes.collection} >
                <Link
                  to={`/searchQuick/${collection.id}`}
                  className={classes.linkstlye}
                >
                  <img
                    src={obj[collection.iconImage]}
                    className={classes.iconImg}
                    alt={collection.iconImg}
                  />
                  <div className={classes.icontext}>{collection.name}</div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <Grid className={classes.tangle} />
          <Grid className={classes.retitle}>????????????</Grid>
          <Swiper
            className={classes.swiper2}
            spaceBetween={16}
            slidesPerView={10}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {articles.map((articles) => (
              <SwiperSlide>
                <Link
                  to={`/columnPage/${articles.id}`}
                  className={classes.linkstlye}
                >
                  <img src={articles.image} className={classes.Img} />
                  <div className={classes.text}>{articles.title}</div>
                  <div className={classes.time}>{articles.created_at}</div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <Grid className={classes.tangle} />
          <Navigation />
        </ThemeProvider>
      </div>
    </>
  );
}
