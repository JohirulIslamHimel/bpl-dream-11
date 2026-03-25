import { Suspense, useState } from "react";
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
  const [coin, setCoin] = useState(5000000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
