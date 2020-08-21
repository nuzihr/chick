import React from "react";
import { Avatar, ListItem, ListItemAvatar } from "@material-ui/core";

export default function WeaponListItem(props: { weapon: string; img: string }) {
  return (
    <ListItemAvatar>
      <ListItem
        button
        component="a"
        href={`/app/weapons/${props.weapon.replace(/( )/g, "_")}`}
      >
        <Avatar src={props.img} />
      </ListItem>
    </ListItemAvatar>
  );
}
