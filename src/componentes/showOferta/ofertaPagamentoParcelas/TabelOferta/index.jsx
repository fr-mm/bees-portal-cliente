import { format } from "../../../../auxiliar";
import "./styles.css";
export default function TabelaParcelas(props) {
  return (
    <div class="container_tabela">
      <h1>Detalhes das parcelas</h1>
      <div class="tabela-wrapper">
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
                <tr>
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

