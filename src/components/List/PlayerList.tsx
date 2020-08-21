import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { List } from "@material-ui/core";
import styles from "../../assets/jss/chick/components/listStyle";
import PlayerListItem from "./PlayerListItem";

import logo from "../../assets/img/logo.svg";

const useStyles = makeStyles(styles);

export default function PlayerList() {
  const classes: { [key: string]: string } = useStyles();
  return (
    <div>
      <List className={classes.flexCell}>
        <PlayerListItem player="Da-reyorimotakak" img={logo} />
        <PlayerListItem player="Im_yoncharu823" img={logo} />
        <PlayerListItem player="Im_Denchan" img={logo} />
        <PlayerListItem player="tiger-mam" img={logo} />
        <PlayerListItem player="Awappu1226" img={logo} />
        <PlayerListItem player="Imanimite_iro" img={logo} />
        <PlayerListItem player="Im_Kopanosuke" img={logo} />
        <PlayerListItem player="Im_akiiiiisutani" img={logo} />
        <PlayerListItem player="Im_Mechimpo" img={logo} />
        <PlayerListItem player="awajima620" img={logo} />
      </List>
    </div>
  );
}
