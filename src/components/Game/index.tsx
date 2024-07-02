import "./styles.less";
const Game = () => {
  return (
    <div className="game_wrapper2">
      <div className="game_header d-flex align-items-start justify-content-around">
        <div className="left_col text-center">
          <img src="assets/images/user/new_logo.png" alt="New York Team" />
          <p>
            <a href="league.html">New York Knicks</a>
          </p>
        </div>
      </div>
      <div className="game_footer d-flex align-items-center justify-content-around">
        <p className="date">April 14, 2021</p>
        <p className="time">02:00 AM</p>
      </div>
    </div>
  );
};

export default Game;
