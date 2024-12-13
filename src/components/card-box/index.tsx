import "./index.css";

interface Props {
  icon: string;
  value: string;
  amount: string;
  profit?: boolean;
}

export default function CardBox({ icon, value, amount, profit }: Props) {
  return (
    <div className="card-box">
      <div className="card-box-top">
        <img src={icon} alt="" />
        <span>{value}</span>
      </div>
      <div className="card-box-bottom">
        <span className={profit ? "up" : ""}>{amount}</span>
      </div>
    </div>
  );
}
