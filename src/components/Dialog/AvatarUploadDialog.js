import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import AvatarUploadDialogLogic from "./AvatarUploadDialogLogic";
import { Redirect } from "react-router";
import axios from "axios";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: 286
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const AvatarUploadDialog = props => {
  const isOpen = props.isOpen;
  const closeDialog = props.closeDialog;
  const triggerImageInput = props.triggerImageInput;
  const inputRef = props.inputRef;
  const pData = props.pData;
  console.log(pData);
  const [file, setFile] = useState(null);

  const handleInputChange = event => {
    console.log(event.target.files[0]);
    // const file = event.target.files[0];
    // console.log(file);
    // var fd = new FormData();
    // fd.append("image", file);
    // axios
    //   .post("https://api.imgur.com/3/image", fd, {
    //     headers: {
    //       Authorization: "Client-ID 6bdc55894336124"
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  if (file)
    return (
      <Redirect
        to={{ pathname: "/cropAvatar", state: { image: file, pData: pData } }}
      />
    );
  return (
    <Dialog
      onClose={closeDialog}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <DialogTitle id="customized-dialog-title" onClose={true}>
        ????????????????????????
      </DialogTitle>
      <DialogContent>
        <Typography style={{ color: "#919191" }} gutterBottom>
          ???????????????????????????
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={false} style={{ color: "#007aff" }}>
          ????????????
        </Button>
      </DialogActions>
      <DialogActions>
        <input
          ref={inputRef}
          type="file"
          id="avatar_img"
          name="avatar_img"
          accept="image/*"
          onChange={event => {
            handleInputChange(event);
          }}
          hidden
        />
        <Button
          autoFocus
          onClick={triggerImageInput}
          style={{ color: "#007aff" }}
        >
          ??????????????????
        </Button>
      </DialogActions>
      <DialogActions>
        <Button autoFocus onClick={closeDialog} style={{ color: "#007aff" }}>
          ??????
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AvatarUploadDialog;
