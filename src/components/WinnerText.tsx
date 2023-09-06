export default function WinnerText({ name }: { name: string }) {
  return (
    <div className="flex flex-row items-baseline">
      <p className="uppercase text-5xl mr-4 font-bold animate-bounce text-transparent bg-clip-text bg-gradient-to-br from-[#FAF562] to-[#F36A7B]">
        {name}
      </p>
      <p>hat gewonnen!</p>
    </div>
  );
}
