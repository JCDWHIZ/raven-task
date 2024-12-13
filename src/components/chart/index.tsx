import "./index.css";
import Button from "../button";
import dropdown from "../../assets/dropdown.svg";
import candlechart from "../../assets/candle-chart.svg";
import CandlestickComboChart from "../candle-stick";

interface Props {
  setIsModalOpen: (value: boolean) => void;
  setModalType: (value: "buy" | "sell") => void;
}

export default function Chart({ setIsModalOpen, setModalType }: Props) {
  return (
    <div className="chart-filter-component">
      <div className="chart-filters">
        <span> Time </span>
        <button>1H</button>
        <button>2H</button>
        <button>4H</button>
        <button className="active">1D</button>
        <button>1W</button>
        <button>1M</button>
        <button>
          <img src={dropdown} alt="" />
        </button>
        <button>
          <img src={candlechart} alt="" />
        </button>
        <span>Fx Indicators</span>
      </div>

      <div className="">
        <CandlestickComboChart />
      </div>

      <div className="chart-action-btns">
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setModalType("buy");
          }}
          color={"#25c26e"}
          children={"Buy"}
        />
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setModalType("sell");
          }}
          color={"#ff554a"}
          children={"Sell"}
        />
      </div>
    </div>
  );
}
