import React from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav />
    </>
  );
}

export default App;
