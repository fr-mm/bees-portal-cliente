import "./blackButton.css";

export default function BlackButton(props) {
  return (
    <div className="black-button-container" onClick={props.onClick}>
      <button className="black-button">{props.children}</button>
    </div>
  );
}
