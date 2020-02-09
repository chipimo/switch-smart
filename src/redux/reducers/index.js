import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
// reducers
import NetInfo from "./netInfo";
import NavTo from "./NavTo";
import SocketConnId from "./SocketConn";
import NotistackReducer from "./Notistack";

const createReducer = asyncReducers => {
  const config = {
    key: "root",
    storage,
    ...asyncReducers,
    blacklist: ["NetInfo", "NavTo", "SocketConnId", "NotistackReducer"]
  };

  return persistCombineReducers(config, {
    NetInfo: NetInfo,
    NavTo: NavTo,
    SocketConnId: SocketConnId,
    Notistack: NotistackReducer,
    ...asyncReducers
  });
};

export default createReducer;
