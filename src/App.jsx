import { Suspense } from "react";
import "./App.css";
import Banner from "./components/homePage/banner/Banner";
import Players from "./components/homePage/players/Players";
import Navbar from "./components/navbar/Navbar";

const fetchPlayer = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
