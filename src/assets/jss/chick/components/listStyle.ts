import { createStyles, Theme } from "@material-ui/core";
import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont,
} from "../../chick";

const listStyle = (theme: Theme) =>
  createStyles({
    flexCell: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
      button: true,
      flexWrap: "wrap",
      justifyContent: "center",
      overflow: "hidden",
    },
  });

export default listStyle;
