import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TimerIcon from "@material-ui/icons/Timer";
import TimeOffIcon from "@material-ui/icons/TimerOff";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function WorkPeriodList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      style={{ width: "75%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Work Period List
        </ListSubheader>
      }
      //   className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <TimeOffIcon />
        </ListItemIcon>
        <ListItemText
          primary={`${moment().format("LLLL")} - ${moment().format("LLLL")}`}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <TimerIcon />
        </ListItemIcon>
        <ListItemText primary={moment().format("LLLL")} />
      </ListItem>
    </List>
  );
}
