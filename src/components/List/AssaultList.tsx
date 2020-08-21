import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { List } from "@material-ui/core";
import styles from "../../assets/jss/chick/components/listStyle";
import ListItem from "./WeaponListItem";

import l85a2 from "../../assets/img/weapons/l85a2.svg";
import ar33 from "../../assets/img/weapons/ar33.svg";
import g36c from "../../assets/img/weapons/g36c.svg";
import c416 from "../../assets/img/weapons/416c.svg";
import r4c from "../../assets/img/weapons/r4c.svg";
import xi556 from "../../assets/img/weapons/556xi.svg";
import f2 from "../../assets/img/weapons/f2.svg";
import ak12 from "../../assets/img/weapons/ak12.svg";
import auga2 from "../../assets/img/weapons/auga2.svg";
import commando552 from "../../assets/img/weapons/552commando.svg";
import c8sfw from "../../assets/img/weapons/c8sfw.svg";
import mk17 from "../../assets/img/weapons/mk17.svg";
import para308 from "../../assets/img/weapons/para308.svg";
import type89 from "../../assets/img/weapons/type89.svg";
import c7e from "../../assets/img/weapons/c7e.svg";
import v308 from "../../assets/img/weapons/v308.svg";
import m762 from "../../assets/img/weapons/m762.svg";
import ar1550 from "../../assets/img/weapons/ar1550.svg";
import m4 from "../../assets/img/weapons/m4.svg";
import ak74m from "../../assets/img/weapons/ak74m.svg";
import arx200 from "../../assets/img/weapons/arx200.svg";
import f90 from "../../assets/img/weapons/f90.svg";
import commando9 from "../../assets/img/weapons/commando9.svg";

const useStyles = makeStyles(styles);

export default function AssaultList() {
  const classes: { [key: string]: string } = useStyles();
  return (
    <div>
      <List className={classes.flexCell}>
        <ListItem weapon="L85A2" img={l85a2} />
        <ListItem weapon="AR33" img={ar33} />
        <ListItem weapon="G36C" img={g36c} />
        <ListItem weapon="416-C CARBINE" img={c416} />
        <ListItem weapon="R4-C" img={r4c} />
        <ListItem weapon="556XI" img={xi556} />
        <ListItem weapon="F2" img={f2} />
        <ListItem weapon="AK-12" img={ak12} />
        <ListItem weapon="AUG A2" img={auga2} />
        <ListItem weapon="552 Commando" img={commando552} />
        <ListItem weapon="C8-SFW" img={c8sfw} />
        <ListItem weapon="MK17 CQB" img={mk17} />
        <ListItem weapon="PARA-308" img={para308} />
        <ListItem weapon="Type-89" img={type89} />
        <ListItem weapon="C7E" img={c7e} />
        <ListItem weapon="v308" img={v308} />
        <ListItem weapon="M762" img={m762} />
        <ListItem weapon="AR-15.50" img={ar1550} />
        <ListItem weapon="M4" img={m4} />
        <ListItem weapon="AK-74M" img={ak74m} />
        <ListItem weapon="ARX200" img={arx200} />
        <ListItem weapon="F90" img={f90} />
        <ListItem weapon="Commando 9" img={commando9} />
      </List>
    </div>
  );
}
