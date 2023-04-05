import "./styles.css"
const arrMock = [
    {
        nome: "pedro",
        status: "valido",
        valor: 1
    },
    {
        nome: "pedro",
        status: "valido",
        valor: 1
    }
    , {
        nome: "pedro",
        status: "valido",
        valor: 1
    },
    {
        nome: "pedro",
        status: "valido",
        valor: 1
    }
    ,
    {
        nome: "pedro",
        status: "valido",
        valor: 1
    },
    {
        nome: "pedro",
        status: "valido",
        valor: 1
    }
    ,{
        nome: "pedro",
        status: "valido",
        valor: 1
    },{
        nome: "pedro",
        status: "valido",
        valor: 1
    },
    {
        nome: "pedro",
        status: "valido",
        valor: 1
    }
    ,
    {
        nome: "pedro",
        status: "valido",
        valor: 1
    },
    {
        nome: "pedro",
        status: "valido",
        valor: 1
    }
    ,{
        nome: "pedro",
        status: "valido",
        valor: 1
    },{
        nome: "pedro",
        status: "valido",
        valor: 1
    }
]
function TabelaParcelas() {
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
    </div>


    )
}
export default TabelaParcelas;