import React from "react";
import { AppRouter } from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="main-container">
      <AppRouter />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          success: {
            style: {
              background: "#FCEDED",
              color: "#A31B1E",
              fontSize:"12px",
              padding:"10px 20px"
            },
          },
          error: {
            style: {
              background: "#FCEDED",
              color: "#A31B1E",
              fontSize:"12px",
              padding:"10px 20px"
            },
          },
        }}
      />
    </div>
  );
};

export default App;
