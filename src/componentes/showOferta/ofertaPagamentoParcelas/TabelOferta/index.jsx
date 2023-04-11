import { format } from "../../../../auxiliar";
import "./styles.css";
export default function TabelaParcelas(props) {
  return (
    <div className="container_tabela">
      <h1>Detalhes das parcelas</h1>
      <div className="tabela-wrapper">
        <table>
          <thead>
            <tr>
              <th>Parcela</th>
              <th>Status</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {props.contrato.parcelas.todas.map((parcela) => {
              return (
                <tr key={parcela.numero}>
                  <td>{parcela.numero}</td>
                  <td>{parcela.status}</td>
                  <td>{format.money(parcela.valor)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
