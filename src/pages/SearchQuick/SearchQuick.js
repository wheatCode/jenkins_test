import React, { Fragment,useState, useEffect } from "react";
import { makeStyles} from "@material-ui/core/styles";
import { Grid,CardActionArea} from "@material-ui/core";
import axios from "axios";
import QuickList from "../../components/Lists/QuickList";
import BackArrow from "../../components/TopBar/BackArrow";
import family from "../../asset/img/icon-family.png";
import mapple from "../../asset/img/icon-mapple.png";
import chellenge from "../../asset/img/icon-chellenge.png"
import hotSpring from "../../asset/img/icon-hot-spring.png";
import forest from "../../asset/img/icon-forest.png";
import sakura from "../../asset/img/icon-sakura.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
  
  },
   mask:{
    width:"100%",
    height:"176px",
    margin: "0 0 24px",
    padding:"19px 0 0 16px",
    backgroundColor:"#ffeddc",
   },
   title:{
    width: "100%",
    height: "27px",
    margin:"23px 183px 4px 0",
    fontFamily:"NotoSansCJKtc",
    fontSize:"18px",
    fontWeight:"bold",
   },
   iconImg:{
     
    position: "absolute",
    right: 0,
    
   },
   list:{
    padding:"5%",
    
   }
  }));

const api = axios.create({
    baseURL: "https://go-hiking-backend-laravel.herokuapp.com/",
    headers: {
      "X-Secure-Code": "12345678",
    },
});

const obj={
  'mapple.png':mapple,
  'chellenge.png':chellenge,
  'hotSpring.png':hotSpring,
  'family.png':family,
  'forest.png':forest,
  'sakura.png':sakura,
}

function SearchQuick(props){
    const classes = useStyles();
    const kw =props.match.params.id;
    console.log(kw);
    //搜尋結果hook
    const [searchQuick, setSearchQuick] = useState([]);
   
      const searchApi = async (kw) => {
        
        await api.get("/api/collection/"+kw).then((res) => {
          setSearchQuick(res.data);
        });
    };
    useEffect(()=>{
    
  
      searchApi(kw);
  },[kw]);
  

    return(
        
      <>   
      <div className={classes.root}>
    
       <Grid   item xs={12} className={classes.mask}> 
  
          <Grid>
            <Link to="/searchPage">
            <BackArrow/>
            </Link>
          </Grid>
          
         <div className={classes.title}>
         <span className={classes.span}>{searchQuick.name}步道</span>
          </div>
          <span>老少咸宜，生活好去處。</span>
          <CardActionArea>
         
          <img src={obj[searchQuick.iconImage]} className={classes.iconImg} alt={searchQuick.iconImg}>

          </img>
          
          </CardActionArea>
    
      </Grid>
      <Grid className={classes.list}>
               {/* 步道list component */}
           <QuickList data={searchQuick.trails}></QuickList> 
      </Grid> 
       </div> 
       </> 
    )       
}

export default SearchQuick;