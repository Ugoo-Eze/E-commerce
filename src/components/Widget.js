import "../styles/Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="widgetImg_1">
        <img
          style={{ borderRadius: "5px" }}
          src="https://ng.jumia.is/cms/Homepage/2021/W29/NG_NSF_LIVE_BSB_WANT_CHEAPER-(1).jpg"
          alt='widget2'
        />
      </div>
      <div className="widgetImg_2">
        <img
          style={{ borderRadius: "5px" }}
          src="https://ng.jumia.is/cms/Homepage/2021/W29/NG_NSF_LIVE_BSB_PRIME-(1).gif"
          alt='widget2'
        />
      </div>
    </div>
  );
}

export default Widget;
