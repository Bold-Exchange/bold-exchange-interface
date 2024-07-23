import "./loading.less";
export default function () {
  return (
    <div className="loader_wrapper">
      <div className="loader">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle sd"></div>
        </div>
        <div className="percent">
          <span className="counterr">...</span>
        </div>
      </div>
    </div>
  );
}
