import React from "react";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles((theme)=> ({
    container: {
      display:'flex',
      flexDirection: 'column',  // flexDirection:'column' 使button strech 開來
      height: '768px',
      width: '411px',
    },
    root:{
      maxheight: '600',
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
      },
    imageIcon: {
        height: '100%',
      },
    iconRoot: {
        textAlign: 'center',
      },
    button1:{
        backgroundColor:'#00d04c',
        color: '#ffffff',
        width: '98px',
        height: '28px',
        borderRadius: '14px',

        fontWidth: '58px',
        fontHeight: '21px',
        margin: '0 5px 0 0',
        fontFamily: 'NotoSansCJKtc',
        fontSize: '14px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
    },
    text1:{
        width: '158px',
        height: '36px',
        margin: '0 69px 8px 0',
        fontFamily: 'NotoSansCJKtc',
        fontSize: '22px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.64',
        letterSpacing: '0.46px',
        color: '#ffffff',
    },
    text2:{
        width: '227px',
        height: '24px',
        margin: '8px 0 24px',
        fontFamily: 'NotoSansCJKtc',
        fontSize: '16px',
        fontWeight: '300',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        color: '#ffffff',

    },
    greyRectangle:{
        width: '100%',
        height: '16px',
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    whiteRectangle:{
        width: '100%',
        height: '112px',
        margin: '16px 0 0',
        padding: '8px 0 8px 0px',
        boxShadow: '0 0.5px 1px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent:'space-around',
    },
    quickSearch:{
        width: '72px',
        height: '96px',
        margin: '0 16px 0 0',
        padding: '12px 12px 8px',
    },
    quickSearchTitle:{
        // margin: "0px 21px 8px 22px", 
        // color: "#232323", 
        // fontSize: "14px", 
        // fontWeight:"700",


        width: '72px',
        height: '21px',
        fontFamily: 'NotoSansCJKtc',
        fontSize: '14px',
        fontWeight: '700',
        textAlign: 'center',
    },
    recommendTitle:{
        width: '100px',
        height: '36px',
        margin: '8px 100px 8px 16px',
        fontFamily: 'NotoSansCJKtc',
        fontSize: '22px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.64',
        letterSpacing: '0.46px',

    },
    recommendation:{
        width: '100px',
        height: '160px',
        display:'flex',
        justifyContent: 'flex-start',        
    },
    recommendBlock:{
        width: '174px',
        height: '143px',
        margin: '0px 0px 0px 16px',
        backgroundColor: '#ffffff',
        
    },
    recommendBlockTitle:{
        width: '164px',
        height: '21px',
        margin: '8px 10px 1px 0px',
        fontFamily: 'NotoSansCJKtc',
        fontSize: '14px',
        fontWeight: '700',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        color: '#000000',
    },
    recommendBlockDate:{
        width: '62px',
        height: '18px',
        margin: '0 0 0 0',
        fontFamily: 'NotoSansCJKtc',
        fontSize: '10px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.8',
        letterSpacing: '0.42px',
        color: '#919191',
    },
    tabs:{
        margin: '54px 0 0 0',
    },
  }));

  const iconTheme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiCardMedia: {
        // Name of the rule
        img: {
          //Some CSS
          height: '48px',
          margin: '10px 0px',
          objectFit: 'contain',
        },
        
      },
      MuiCardActionArea:{
        root: {
            width: '72px',
            height: '96px',
        }
      },
      MuiCardContent:{
          root:{
              padding: 0,
          }
      }
    },
  });

  const recommendTheme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiCardMedia: {
        // Name of the rule
        img: {
          //Some CSS
          height: '96px',
          width: '174px',
        //   margin: '0px 8px',
          objectFit: 'cover',
        },
        
      },
      MuiCardActionArea:{
        root: {
            width: '72px',
            height: '96px',
        }
      },
      MuiCardContent:{
          root:{
              padding: 0,
          }
      }
    },
  });
  const tabTheme = createMuiTheme({
    palette: {
      secondary: {
        main: '#00d04c',
      },
    },
  });
  

