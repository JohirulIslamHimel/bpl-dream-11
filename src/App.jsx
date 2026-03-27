import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/homePage/banner/Banner";
import Players from "./components/homePage/players/Players";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
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
      <Footer></Footer>
      {/* react toast component */}
      <ToastContainer />
    </>
  );
}

export default App;
