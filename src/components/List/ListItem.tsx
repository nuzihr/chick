import React from "react";
import { Avatar, ListItem, ListItemAvatar } from "@material-ui/core";

export default function CustomListItem(props: {
  operator: string;
  img: string;
}) {
  return (
    <ListItemAvatar>
      <ListItem button component="a" href={`/app/operators/${props.operator}`}>
        <Avatar src={props.img} />
      </ListItem>
    </ListItemAvatar>
  );
}