// function SearchIcon(props) {
//     return (
//       <SvgIcon {...props}>
//         <path d="M15.867 9.68h-.818l-.284.282c1.004 1.17 1.614 2.687 1.614 4.35 0 3.694-2.995 6.689-6.69 6.689-3.694 0-6.689-2.995-6.689-6.69 0-3.694 2.995-6.689 6.69-6.689 1.662 0 3.178.61 4.348 1.612l.284-.282v-.815L19.466 3 21 4.534 15.867 9.68zm-6.177 0c-2.559 0-4.632 2.073-4.632 4.631 0 2.558 2.073 4.632 4.632 4.632 2.557 0 4.63-2.074 4.63-4.632s-2.073-4.63-4.63-4.63z" transform="translate(-142 -720) translate(0 712) translate(103.024) translate(39.512 8) matrix(1 0 0 -1 0 24.001)"/>
//       </SvgIcon>
//     );
//   }

function MappleIcon(props) {
    return (
      <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <g fill="none" fill-rule="evenodd">
                <g>
                    <g>
                        <g>
                            <path d="M0 0H48V48H0z" transform="translate(-28 -322) translate(16 310) translate(12 12)"/>
                            <g fill-rule="nonzero">
                                <path fill="#FF9100" d="M39.826 12.53c-.237-.427-.711-.64-1.186-.593l-5.217.759-.522-2.585c-.095-.403-.38-.736-.782-.878-.38-.142-.83-.047-1.139.214l-5.122 4.22 1.233-7.47c.071-.403-.071-.83-.403-1.09-.308-.261-.735-.356-1.138-.214l-2.49.83L21.09.688C20.901.238 20.451 0 20 0c-.45 0-.901.237-1.091.688l-1.968 5.035-2.49-.83c-.404-.142-.83-.047-1.139.214-.332.26-.474.687-.403 1.09l1.233 7.471L9.02 9.447c-.309-.261-.76-.356-1.138-.214-.404.142-.688.474-.783.878l-.522 2.585-5.217-.76c-.475-.047-.949.167-1.186.594-.237.427-.214.948.095 1.328l3.249 4.126-1.969 1.755c-.308.285-.45.688-.379 1.115.071.403.356.735.759.877l7.375 2.775-2.371 2.371c-.285.285-.403.712-.332 1.091.095.404.38.736.759.878l12.213 4.577c.142.047.285.071.427.071.142 0 .285-.024.427-.071l12.213-4.577c.38-.142.664-.474.76-.878.07-.38-.048-.806-.333-1.09l-2.371-2.372 7.375-2.775c.403-.142.688-.474.76-.877.07-.427-.072-.83-.38-1.115l-1.969-1.755 3.25-4.126c.308-.38.331-.901.094-1.328z" transform="translate(-28 -322) translate(16 310) translate(12 12) translate(4 4)"/>
                                <path fill="#FF641A" d="M39.731 13.858l-3.249 4.126 1.969 1.755c.308.285.45.688.379 1.115-.071.403-.356.735-.759.877l-7.375 2.775 2.371 2.371c.285.285.403.712.332 1.091-.095.404-.38.736-.759.878l-12.213 4.577c-.142.047-.285.071-.427.071V0c.45 0 .901.237 1.091.688l1.968 5.035 2.49-.83c.404-.142.83-.047 1.139.214.332.26.474.687.403 1.09l-1.233 7.471 5.122-4.221c.309-.261.76-.356 1.138-.214.404.142.688.474.783.878l.522 2.585 5.217-.76c.475-.047.949.167 1.186.594.237.427.214.948-.095 1.328z" transform="translate(-28 -322) translate(16 310) translate(12 12) translate(4 4)"/>
                                <path fill="#FF641A" d="M27.779 21.233l-6.593 4.387V39.29c0 .663-.522 1.185-1.186 1.185-.664 0-1.186-.522-1.186-1.185V25.62l-6.593-4.387c-.545-.38-.687-1.114-.332-1.66.38-.545 1.115-.688 1.66-.332l5.265 3.534v-4.91c0-.663.522-1.185 1.186-1.185.664 0 1.186.522 1.186 1.186v4.909l5.265-3.534c.545-.356 1.28-.213 1.66.332.355.546.213 1.28-.332 1.66z" transform="translate(-28 -322) translate(16 310) translate(12 12) translate(4 4)"/>
                                <path fill="#F03800" d="M27.779 21.233l-6.593 4.387V39.29c0 .663-.522 1.185-1.186 1.185V16.68c.664 0 1.186.522 1.186 1.186v4.909l5.265-3.534c.545-.356 1.28-.213 1.66.332.355.546.213 1.28-.332 1.66z" transform="translate(-28 -322) translate(16 310) translate(12 12) translate(4 4)"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      </SvgIcon>
    );
  }

