import "./index.css";

import dropdown from "../../assets/dropdown.svg";
import samplecrypto from "../../assets/sample-crypto.svg";
import clock from "../../assets/clock.svg";
import arrowup from "../../assets/arrow-up-grey.svg";
import arrowdown from "../../assets/arrow-down-grey.svg";
import chart from "../../assets/chart.svg";
import CardBox from "../card-box";

export default function CryptoBar() {
  return (
    <section className="crypto-bar">
      <div className="crypto-bar-top">
        <div className="crypto-bar-top-left">
          <img src={samplecrypto} alt="" />
          <span className="crypto-bar-top-left-text">BTC/USDT</span>
          <img src={dropdown} alt="" />
        </div>
        <div className="crypto-bar-top-right">
          <span className="crypto-bar-top-right-text">$20,634</span>
        </div>
      </div>
      <div className="crypto-bar-bottom">
        <CardBox icon={clock} value="24h change" amount="75.655.26" profit />
        <CardBox icon={arrowup} value="24h high" amount="75.655.26" />
        <CardBox icon={arrowdown} value="24h low" amount="75.655.26" />
        <CardBox icon={chart} value="24h volume" amount="75.655.26" />
      </div>
    </section>
  );
}
