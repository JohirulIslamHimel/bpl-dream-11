import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  //   console.log(playersPromise);
  const players = use(playersPromise);
  //   console.log(players);
  const [selectedType, setSelectedType] = useState("available");
  console.log(selectedType);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div className="container mx-auto my-10 mb-5 px-4 pb-30 md:pb-80">
      {/* Players:{players.length} */}

      <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center mb-8 ">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players ({selectedPlayers.length}/{players.length})
          </h2>
        )}
        <div className="flex rounded-xl border border-gray-100 p-1 w-full md:w-auto justify-center md:justify-end">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}
          >
            Available
          </button>

          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}  rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
          setSelectedType={setSelectedType}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
