import React from "react";
import { render } from "react-dom";
import App from "./screens/App";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/store";
import { HashRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import firebase from "firebase";
import "./assets/css/main.css";
import firebaseConfig from "./firebase";

const persistor = persistStore(configureStore);
firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
          console.log('failed-precondition');
          
        } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
          console.log('unimplemented');
      }
  });

  

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement("div");

root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it
render(
  <Provider store={configureStore}>
    <PersistGate persistor={persistor}>
      <SnackbarProvider>
        <HashRouter>
          <App />
        </HashRouter> 
      </SnackbarProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
