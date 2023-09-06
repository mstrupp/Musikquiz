import { Player } from "@/app/page";

import XCircle from "./icons/x-circle";

export default function PlayerName({
  player,
  onChangePlayer,
  onRemovePlayer,
  edit,
}: {
  player: Player;
  onChangePlayer: (player: Player) => void;
  onRemovePlayer: (player: Player) => void;
  edit: boolean;
}) {
  return edit ? (
    <div className="flex space-x-2">
      <input
        className="w-full bg-gray-800 text-center rounded-md text-lg"
        type="text"
        value={player.name}
        onChange={(e) => onChangePlayer({ ...player, name: e.target.value })}
      />
      <button className="stroke-red-500" onClick={() => onRemovePlayer(player)}>
        <XCircle />
      </button>
    </div>
  ) : (
    <div className="text-lg">{player.name}</div>
  );
}
