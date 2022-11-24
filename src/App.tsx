import "./App.css";
import React from 'react';
import { ModalStack } from "./components/ModalStack";
import { AppRouter } from "./navigations";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="pad-mar">
      <div style={{ position: "absolute", top: 0, left: 0 }}>
              <ModalStack />
              <ToastContainer />
            </div>
      <AppRouter />
    </div>
  );
}

export default App;
