import React from "react";
import { Paper, Typography } from "@material-ui/core";
import TimeIcon from "../../assets/icons/timetable.png";
import PosIcon from "../../assets/icons/cash_register.png";
import TicketIcon from "../../assets/icons/invoice.png";
import ChartIcon from "../../assets/icons/combo_chart.png";
import AccountIcon from "../../assets/icons/account.png";
import BusinessIcon from "../../assets/icons/small_business.png";

import {
    useLocation,
    useHistory
  } from "react-router-dom";

const SelectionPan=() =>{
  const [tab1, setTab1] = React.useState(false);
  const [tab2, setTab2] = React.useState(false);
  const [tab3, setTab3] = React.useState(false);
  const [tab4, setTab4] = React.useState(false);
  const [tab5, setTab5] = React.useState(false);
  const [tab6, setTab6] = React.useState(false);

  const history = useHistory();
  const location = useLocation();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        padding: 20,
        overflow: "hidden"
      }}
    >
      <div style={{ display: "flex", marginTop: 30 }}>
        <Paper
          square
          onClick={()=>{
            history.push("/home/workperiod/list-file")
          }}
          onMouseEnter={() => {
            setTab1(true);
          }}
          onMouseLeave={() => {
            setTab1(false);
          }}
          elevation={tab1 ? 20 : 2}
          style={{
            backgroundColor: "#09B3FF",
            width: 430,
            cursor: "pointer",
            height: 190,
            textAlign: "center",
            paddingTop: 40
          }}
        >
          <img
            src={TimeIcon}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 13 }} variant="h5">
            Work Periods
          </Typography>
        </Paper>
        <Paper
          square
          onClick={()=>{
            history.push("/home/pos")
          }}
          onMouseEnter={() => {
            setTab2(true);
          }}
          onMouseLeave={() => {
            setTab2(false);
          }}
          elevation={tab2 ? 20 : 2}
          style={{
            backgroundColor: "#09B3FF",
            width: 430,
            cursor: "pointer",
            height: 190,
            textAlign: "center",
            paddingTop: 40,
            marginLeft: 15
          }}
        >
          <img
            src={PosIcon}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 3 }} variant="h5">
            POS
          </Typography>
        </Paper>
        <Paper
          square
          onMouseEnter={() => {
            setTab3(true);
          }}
          onMouseLeave={() => {
            setTab3(false);
          }}
          elevation={tab3 ? 20 : 2}
          style={{
            backgroundColor: "#09B3FF",
            width: 430,
            cursor: "pointer",
            height: 190,
            textAlign: "center",
            paddingTop: 40,
            marginLeft: 15
          }}
        >
          <img
            src={TicketIcon}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 10 }} variant="h5">
            Tickets
          </Typography>
        </Paper>
      </div>

      <div style={{ display: "flex", marginTop: 40 }}>
        <Paper
          square
          onMouseEnter={() => {
            setTab4(true);
          }}
          onMouseLeave={() => {
            setTab4(false);
          }}
          elevation={tab4 ? 20 : 2}
          style={{
            backgroundColor: "#09B3FF",
            width: 430,
            cursor: "pointer",
            height: 190,
            textAlign: "center",
            paddingTop: 40
          }}
        >
          <img
            src={AccountIcon}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 13 }} variant="h5">
            Accounts
          </Typography>
        </Paper>
        <Paper
          square
          onMouseEnter={() => {
            setTab5(true);
          }}
          onMouseLeave={() => {
            setTab5(false);
          }}
          elevation={tab5 ? 20 : 2}
          style={{
            backgroundColor: "#09B3FF",
            width: 430,
            cursor: "pointer",
            height: 190,
            textAlign: "center",
            paddingTop: 40,
            marginLeft: 15
          }}
        >
          <img
            src={BusinessIcon}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 3 }} variant="h5">
            Stores
          </Typography>
        </Paper>
        <Paper
          square
          onMouseEnter={() => {
            setTab6(true);
          }}
          onMouseLeave={() => {
            setTab6(false);
          }}
          elevation={tab6 ? 20 : 2}
          style={{
            backgroundColor: "#09B3FF",
            width: 430,
            cursor: "pointer",
            height: 190,
            textAlign: "center",
            paddingTop: 40,
            marginLeft: 15
          }}
        >
          <img
            src={ChartIcon}
            style={{ width: 60, height: 60, margin: "auto" }}
          />
          <Typography style={{ color: "#fff", marginTop: 10 }} variant="h5">
            Reports
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default SelectionPan;
