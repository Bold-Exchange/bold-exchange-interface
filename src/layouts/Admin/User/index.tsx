import "./styles.less";
const User = () => {
  return (
    <div className="user_wrapper">
      <div className="profile_wrapper text-center">
        <div className="profile_content">
          <a href="" className="profile">
            <img src="/images/profile-sm.png" alt="Profile Picture" />
          </a>
          <span className="d-flex align-items-center justify-content-center">
            12
          </span>
        </div>
        <h5 className="text-center">
          <a href="">ED WALSH</a>
        </h5>
      </div>
      <div className="follow_wrapper d-flex align-items-center justify-content-around">
        <div className="follower d-flex align-items-center justify-content-between">
          <div className="icon">
            <i className="flaticon-user-profile"></i>
          </div>
          <div className="amount">
            <a href="">2,239</a>
            <p>FOLLOWERS</p>
          </div>
        </div>
        <div className="following d-flex align-items-center justify-content-between">
          <div className="icon">
            <i className="flaticon-user-profile"></i>
          </div>
          <div className="amount">
            <a href="">5,339</a>
            <p>FOLLOWING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
