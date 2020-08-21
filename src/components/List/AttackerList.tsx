import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { List } from "@material-ui/core";
import styles from "../../assets/jss/chick/components/listStyle";
import ListItem from "./OperatorListItem";

import ace from "../../assets/img/r6s/ace.svg";
import amaru from "../../assets/img/r6s/amaru.svg";
import ash from "../../assets/img/r6s/ash.svg";
import blackbeard from "../../assets/img/r6s/blackbeard.svg";
import blitz from "../../assets/img/r6s/blitz.svg";
import buck from "../../assets/img/r6s/buck.svg";
import capitao from "../../assets/img/r6s/capitao.svg";
import dokkaebi from "../../assets/img/r6s/dokkaebi.svg";
import finka from "../../assets/img/r6s/finka.svg";
import fuze from "../../assets/img/r6s/fuze.svg";
import glaz from "../../assets/img/r6s/glaz.svg";
import gridlock from "../../assets/img/r6s/gridlock.svg";
import hibana from "../../assets/img/r6s/hibana.svg";
import iana from "../../assets/img/r6s/iana.svg";
import iq from "../../assets/img/r6s/iq.svg";
import jackal from "../../assets/img/r6s/jackal.svg";
import kali from "../../assets/img/r6s/kali.svg";
import lion from "../../assets/img/r6s/lion.svg";
import maverick from "../../assets/img/r6s/maverick.svg";
import montagne from "../../assets/img/r6s/montagne.svg";
import nokk from "../../assets/img/r6s/nokk.svg";
import nomad from "../../assets/img/r6s/nomad.svg";
import sledge from "../../assets/img/r6s/sledge.svg";
import thatcher from "../../assets/img/r6s/thatcher.svg";
import thermite from "../../assets/img/r6s/thermite.svg";
import twitch from "../../assets/img/r6s/twitch.svg";
import ying from "../../assets/img/r6s/ying.svg";
import zofia from "../../assets/img/r6s/zofia.svg";

const useStyles = makeStyles(styles);

export default function CustomList() {
  const classes: { [key: string]: string } = useStyles();
  return (
    <div>
      <List className={classes.flexCell}>
        <ListItem operator="Sledge" img={sledge} />
        <ListItem operator="Thatcher" img={thatcher} />
        <ListItem operator="Ash" img={ash} />
        <ListItem operator="Thermite" img={thermite} />
        <ListItem operator="Twitch" img={twitch} />
        <ListItem operator="Montagne" img={montagne} />
        <ListItem operator="Glaz" img={glaz} />
        <ListItem operator="Fuze" img={fuze} />
        <ListItem operator="Blitz" img={blitz} />
        <ListItem operator="Iq" img={iq} />
        <ListItem operator="Buck" img={buck} />
        <ListItem operator="Blackbeard" img={blackbeard} />
        <ListItem operator="Capitao" img={capitao} />
        <ListItem operator="Hibana" img={hibana} />
        <ListItem operator="Jackal" img={jackal} />
        <ListItem operator="Ying" img={ying} />
        <ListItem operator="Zofia" img={zofia} />
        <ListItem operator="Dokkaebi" img={dokkaebi} />
        <ListItem operator="Lion" img={lion} />
        <ListItem operator="Finka" img={finka} />
        <ListItem operator="Maverick" img={maverick} />
        <ListItem operator="Nomad" img={nomad} />
        <ListItem operator="Gridlock" img={gridlock} />
        <ListItem operator="Nøkk" img={nokk} />
        <ListItem operator="Amaru" img={amaru} />
        <ListItem operator="Kali" img={kali} />
        <ListItem operator="Iana" img={iana} />
        <ListItem operator="Ace" img={ace} />
      </List>
    </div>
  );
}
