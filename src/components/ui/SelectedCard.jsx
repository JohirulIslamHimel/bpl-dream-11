import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
  return (
    <div className="flex items-center gap-6 justify-between p-10 rounded-2xl border">
      <div className="flex items-center gap-6">
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="h-18 w-auto rounded-md"
        />
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-xl ">
            <FaUser />
            {player.playerName}
          </h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <button
        className="btn text-red-500"
        onClick={() => handleDeleteSelectedPlayer(player)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedCard;
