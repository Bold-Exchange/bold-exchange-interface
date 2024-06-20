import { useEffect } from "react";
export default function () {
  useEffect(() => {
    (function ($) {
      "use strict";

      $(document).ready(function () {
        //preloader
        $("#preloader")
          .delay(3500)
          .animate(
            {
              opacity: "0",
            },
            500,
            function () {
              $("#preloader").css("display", "none");
            }
          );

        //preloader counter
        $(".counterr").counterUp({
          delay: 10,
          time: 2900,
        });
      });
    })(jQuery);
  }, []);
  return (
    <div className="loader_wrapper" id="preloader">
      <div className="loader">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle sd"></div>
        </div>
        <div className="percent">
          <span className="counterr">100</span>
          <span className="per">%</span>
        </div>
      </div>
    </div>
  );
}
