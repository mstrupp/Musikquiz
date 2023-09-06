import React from "react";
import { Player } from "../app/page";
import PlayerName from "./PlayerName";

import ChevronDown from "./icons/chevron-down";
import ChevronUp from "./icons/chevron-up";

export default function Counter({
  player,
  onChangePlayer,
  onRemovePlayer,
  winner,
  edit,
}: {
  player: Player;
  onChangePlayer: (player: Player) => void;
  onRemovePlayer: (player: Player) => void;
  winner: boolean;
  edit: boolean;
}) {
  return (
    <div className="w-28 flex flex-col items-center space-y-6">
      <PlayerName
        player={player}
        onChangePlayer={onChangePlayer}
        onRemovePlayer={onRemovePlayer}
        edit={edit}
      />

      <button
        onClick={() => onChangePlayer({ ...player, score: player.score + 1 })}
        className="w-full bg-blue-300 stroke-blue-900 rounded-lg px-8 active:scale-95 hover:bg-blue-200"
      >
        <ChevronUp />
      </button>

      <div
        className={
          "text-4xl font-bold select-none cursor-default" +
          (winner ? " text-yellow-500" : "")
        }
      >
        {player.score}
      </div>

      <button
        onClick={() => onChangePlayer({ ...player, score: player.score - 1 })}
        className="w-full bg-blue-300 stroke-blue-900 rounded-lg px-8 active:scale-95 hover:bg-blue-200"
      >
        <ChevronDown />
      </button>
    </div>
  );
}
