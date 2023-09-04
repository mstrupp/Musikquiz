"use client";

import React from "react";
import Counter from "@/components/counter";
import Confetti from "react-confetti";

export interface Player {
  id: number;
  name: string;
  score: number;
}

const initialPlayers = [
  { id: 0, name: "Name", score: 0 },
  { id: 1, name: "Name", score: 0 },
  { id: 2, name: "Name", score: 0 },
];
let nextId = 3;

export default function Home() {
  const [players, setPlayers] = React.useState(initialPlayers);
  const [edit, setEdit] = React.useState(false);
  const [goal, setGoal] = React.useState(30);
  const [gameOver, setGameOver] = React.useState(false);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      let key = Number(event.key);
      if (isNaN(key)) return;
      if (key < 1 || key > 9) return;
      if (key > players.length) return;
      let player = players[key - 1];
      handleChangePlayer({ ...player, score: player.score + 1 });
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleChangePlayer(player: Player) {
    setPlayers(
      players.map((p) => {
        if (p.id == player.id) {
          return player;
        } else {
          return p;
        }
      })
    );
    if (player.score >= goal) {
      setGameOver(true);
    }
  }

  function handleAddPlayer() {
    setPlayers([...players, { id: nextId, name: "Name", score: 0 }]);
    nextId += 1;
  }

  function handleRemovePlayer(player: Player) {
    setPlayers(players.filter((p) => p.id != player.id));
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-950 text-gray-200">
      {gameOver ? <Confetti /> : <></>}
      <h1 className="py-10 text-4xl font-semibold">Musikquiz</h1>
      <div className="flex space-x-10 items-start">
        {players.map((player) => (
          <Counter
            player={player}
            onChangePlayer={handleChangePlayer}
            onRemovePlayer={handleRemovePlayer}
            winner={player.score >= goal}
            edit={edit}
            key={player.id}
          />
        ))}
        <div className="flex flex-col space-y-2 w-6 stroke-gray-200">
          <button onClick={handleAddPlayer} key={-1} title="Spieler hinzufügen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setEdit(!edit);
            }}
            className={
              "bg-gray-700 stroke-gray-200" + (edit ? " bg-blue-900" : "")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
