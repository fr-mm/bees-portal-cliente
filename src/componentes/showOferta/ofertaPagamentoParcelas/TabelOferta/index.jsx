import "./styles.css"
const arrMock = [
    {
        nome: "pedro",
        status: "Inadimplente",
        valor: "360,00",
        parcela: "2",
        vencimento: "06/07/2023"
    },
    {
        nome: "pedro",
        status: "A vencer",
        valor: "360,00",
        parcela: "3",
        vencimento: "06/08/2023"
    }
    , {
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    },
    {
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    }
    ,
    {
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    },
    {
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    }
    ,{
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    },{
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    },
    {
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    }
    ,
    {
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    },
    {
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    }
    ,{
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
    },{
        nome: "pedro",
        status: "A vencer",
        valor: "360,00"
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