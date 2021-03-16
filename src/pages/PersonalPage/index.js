import React, { Fragment, useState, useEffect } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import { Avatar, Button, Dialog, Divider, Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import AvatarUploadDialog from "components/Dialog/AvatarUploadDialog";
import AvatarUploadDialogLogic from "components/Dialog/AvatarUploadDialogLogic";

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
  }
}));

function PersonalPage() {
  const {
    isOpen,
    openDialog,
    closeDialog,
    inputRef,
    triggerImageInput
  } = AvatarUploadDialogLogic();
  const classes = useStyles();
  const [isReadonly, setIsReadonly] = useState(true);
  const toggleIsReadonly = () => {
    setIsReadonly(prevState => !prevState);
    console.log(isReadonly);
  };
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
          {isReadonly ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => {
                toggleIsReadonly();
              }}
            >
              <EditIcon />
            </IconButton>
          ) : (
            <Button
              className={classes.finishButton}
              color="inherit"
              edge="end"
              onClick={() => toggleIsReadonly()}
            >
              完成
            </Button>
          )}
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
              <Avatar alt="Profile Picture" src="" className={classes.avatar} />
              <div
                class={classes.avatarOverlay}
                onClick={() => {
                  openDialog();
                }}
              >
                更換
              </div>
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
            <Grid item xs={12}>
              <Typography variant="h6" style={{ color: "#232323" }}>
                金凱瑞
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" style={{ color: "#919191" }}>
                heyfromjonathan@gmail.com
              </Typography>
            </Grid>
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
                  readOnly: isReadonly
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
                  readOnly: isReadonly
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                手機
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                placeholder="手機"
                className={classes.textfield}
                inputProps={{
                  readOnly: isReadonly
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
                  readOnly: isReadonly
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
                  readOnly: isReadonly
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
    </div>
  );
}

export default PersonalPage;
