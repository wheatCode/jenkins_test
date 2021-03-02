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

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3c5754",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "NotoSansCJKtc",
    flexGrow: 1,
    width: "100%",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  rectangle: {
    height: "230px",
  },
  marquee: {
    height: "100%",
    width: "100%",
    backgroundColor: "#000000",
  },
  matitle: {
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
    width: "342px",
    height: "230px",
  },
  swiper: {
    backgroundColor: "#fffff",
    height: "112px",
    textAlign: "center",
    margin: "16px 0 0",
    padding: "8px 0 8px 16px",

  },

  iconImg: {
    width: "48px",
  },

  retitle: {
    fontWeight: "bold",
    fontSize: "22px",
    color: "#232323",
  },
  swiper2: {},
  linkstlye: {
    color: "#000",
    textDecoration: "none",
  },
  text: {
    width: "164px",
    fontSize: "14px",
  },

  time: {
    color: "#919191",
    fontSize: "10px",
  },
  Img: {
    height: "96px",
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
  const searchApi = async () => {
    await api.get("/api/collection").then((res) => {
      setcollection(res.data);
    });
  };
  useEffect(() => {
    searchApi();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <ThemeProvider theme={lightTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Go Hiking
              </Typography>
              <Button color="inherit"><SearchIcon/></Button>
            </Toolbar>
          </AppBar>

          <Swiper
            className={classes.rectangle}
            spaceBetween={0}
            slidesPerView={2}
            mousewheel={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Grid className={classes.marquee}>
                <Grid className={classes.matitle}>親子步道上線囉</Grid>
                <br />
                <Grid className={classes.matext}>帶你的老爸冒險去</Grid>
                <br />
                <Button variant="contained" className={classes.mabutton}>
                  查看步道
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
          >
            {collection.map((collection) => (
              <SwiperSlide>
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
          <Grid className={classes.retitle}>行程推薦</Grid>
          <Swiper
            className={classes.swiper2}
            spaceBetween={80}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Link to={`/columnPage`} className={classes.linkstlye}>
                <img src={getty} className={classes.Img} />
                <div className={classes.text}>2020跨年日出秘境步道...</div>
                <div className={classes.time}>2019-12-11</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img src={getty2} className={classes.Img} />
              <div className={classes.text}>2020跨年日出秘境步道...</div>
              <div className={classes.time}>2019-12-11</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={getty3} className={classes.Img} />
              <div className={classes.text}>2020跨年日出秘境步道...</div>
              <div className={classes.time}>2019-12-11</div>
            </SwiperSlide>
          </Swiper>

          <Grid className={classes.tangle} />
          <Navigation />
        </ThemeProvider>
      </div>
    </>
  );
}
