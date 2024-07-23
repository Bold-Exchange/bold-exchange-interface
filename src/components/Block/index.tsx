const Block = ({
  title,
  hover = false,
  textAlign = "text-center",
  children,
}: any) => {
  return (
    <div
      className={`flex-auto flex-row ${textAlign}  bg-zinc-900 p-2  text-gray-600 ${
        hover && `hover:bg-zinc-800 group`
      } `}
    >
      <div className="flex-col  group-hover:text-white">{title}</div>
      <div className="flex-col">{children}</div>
    </div>
  );
};
export default Block;