function ChallengeIcon(props){
    return(
        <SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <g fill="none" fill-rule="evenodd">
                    <g>
                        <g>
                            <g>
                                <path d="M0 0H48V48H0z" transform="translate(-116 -322) translate(104 310) translate(12 12)"/>
                                <g fill-rule="nonzero">
                                    <path fill="#E45A6E" d="M16.462 10.356c-.217-.363-.62-.57-1.041-.538l-9.047.698c-.916.071-1.732.551-2.239 1.318L.34 17.576c-.385.581-.446 1.309-.164 1.946.282.637.861 1.08 1.55 1.187l7.335 1.137c.057.008.114.013.171.013.376 0 .731-.19.938-.514l6.276-9.818c.227-.356.233-.81.017-1.171z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#D82E44" d="M27.645 21.539c-.363-.217-.816-.21-1.172.017l-9.818 6.275c-.371.238-.568.673-.5 1.109l1.136 7.336c.106.688.55 1.267 1.188 1.55.265.116.545.174.824.174.392 0 .782-.114 1.121-.338l5.743-3.797c.766-.507 1.246-1.323 1.317-2.239l.699-9.046c.032-.421-.176-.824-.538-1.041z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#F1F1FB" d="M14.315 30.599c.443.443 1.072.65 1.69.547 9.063-1.516 16.235-9.02 18.965-14.298 3.032-5.861 3.144-12.055 2.986-14.96-.054-.996-.848-1.79-1.843-1.844-2.905-.158-9.1-.046-14.96 2.986-5.28 2.73-12.783 9.902-14.298 18.965-.104.618.103 1.248.547 1.69l6.913 6.914z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#D7D6FB" d="M37.387.613l-26.529 26.53 3.457 3.456c.443.443 1.072.65 1.69.547 9.063-1.516 16.235-9.02 18.965-14.298 3.032-5.861 3.144-12.055 2.986-14.96-.027-.498-.24-.945-.569-1.275z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#466288" d="M26.03 17.533c-1.425 0-2.85-.542-3.935-1.627-1.052-1.052-1.63-2.45-1.63-3.937 0-1.486.578-2.884 1.63-3.936 2.17-2.17 5.701-2.17 7.872 0 1.051 1.052 1.63 2.45 1.63 3.936 0 1.487-.579 2.885-1.63 3.937-1.085 1.085-2.511 1.627-3.936 1.627zM6.855 21.995c-.104.618.103 1.248.547 1.69l6.913 6.914c.443.443 1.072.65 1.69.547 1.972-.33 3.855-.943 5.621-1.756L8.61 16.374c-.812 1.767-1.426 3.649-1.755 5.621z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#FDB43A" d="M1.136 31.316c.285 0 .57-.109.787-.326l3.635-3.635c.434-.435.434-1.14 0-1.575-.435-.434-1.14-.434-1.575 0L.35 29.415c-.435.435-.435 1.14 0 1.575.217.217.502.326.787.326zM8.889 29.112c-.435-.435-1.14-.435-1.575 0L.326 36.1c-.434.434-.434 1.14 0 1.574.218.217.503.326.788.326.285 0 .57-.109.787-.326l6.988-6.988c.435-.435.435-1.14 0-1.574z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#F57A21" d="M12.22 32.443c-.435-.435-1.14-.435-1.575 0l-3.634 3.634c-.435.435-.435 1.14 0 1.575.217.217.502.326.787.326.285 0 .57-.109.787-.326l3.635-3.635c.435-.435.435-1.14 0-1.574zM.326 37.674c.218.217.503.326.788.326.285 0 .57-.109.787-.326l6.988-6.988c.435-.435.435-1.14 0-1.575L.326 37.674z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#354A67" d="M10.858 27.142l3.457 3.457c.443.443 1.072.65 1.69.547 1.972-.33 3.855-.943 5.621-1.756l-6.508-6.508-4.26 4.26zM22.095 15.906c1.085 1.085 2.51 1.627 3.936 1.627 1.425 0 2.85-.542 3.936-1.627 1.051-1.052 1.63-2.45 1.63-3.937 0-1.486-.579-2.884-1.63-3.936l-7.872 7.873z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#4BBEFD" d="M26.03 8.631c-.854 0-1.71.326-2.36.977-.632.63-.98 1.47-.98 2.361 0 .893.348 1.731.98 2.362 1.301 1.302 3.42 1.302 4.722 0 .631-.63.979-1.47.979-2.362 0-.892-.348-1.73-.979-2.361-.65-.651-1.506-.977-2.361-.977z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                    <path fill="#0590FB" d="M28.392 9.608L23.67 14.33c1.302 1.302 3.421 1.302 4.723 0 .631-.63.979-1.47.979-2.362 0-.892-.348-1.73-.979-2.361z" transform="translate(-116 -322) translate(104 310) translate(12 12) translate(5 5)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </SvgIcon>
    )
}

