import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "../CustomInput/CustomInput";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/chick/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  return (
    <div>
      {/* <div className={classes.searchWrapper}> */}
      {/*  <CustomInput */}
      {/*    formControlProps={{ */}
      {/*      className: classes.margin + " " + classes.search */}
      {/*    }} */}
      {/*    inputProps={{ */}
      {/*      placeholder: "Search", */}
      {/*      inputProps: { */}
      {/*        "aria-label": "Search" */}
      {/*      } */}
      {/*    }} */}
      {/*  /> */}
      {/*  <Button color="white" aria-label="edit" justIcon round> */}
      {/*    <Search /> */}
      {/*  </Button> */}
      {/* </div> */}
    </div>
  );
}
