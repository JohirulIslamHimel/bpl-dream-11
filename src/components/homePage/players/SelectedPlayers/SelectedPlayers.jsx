import React from "react";
import SelectedCard from "../../../ui/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
  setSelectedType,
}) => {
  //   console.log(selectedPlayers);
  const handleDeleteSelectedPlayer = (player) => {
    // console.log(player);
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    console.log(filteredPlayers);
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };
  return (
    <div className="mb-12">
      <div className="space-y-5">
        {selectedPlayers.length === 0 ? (
          <div className=" h-100 flex items-center justify-center flex-col gap-2 py-10 ">
            <h2 className="font-semibold text-xl ">No player selected yet</h2>
            <p>Go to Available tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((player, ind) => {
            return (
              <SelectedCard
                key={ind}
                player={player}
                handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
              ></SelectedCard>
            );
          })
        )}
      </div>
      {/* --- btn section --- */}
      <div className="mt-10 mb-5 p-1 border border-black rounded-2xl w-fit">
        <button
          onClick={() => setSelectedType("available")}
          className="btn bg-[#E7FE29] hover:bg-[#E7FE29] text-black font-bold px-6 py-3 rounded-xl border-none"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
