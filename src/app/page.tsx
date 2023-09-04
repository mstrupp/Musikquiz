"use client";

import React from "react";
import Counter from "@/components/counter";

export interface Player {
  id: number
  name: string
  score: number
}

let lastId = 0;

export default function Home() {
  const [players, setPlayers] = React.useState<Array<Player>>([]);

  function handleChangePlayer(nextPlayer: Player) {
    console.log(nextPlayer);
    setPlayers(
      players.map((player) => {
        if (player.id == nextPlayer.id) {
          return nextPlayer;
        } else {
          return player;
        }
      })
    );
  }

  function handleAddPlayer() {
    setPlayers([...players, { id: lastId, name: "Name", score: 0 }]);
    console.log(players);
    lastId += 1;
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-950 text-gray-200">
      <h1 className="py-10 text-4xl font-semibold">Musikquiz</h1>
      <div className="flex space-x-10 items-center">
        {players.map((player) => (
          <Counter player={player} onChangePlayer={handleChangePlayer} />
        ))}
        <button onClick={handleAddPlayer} className="text-3xl">
          +
        </button>
      </div>
    </main>
  );
}
