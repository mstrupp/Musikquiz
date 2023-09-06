"use client";

import React from "react";
import Confetti from "react-confetti";
import Counter from "@/components/counter";
import WinnerText from "@/components/WinnerText";

import Pencil from "@/components/icons/pencil";
import Plus from "@/components/icons/plus";

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

  let leader = [...players].sort((p1, p2) => {
    return p2.score - p1.score;
  })[0];

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
    <main className="flex min-h-screen flex-col items-center bg-slate-700 text-gray-200">
      {gameOver ? <Confetti /> : <></>}
      <h1 className="py-10 text-5xl font-semibold my-5">Musikquiz</h1>

      <div className="flex space-x-10 items-start mb-12">
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

        <div className="flex flex-col space-y-2 w-8">
          <button
            className="btn rounded-lg p-1"
            onClick={handleAddPlayer}
            key={-1}
            title="Spieler hinzufügen"
          >
            <Plus />
          </button>
          <button
            onClick={() => {
              setEdit(!edit);
            }}
            className={
              "btn rounded-lg p-1" +
              (edit ? " bg-sky-800 outline-2 border-2" : "")
            }
          >
            <Pencil />
          </button>
        </div>
      </div>
      {gameOver ? <WinnerText name={leader.name} /> : <></>}
    </main>
  );
}
