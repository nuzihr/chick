import React from "react";
import { Avatar, ListItem, ListItemAvatar } from "@material-ui/core";

export default function PlayerListItem(props: { player: string; img: string }) {
  return (
    <ListItemAvatar>
      <ListItem button component="a" href={`/app/players/${props.player}`}>
        <Avatar src={props.img} />
      </ListItem>
    </ListItemAvatar>
  );
}
