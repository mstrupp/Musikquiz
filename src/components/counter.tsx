import React from "react";
import { Player } from "../app/page";

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
      {edit ? (
        <div className="flex space-x-2">
          <input
            className="w-full bg-gray-900 text-center text-lg"
            type="text"
            value={player.name}
            onChange={(e) =>
              onChangePlayer({ ...player, name: e.target.value })
            }
          />
          <button onClick={() => onRemovePlayer(player)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div>{player.name}</div>
      )}

      <button
        onClick={() => onChangePlayer({ ...player, score: player.score + 1 })}
        className="w-full bg-blue-300 stroke-blue-900 rounded-lg px-8 active:scale-95 hover:bg-blue-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
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
