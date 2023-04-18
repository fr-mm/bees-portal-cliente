import "./blackButton.css";

export default function BlackButton(props) {
  const defaultWidth = "15.5em";
  const width = {
    minWidth: props.width ? props.width : defaultWidth,
  };
  return (
    <div className="black-button-container" onClick={props.onClick}>
      <button style={width} className="black-button">
        {props.children}
      </button>
    </div>
  );
}
