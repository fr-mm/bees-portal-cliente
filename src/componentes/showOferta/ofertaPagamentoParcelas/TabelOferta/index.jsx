import "./styles.css"
const arrMock = [
    {
        nome: "pedro",
        status: "gay",
        valor: 1
    },
    {
        nome: "pedro",
        status: "gay",
        valor: 1
    }
    , {
        nome: "pedro",
        status: "gay",
        valor: 1
    },
    {
        nome: "pedro",
        status: "gay",
        valor: 1
    }
    ,
    {
        nome: "pedro",
        status: "gay",
        valor: 1
    },
    {
        nome: "pedro",
        status: "gay",
        valor: 1
    }
    ,{
        nome: "pedro",
        status: "gay",
        valor: 1
    },{
        nome: "pedro",
        status: "gay",
        valor: 1
    }
]
function TabelaParcelas() {
    return (


        <div className="container_tabela">
            <h1>Detalhes das parcelas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Parcela</th>
                        <th>Status</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrMock.map(element => {
                            return(
                            <tr>
                                <td>{element.nome}</td>
                                <td>{element.status}</td>
                                <td>{element.valor}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>


    )
}
export default TabelaParcelas;