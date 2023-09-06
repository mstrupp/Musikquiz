import React from "react";

export default function Settings({
  goal,
  setGoal,
}: {
  goal: number;
  setGoal: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-row space-x-2">
      <p>Ziel:</p>
      <input
        type="range"
        className="w-16 bg-gray-800 text-center rounded-md text-lg"
        value={goal}
        min={10}
        max={50}
        step={10}
        onChange={(e) => setGoal(Number(e.target.value))}
      />
      <p className="w-24">{goal} Punkte</p>
    </div>
  );
}
