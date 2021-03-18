import React, { Fragment, useState, useEffect } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import {
  Avatar,
  Backdrop,
  Button,
  Dialog,
  Divider,
  Grid,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import AvatarUploadDialog from "components/Dialog/AvatarUploadDialog";
import AvatarUploadDialogLogic from "components/Dialog/AvatarUploadDialogLogic";
import Select from "@material-ui/core/Select";
import { countryInfo } from "../../data/countryInfo";
import PersonalPageLogic from "./personalPageLogic";
import { useHistory } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00d04c"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  top_bar_bg_color: {
    backgroundColor: "#3c5754",
    height: 56
  },
  textfield_container: {
    marginTop: 15,
    background: "white"
  },
  title: {
    flexGrow: 1,
    marginLeft: 32
  },
  avatar: {
    width: 96,
    height: 96
  },
  gridMargin: {
    marginTop: 32
  },
  textfield: {
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 24,
    flexGrow: 1,
    width: "100%"
  },
  textfield_phone: {
    marginTop: 8,
    marginBottom: 8,
    flexGrow: 1,
    width: "100%"
  },
  textLabel: {
    paddingLeft: 15
  },
  finishButton: {
    padding: 0,
    paddingLeft: 40
  },
  avatarOverlay: {
    position: "absolute",
    bottom: 0,
    height: "20%",
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "150%",
    color: "white",
    fontSize: 12,
    opacity: "80%"
  },
  avatarContainer: {
    background: "yellow",
    width: 96,
    height: 96,
    position: "relative",
    borderRadius: "50% 50%",
    margin: 0,
    padding: 0,
    zIndex: 100,
    overflow: "hidden"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

function PersonalPage(props) {
  const history = useHistory();

  const Logix = PersonalPageLogic();
  const croppedImage =
    props.location.state === undefined
      ? null
      : props.location.state.croppedImage;
  if (croppedImage) {
    props.location.state.croppedImage = null;
    if (croppedImage.search("blob:") == -1) {
      croppedImage = null;
    }
  }
  const {
    isOpen,
    openDialog,
    closeDialog,
    inputRef,
    triggerImageInput
  } = AvatarUploadDialogLogic();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#3c5754" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            個人檔案
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => {
              history.push({
                pathname: "/editAccount",
                state: { pData: Logix.personalInfo }
              });
            }}
          >
            <EditIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
        className={classes.gridMargin}
      >
        <Grid
          item
          xs={12}
          container
          direction="column"
          alignItems="center"
          justify="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <div className={classes.avatarContainer}>
              <Avatar
                // alt="Profile Picture"
                src={
                  croppedImage == null
                    ? Logix.personalInfo.image
                    : croppedImage
                }
                className={classes.avatar}
              />
              {/* {isReadonly ? (
                <></>
              ) : (
                <div
                  class={classes.avatarOverlay}
                  onClick={() => {
                    openDialog();
                  }}
                >
                  更換
                </div>
              )} */}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            alignItems="center"
            justify="flex-start"
            spacing={0.5}
          >
            {true ? (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ color: "#232323" }}>
                    {Logix.personalInfo.name
                      ? Logix.personalInfo.name
                      : "loading"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h7" style={{ color: "#919191" }}>
                    {Logix.personalInfo.email
                      ? Logix.personalInfo.email
                      : "loading"}
                  </Typography>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Typography variant="h7" style={{ color: "#919191" }}>
                    {Logix.personalInfo.email
                      ? Logix.personalInfo.email
                      : "loading"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ height: 32 }} />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="column"
          alignItems="center"
          justify="flex-start"
        >
          <Grid
            item
            xs={12}
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
            className={classes.textfield_container}
            spacing={0}
          >
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                姓名
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                placeholder="姓名"
                className={classes.textfield}
                inputProps={{
                  value: Logix.personalInfo.name,
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                性別
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                placeholder="性別"
                className={classes.textfield}
                inputProps={{
                  value: Logix.personalInfo.gender,
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                國碼
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Select
                labelId="country-code"
                id="country-code"
                style={{ width: "30%" }}
                className={classes.textfield}
                inputProps={{
                  readOnly: true
                }}
              >
                {countryInfo.map(info => (
                  <MenuItem
                    key={info.countryCode + info.countryName}
                    value={info.phoneCode}
                  >
                    {info.phoneCode}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                id="standard-basic"
                placeholder="手機"
                style={{ width: "70%" }}
                className={classes.textfield_phone}
                inputProps={{
                  value: Logix.personalInfo.phone_number,
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                生日
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                placeholder="生日"
                className={classes.textfield}
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  value: Logix.personalInfo.birth,
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                居住地
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                placeholder="居住地"
                className={classes.textfield}
                inputProps={{
                  value: Logix.personalInfo.county
                    ? Logix.personalInfo.county.name
                    : "",
                  readOnly: true
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AvatarUploadDialog
        isOpen={isOpen}
        triggerImageInput={triggerImageInput}
        closeDialog={closeDialog}
        inputRef={inputRef}
      />
      <Backdrop className={classes.backdrop} open={Logix.isLoading}>
        <ClipLoader color={"#36CAAD"} loading={Logix.isLoading} size={150} />
      </Backdrop>
    </div>
  );
}

export default PersonalPage;
