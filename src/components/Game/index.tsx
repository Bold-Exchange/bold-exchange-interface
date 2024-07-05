import { Divider, Progress } from "antd";
import "./styles.less";
import { TwitterOutlined } from "@ant-design/icons";
const Game = () => {
  return (
    <div className="game">
      <div className="cardcontent">
        <div className="one">
          <img src="https://cdn.dexscreener.com/cms/images/lEdaZ_dD3M94_Koz?width=160&height=160&fit=crop&quality=95" />
          <div className="text">
            <div className="title">$.jacky</div>
            <p>The cutest cat on Solana</p>
          </div>
        </div>
        <div style={{ position: "absolute", right: "20px", top: "20px" }}>
          <TwitterOutlined
            style={{ color: "rgba(255, 255, 255, 0.3)", width: "13px" }}
          />
        </div>
      </div>
      <Divider />
      <div>
        <div className="aa">
          <div className="aa2">59.50SOL</div>
          <div>$52K Vol</div>
        </div>
        <div className="pro">
          <div className="pro2"></div>
        </div>
      </div>
    </div>
  );
};

export default Game;
