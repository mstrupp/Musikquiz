export default function WinnerText({ name }: { name: string }) {
  return (
    <div className="flex flex-row items-baseline">
      <p className="uppercase text-5xl mr-4 font-bold animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        {name}
      </p>
      <p>hat gewonnen!</p>
    </div>
  );
}