function SpringIcon(props){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <g fill="none" fill-rule="evenodd">
                <g>
                    <g>
                        <g>
                            <path d="M0 0H48V48H0z" transform="translate(-204 -322) translate(192 310) translate(12 12)"/>
                            <g fill-rule="nonzero">
                                <path fill="#E0230D" d="M14.713 6.09c.61 6.386-5.346 7.01-4.737 13.395.141 1.472.569 2.57 1.146 3.47-1.11-1.17-2.907-2.44-3.13-4.772-.61-6.385 5.346-7.01 4.736-13.395-.222-2.332-.491-3.602-1.602-4.771 1.643 1.44 3.282 2.88 3.587 6.073z" transform="translate(-204 -322) translate(192 310) translate(12 12) translate(5 6)"/>
                                <path fill="#FF5440" d="M13.493 4.788c.61 6.385-5.346 7.01-4.736 13.395.223 2.332 1.255 3.601 2.365 4.771-1.64-1.44-3.28-2.882-3.585-6.074-.61-6.385 5.346-7.01 4.736-13.394-.14-1.473-.568-2.571-1.146-3.47 1.11 1.17 2.143 2.44 2.366 4.772z" transform="translate(-204 -322) translate(192 310) translate(12 12) translate(5 6)"/>
                                <path fill="#E0230D" d="M22.588 6.09c.61 6.386-5.346 7.01-4.736 13.395.14 1.472.568 2.57 1.145 3.47-1.11-1.17-2.907-2.44-3.13-4.772-.61-6.385 5.347-7.01 4.736-13.395-.222-2.332-.491-3.602-1.601-4.771 1.642 1.44 3.281 2.88 3.586 6.073z" transform="translate(-204 -322) translate(192 310) translate(12 12) translate(5 6)"/>
                                <path fill="#FF5440" d="M21.368 4.788c.61 6.385-5.346 7.01-4.736 13.395.223 2.332 1.256 3.601 2.365 4.771-1.64-1.44-3.28-2.882-3.585-6.074-.61-6.385 5.346-7.01 4.737-13.394-.141-1.473-.568-2.571-1.147-3.47 1.11 1.17 2.144 2.44 2.366 4.772z" transform="translate(-204 -322) translate(192 310) translate(12 12) translate(5 6)"/>
                                <path fill="#E0230D" d="M30.463 6.09c.61 6.386-5.346 7.011-4.736 13.396.14 1.471.568 2.57 1.145 3.468-1.11-1.17-2.907-2.439-3.13-4.77-.61-6.386 5.347-7.011 4.737-13.396-.223-2.332-.492-3.602-1.602-4.771 1.642 1.44 3.281 2.88 3.586 6.074z" transform="translate(-204 -322) translate(192 310) translate(12 12) translate(5 6)"/>
                                <path fill="#FF5440" d="M29.243 4.788c.61 6.385-5.346 7.01-4.736 13.396.223 2.332 1.256 3.6 2.365 4.77-1.64-1.44-3.28-2.881-3.585-6.073-.61-6.385 5.346-7.01 4.737-13.395-.141-1.473-.568-2.57-1.147-3.47 1.11 1.17 2.144 2.44 2.366 4.772z" transform="translate(-204 -322) translate(192 310) translate(12 12) translate(5 6)"/>
                                <path fill="#E0230D" d="M33.207 20.66C36.187 22.247 38 24.336 38 26.625c0 4.924-8.374 8.984-18.755 8.984 4.495 0 15.697-4.066 15.697-8.984 0-1.165.351-2.278-.4-3.3-.09-.945-.56-1.844-1.335-2.663z" transform="translate(-204 -322) translate(192 310) translate(12 12) translate(5 6)"/>
                                <path fill="#FF5440" d="M34.543 23.325c.75 1.021 1.163 2.134 1.163 3.3 0 4.917-7.347 8.912-16.46 8.983H19c-10.493 0-19-4.021-19-8.983 0-2.29 1.812-4.378 4.793-5.964-.868.917-1.352 1.933-1.352 3.003 0 4.063 6.966 7.357 15.559 7.357s15.56-3.294 15.56-7.357c0-.114-.006-.227-.017-.34z" transform="translate(-204 -322) translate(192 310) translate(12 12) translate(5 6)"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    )
}

