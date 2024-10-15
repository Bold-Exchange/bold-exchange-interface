const Item = () => {
  return (
    <table>
      <colgroup>
        <col style={{ width: "8px" }} />
      </colgroup>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <div className="flex gap-1">
              <img  className="w-[20px] rounded-full" src="https://dd.dexscreener.com/ds-data/tokens/ethereum/0xc90c4e71423dcdd0c68692901049ebfa5e6ab758.png"/>
              <div>
              🧲
              </div>
            </div>
          </td>
          <td>1233</td>
          <td>1233</td>
        </tr>
      </tbody>
    </table>
  );
};
const ListCard = () => {
  return <Item />;
};
export default ListCard;
