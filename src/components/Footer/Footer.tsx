/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/jss/chick/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props: any) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.hinatazaka46.com/" className={classes.block}>
                日向坂
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.ubereats.com/jp" className={classes.block}>
                Uber Eats
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/app/dashboard" className={classes.block}>
                HOME
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://r46s.nuzihr.dev/app/dashboard"
              target="_blank"
              className={classes.a}
            >
              Da-reyorimotakak
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
