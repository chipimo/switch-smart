import React from "react";
import TextField from "@material-ui/core/TextField";
import { ListSubheader, List } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Route, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase";
import moment from "moment";

function NewWorkPeriod() {
  const history = useHistory();
  const location = useLocation();

  const [note, setNote] = React.useState("");

  const startWorkPeriod = props => {
    const db = firebase.firestore();
    let data = {
      state: "active",
      start: `${moment().format("LLLL")}`,
      end: "",
      note: note
    };

    // Add a new document in collection "cities" with ID 'LA'
    let setDoc = db
      .collection("Work Periods")
      .doc(` ${moment(new Date(), "MM-DD-YYYY")}`)
      .set(data);
  };

  return (
    <div style={{ width: "70%", marginLeft: 20 }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            New Work Period
          </ListSubheader>
        }
        //   className={classes.root}
      >
        <div>
          <TextField
            fullWidth
            id="outlined-helperText"
            label="Add a note for this work period"
            helperText="Some important text"
            variant="outlined"
            onChange={event => {
              setNote(event.target.value);
            }}
          />
        </div>
      </List>
      <Button onClick={startWorkPeriod} variant="contained" color="primary">
        Start This Work Period
      </Button>
      <Button
        onClick={() => {
          history.push("/home/workperiod/list-file");
        }}
        style={{ marginLeft: 20 }}
        variant="contained"
        color="secondary"
      >
        Cancel
      </Button>
    </div>
  );
}

export default NewWorkPeriod;
