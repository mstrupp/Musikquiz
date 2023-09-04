"use client";

import React from "react";
import Counter from "@/components/counter";

export default function Home() {
  const [players, setPlayers] = React.useState([]);

  function handleChangePlayer(nextPlayer: {
    id: number;
    name: string;
    score: number;
  }) {
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

  let lastId = 0;
  function handleAddPlayer() {
    let id = lastId + 1;
    lastId = id;
    setPlayers([...players, { id: lastId, name: "Name", score: 0 }]);
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
