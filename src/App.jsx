import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThePanel from "./components/ThePanel";

function App() {
  return (
    <>
      <Header />
      <ThePanel />
      <Footer />
    </>
  );
}

export default App;
