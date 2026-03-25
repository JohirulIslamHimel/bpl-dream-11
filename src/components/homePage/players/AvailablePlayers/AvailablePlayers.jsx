import React from "react";
import Card from "../../../ui/Card";
const AvailablePlayers = ({ players }) => {
  // console.log(players);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player, index) => {
          // console.log(player, "player");
          return <Card key={index} player={player}></Card>;
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
