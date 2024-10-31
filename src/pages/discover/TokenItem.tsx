import Token from "./Token3";
const TokenItem = () => {
  return <div className="flex items-center justify-between gap-2">
    <Token />
    <div className="h-2 relative bg-zinc-500 flex-auto rounded-full overflow-hidden">
        <div className="h-2 bg-green-500 w-[30%]"></div>
    </div>
  </div>
}
export default TokenItem