import { format } from "../../../../auxiliar";
import ParcelaCheckbox from "./ParcelaCheckbox";
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
              <th>Data de vencimento</th>
              <th>Valor</th>
              <th
                className="th-selecionar"
                onClick={props.selecionarOuDesselecionarTodas}
              >
                Selecionar
              </th>
            </tr>
          </thead>
          <tbody>
            {props.contrato.parcelas.inadimplentes.map((parcela) => {
              return (
                <tr key={parcela.numero}>
                  <td>{parcela.numero}</td>
                  <td>{parcela.status}</td>
                  <td>{format.date(parcela.dataDeVencimento)}</td>
                  <td>{format.money(parcela.valor)}</td>
                  <td className="checkbox-cell">
                    <ParcelaCheckbox
                      parcela={parcela}
                      selecionarParcela={props.selecionarParcela}
                      desselecionarParcela={props.desselecionarParcela}
                      checked={props.parcelasSelecionadas.includes(parcela)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