function FamilyIcon(props){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <g fill="none" fill-rule="evenodd">
                <g>
                    <g>
                        <g>
                            <path d="M0 0H48V48H0z" transform="translate(-292 -322) translate(280 310) translate(12 12)"/>
                            <g fill-rule="nonzero">
                                <path fill="#FF98CD" d="M20.113 16.7v12.245H4.453v-3.34C2.004 25.605 0 23.601 0 21.152 0 18.703 2.004 16.7 4.453 16.7c0-1.848 1.566-3.34 3.414-3.34h8.906c1.849 0 3.34 1.492 3.34 3.34z" transform="translate(-292 -322) translate(280 310) translate(12 12) translate(5 6)"/>
                                <path fill="#FF80AA" d="M20.113 16.7v12.245h-8.906V13.36h5.566c1.849 0 3.34 1.492 3.34 3.34z" transform="translate(-292 -322) translate(280 310) translate(12 12) translate(5 6)"/>
                                <path fill="#FDC" d="M11.207 4.453c-2.45 0-4.453 2.004-4.453 4.453 0 2.45 2.004 4.453 4.453 4.453 2.45 0 4.453-2.004 4.453-4.453 0-2.449-2.004-4.453-4.453-4.453zM27.906 0c-3.072 0-5.566 2.494-5.566 5.566 0 3.073 2.494 5.567 5.566 5.567 3.073 0 5.567-2.494 5.567-5.567C33.473 2.494 30.979 0 27.906 0z" transform="translate(-292 -322) translate(280 310) translate(12 12) translate(5 6)"/>
                                <path fill="#FFDF40" d="M36.515 19.066l1.485.526V16.7c0-3.069-2.571-5.566-5.64-5.566h-8.907c-3.069 0-5.566 2.497-5.566 5.566-2.456 0-4.453 1.997-4.453 4.453 0 2.456 1.997 4.453 4.453 4.453v5.567h5.566c0 2.456 1.997 4.453 4.453 4.453 2.456 0 4.453-1.997 4.453-4.453H38v-8.46l-1.485.527c-1.673.594-3.042-.628-3.042-2.087s1.369-2.683 3.042-2.086z" transform="translate(-292 -322) translate(280 310) translate(12 12) translate(5 6)"/>
                                <path fill="#FFBE40" d="M32.36 31.172H38v-8.46l-1.485.527c-1.673.594-3.042-.628-3.042-2.087s1.369-2.683 3.042-2.086l1.485.526V16.7c0-3.069-2.571-5.566-5.64-5.566h-4.454v24.492c2.456 0 4.453-1.997 4.453-4.453z" transform="translate(-292 -322) translate(280 310) translate(12 12) translate(5 6)"/>
                                <g fill="#FFCABF">
                                    <path d="M22.266 5.566c0 3.073-2.494 5.567-5.567 5.567V0c3.073 0 5.567 2.494 5.567 5.566zM4.453 8.906c0 2.45-2.004 4.453-4.453 4.453V4.453c2.45 0 4.453 2.004 4.453 4.453z" transform="translate(-292 -322) translate(280 310) translate(12 12) translate(5 6) translate(11.207)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

// function HomeIcon(props){
//     return(
//         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 25 24" objectFit="contain">
//             <g fill="none" fill-rule="evenodd">
//                 <g fill="#00D04C">
//                     <g>
//                         <g>
//                             <path d="M10.183 19.339L10.183 13.93 13.817 13.93 13.817 19.339 18.296 19.339 18.296 12.113 21 12.113 12 4 3 12.113 5.704 12.113 5.704 19.339z" transform="translate(-39 -720) translate(0 712) translate(39.512 8)"/>
//                         </g>
//                     </g>
//                 </g>
//             </g>
//         </svg>
//     )
// }

function Home3(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="container">
            <AppBar position="static" style={{background: '#3c5754'}}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Go Hiking
                </Typography>
                <Button color="inherit">
                    <SearchIcon style={{color: '#ffffff', fontSize: '24px'}}/>
                </Button>
                </Toolbar>
            </AppBar>

            <div className = "container container2">
                <section className = "contextBlock" style={{padding: '40px 16px 70px', width: '259px', height: '230px', float: 'left', backgroundColor: '#232323'}}>
                    <div className = {classes.text1}>親子步道上線囉</div>
                    <div className = {classes.text2}>帶著你的老爸冒險去。</div>
                    <input type = "button" value= "查看步道→" className = {classes.button1}></input>
                </section>
                <Card className={classes.root} style={{backgroundColor: "white"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="family"
                            height="230"
                            width="342"
                            image="/asset/images/family.jpg" 
                            title="family image"
                        />
                    </CardActionArea>
                </Card>
            </div>
            <div className = {classes.greyRectangle}></div>
            <div className = {classes.whiteRectangle}>
                <div className = {classes.iconCard}>
                    <ThemeProvider theme={iconTheme}>
                        <CardActionArea image>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="asset/icons/icon-mapple.svg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Button className={classes.quickSearchTitle} variant="h5" textAlign="center">
                                賞楓
                            </Button>
                            </CardContent>
                        </CardActionArea>
                    </ThemeProvider>
                </div>
                
                <div className = {classes.iconCard}>
                    <ThemeProvider theme={iconTheme}>
                        <CardActionArea image>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="asset/icons/icon-challenge.svg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Button className={classes.quickSearchTitle} variant="h5" textAlign="center">
                                挑戰
                            </Button>
                            </CardContent>
                        </CardActionArea>
                    </ThemeProvider>
                </div>
                
                <div className = {classes.iconCard}>
                    <ThemeProvider theme={iconTheme}>
                        <CardActionArea image>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="asset/icons/icon-hot-spring.svg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Button className={classes.quickSearchTitle} variant="h5" textAlign="center">
                                溫泉
                            </Button>
                            </CardContent>
                        </CardActionArea>
                    </ThemeProvider>
                </div>

                <div className = {classes.iconCard}>
                    <ThemeProvider theme={iconTheme}>
                        <CardActionArea image>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="48"
                            width="48"
                            image="asset/icons/icon-family.svg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Button className={classes.quickSearchTitle} variant="h5" textAlign="center">
                                親子
                            </Button>                            
                            </CardContent>
                        </CardActionArea>
                    </ThemeProvider>
                </div>
                
            </div>
            <div className = {classes.greyRectangle}></div>
            <div className = {classes.recommendTitle}><div>行程推薦</div></div>
                <div className =  {classes.recommendation}> {/*有利用到flexbox */}
                    <div className = {classes.recommendBlock}>
                        <ThemeProvider theme={recommendTheme}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="family"
                                    width="174"
                                    image="/asset/images/trail1.jpg" 
                                    title="Sign-in background img"
                                />
                            </CardActionArea>
                            <CardContent>                            
                                <Typography className={classes.recommendBlockTitle} textAlign="center">2020跨年日出秘境步道...</Typography>                          
                                <Typography className={classes.recommendBlockDate} variant = "h5" textAlign="center">2019-12-11</Typography>                          
                            </CardContent>                            
                        </ThemeProvider>
                    </div>

                    <div className = {classes.recommendBlock}>
                        <ThemeProvider theme={recommendTheme}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="family"
                                    height="96"
                                    width="74"
                                    image="/asset/images/trail2.jpg" 
                                    title="Sign-in background img"
                                />
                            </CardActionArea>
                            <CardContent>                            
                                <Typography className={classes.recommendBlockTitle} textAlign="center">2020跨年日出秘境步道...</Typography>                          
                                <Typography className={classes.recommendBlockDate} variant = "h5" textAlign="center">2019-12-31</Typography>                          
                            </CardContent>                            
                        </ThemeProvider>
                    </div>

            </div>
            <div className = {classes.greyRectangle}></div>

            <Paper square className={classes.tabs}>
                <ThemeProvider theme={tabTheme}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                    >
                        <Tab icon={<HomeIcon />} label="首頁" />
                        <Tab icon={<SearchIcon />} label="步道搜尋" />
                        <Tab icon={<LocationSearchingIcon />} label="附近步道" />
                        <Tab icon={<FavoriteIcon />} label="我的收藏" />
                    </Tabs>
                    </ThemeProvider>
            </Paper>
            
        </div>
    );
};

export default Home3; 