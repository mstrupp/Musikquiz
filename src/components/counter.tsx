import React from "react";
import {Player} from "../app/page"

export default function Counter({
  player,
  onChangePlayer,
}: {
  player: Player;
  onChangePlayer: (player: Player) => void;
}) {
  return (
    <div className="w-28 flex flex-col items-center space-y-6">
      <input
        className="w-full bg-gray-900 text-center text-lg"
        type="text"
        value={player.name}
        onChange={(e) => onChangePlayer({ ...player, name: e.target.value })}
      />
      <button
        onClick={() => onChangePlayer({ ...player, score: player.score + 1 })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-full bg-blue-300 stroke-blue-900 rounded-lg px-8 active:scale-95 hover:bg-blue-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
      <p className=" text-4xl font-bold select-none cursor-default">
        {player.score}
      </p>
      <button
        onClick={() => onChangePlayer({ ...player, score: player.score - 1 })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full bg-blue-300 stroke-blue-900 rounded-lg px-8 active:scale-95 hover:bg-blue-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}
