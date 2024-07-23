import { Divider, Progress } from "antd";
import "./styles.less";
import { TwitterOutlined } from "@ant-design/icons";
import { history } from "umi";
const Game = () => {
  return (
    <div
      className="game"
      style={{ cursor: "pointer" }}
      onClick={() => history.push("/trade")}
    >
      <div className="cardcontent">
        <div className="one">
          <img src="https://gmgn.ai/static/avator_new/140.png" />
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
        <div className="aa text-white">
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
