export default function ParcelaCheckbox(props) {
  function onChange(event) {
    if (event.target.checked) {
      props.selecionarParcela(props.parcela);
    } else {
      props.desselecionarParcela(props.parcela);
    }
  }
  return <input type="checkbox" onChange={onChange} checked={props.checked} />;
}
