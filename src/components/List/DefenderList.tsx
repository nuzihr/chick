import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { List } from "@material-ui/core";
import styles from "../../assets/jss/chick/components/listStyle";
import ListItem from "./OperatorListItem";

import alibi from "../../assets/img/r6s/alibi.svg";
import bandit from "../../assets/img/r6s/bandit.svg";
import castle from "../../assets/img/r6s/castle.svg";
import caveira from "../../assets/img/r6s/caveira.svg";
import clash from "../../assets/img/r6s/clash.svg";
import doc from "../../assets/img/r6s/doc.svg";
import echo from "../../assets/img/r6s/echo.svg";
import ela from "../../assets/img/r6s/ela.svg";
import frost from "../../assets/img/r6s/frost.svg";
import goyo from "../../assets/img/r6s/goyo.svg";
import jager from "../../assets/img/r6s/jager.svg";
import kaid from "../../assets/img/r6s/kaid.svg";
import kapkan from "../../assets/img/r6s/kapkan.svg";
import lesion from "../../assets/img/r6s/lesion.svg";
import maestro from "../../assets/img/r6s/maestro.svg";
import mira from "../../assets/img/r6s/mira.svg";
import mozzie from "../../assets/img/r6s/mozzie.svg";
import mute from "../../assets/img/r6s/mute.svg";
import oryx from "../../assets/img/r6s/oryx.svg";
import pulse from "../../assets/img/r6s/pulse.svg";
import rook from "../../assets/img/r6s/rook.svg";
import smoke from "../../assets/img/r6s/smoke.svg";
import tachanka from "../../assets/img/r6s/tachanka.svg";
import valkyrie from "../../assets/img/r6s/valkyrie.svg";
import vigil from "../../assets/img/r6s/vigil.svg";
import wamai from "../../assets/img/r6s/wamai.svg";
import warden from "../../assets/img/r6s/warden.svg";
import melusi from "../../assets/img/r6s/melusi.svg";

const useStyles = makeStyles(styles);

export default function CustomList() {
  const classes: { [key: string]: string } = useStyles();
  return (
    <div>
      <List className={classes.flexCell}>
        <ListItem operator="Smoke" img={smoke} />
        <ListItem operator="Mute" img={mute} />
        <ListItem operator="Castle" img={castle} />
        <ListItem operator="Pulse" img={pulse} />
        <ListItem operator="Rook" img={rook} />
        <ListItem operator="Doc" img={doc} />
        <ListItem operator="Kapkan" img={kapkan} />
        <ListItem operator="Tachanka" img={tachanka} />
        <ListItem operator="Jager" img={jager} />
        <ListItem operator="Bandit" img={bandit} />
        <ListItem operator="Frost" img={frost} />
        <ListItem operator="Valkyrie" img={valkyrie} />
        <ListItem operator="Caveira" img={caveira} />
        <ListItem operator="Echo" img={echo} />
        <ListItem operator="Mira" img={mira} />
        <ListItem operator="Lesion" img={lesion} />
        <ListItem operator="Ela" img={ela} />
        <ListItem operator="Vigil" img={vigil} />
        <ListItem operator="Maestro" img={maestro} />
        <ListItem operator="Alibi" img={alibi} />
        <ListItem operator="Clash" img={clash} />
        <ListItem operator="Kaid" img={kaid} />
        <ListItem operator="Mozzie" img={mozzie} />
        <ListItem operator="Warden" img={warden} />
        <ListItem operator="Goyo" img={goyo} />
        <ListItem operator="Wamai" img={wamai} />
        <ListItem operator="Oryx" img={oryx} />
        <ListItem operator="Melusi" img={melusi} />
      </List>
    </div>
  );
}
