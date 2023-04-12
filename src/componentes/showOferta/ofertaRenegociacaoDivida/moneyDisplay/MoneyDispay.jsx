import "./moneyDisplay.css";

export default function MoneyDisplay(props) {
  const containerClass =
    "money-display-container" + (props.active ? "" : " disabled");
  return (
    <div className={containerClass}>
      <h2>{props.active ? props.children : "--"}</h2>
    </div>
  );
}
