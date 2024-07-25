const Ring = (props: any) => {
  const color = Math.random() * 100;
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center"
      style={{
        background: `conic-gradient(rgb(136, 214, 147) ${color}%, rgba(136, 214, 147, 0.4) ${color}%)`,
      }}
    >
      <div className="w-11 h-11 rounded-full bg-gray-800">{props.children}</div>
    </div>
  );
};
export default Ring;
