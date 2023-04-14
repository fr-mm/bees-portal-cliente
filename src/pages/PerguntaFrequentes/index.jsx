import "./styles.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import { useState } from "react";

function PerguntasFrequentes() {
  const [textPerguntas1, setTextPerguntas1] = useState({
    validation: false,
    img: "/img/iconDown.svg",
  });
  const [textPerguntas2, setTextPerguntas2] = useState({
    validation: false,
    img: "/img/iconDown.svg",
  });
  const [textPerguntas3, setTextPerguntas3] = useState({
    validation: false,
    img: "/img/iconDown.svg",
  });
  const [textPerguntas4, setTextPerguntas4] = useState({
    validation: false,
    img: "/img/iconDown.svg",
  });

  function ButtonTitlePerguntas(current) {
    if (current === 1) {
      textPerguntas1.validation = textPerguntas1.validation ? false : true;

      textPerguntas1.validation
        ? (textPerguntas1.img = "/img/iconUp.svg")
        : (textPerguntas1.img = "/img/iconDown.svg");
      const { ...desestrutuctionObj } = textPerguntas1;
      setTextPerguntas1(desestrutuctionObj);
    }

    if (current === 2) {
      textPerguntas2.validation = textPerguntas2.validation ? false : true;

      textPerguntas2.validation
        ? (textPerguntas2.img = "/img/iconUp.svg")
        : (textPerguntas2.img = "/img/iconDown.svg");
      const { ...desestrutuctionObj } = textPerguntas2;
      setTextPerguntas2(desestrutuctionObj);
    }

    if (current === 3) {
      textPerguntas3.validation = textPerguntas3.validation ? false : true;

      textPerguntas3.validation
        ? (textPerguntas3.img = "/img/iconUp.svg")
        : (textPerguntas3.img = "/img/iconDown.svg");
      const { ...desestrutuctionObj } = textPerguntas3;
      setTextPerguntas3(desestrutuctionObj);
    }

    if (current === 4) {
      textPerguntas4.validation = textPerguntas4.validation ? false : true;

      textPerguntas4.validation
        ? (textPerguntas4.img = "/img/iconUp.svg")
        : (textPerguntas4.img = "/img/iconDown.svg");
      const { ...desestrutuctionObj } = textPerguntas4;
      setTextPerguntas4(desestrutuctionObj);
    }
  }

  return (
    <div className="container-perguntas">
      <Header />
      <div className="scream-perguntas">
        <div className="container-video-perguntas">
          <div className="container-title-perguntas">
            <h1>Perguntas frequentes</h1>
            <img id="img-bees" src="/img/mascotBees.svg" alt="bees" />
          </div>
          <div className="box-video"></div>
        </div>
        <div className="container-text-perguntas">
          <h1>Perguntas frequentes</h1>
          <div
            className="title-perguntas"
            onClick={() => {
              ButtonTitlePerguntas(1);
            }}
          >
            <p>Onde posso pagar a fatura? </p>
            <img alt="teste" src={textPerguntas1.img} />
          </div>
          <div
            className="box-perguntas"
            style={
              textPerguntas1.validation
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Você pode pagar seu boleto através da Conta Digital Bees Bank ou em
            qualquer banco de sua preferência incluindo Lotéricas. Em caso de
            dúvidas pode nos acionar via whatsapp 11 4949 8122 ou no 0800 768
            3668.
          </div>
          <div
            className="title-perguntas"
            onClick={() => {
              ButtonTitlePerguntas(2);
            }}
          >
            <p>A fatura é confiável?</p>
            <img alt="teste" src={textPerguntas2.img} />
          </div>
          <div
            className="box-perguntas"
            style={
              textPerguntas2.validation
                ? { display: "block" }
                : { display: "none" }
            }
          >
            A Bees Bank nasceu dentro da Ambev, com o objetivo de ser a solução
            digital completa que ajuda os micro, pequenos e médios empresários a
            administrarem suas finanças com serviços que promovem facilidade,
            segurança e integração. Acesse o site https://www.beesbank.com.br Em
            caso de dúvidas pode nos acionar via whatsapp 11 4949 8122 ou no
            0800 768 3668.
          </div>
          <div
            className="title-perguntas"
            onClick={() => {
              ButtonTitlePerguntas(3);
            }}
          >
            <p>E se a fatura não for paga?</p>
            <img alt="teste" src={textPerguntas3.img} />
          </div>
          <div
            className="box-perguntas"
            style={
              textPerguntas3.validation
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Só existem duas maneiras de quitar o seu débito: • Pagando a dívida
            em atraso com todos os juros e multas Paga-se o valor total da
            dívida atualizada com todos os encargos somados até o dia em que ela
            foi negociada e paga. • Realizando uma negociação agora, com
            condições especiais e eventuais descontos O devedor é procurado pelo
            credor, para negociar a liquidação da dívida. São previstos
            descontos, novos prazos e taxas de juros menores, a fim de
            viabilizar um acordo amigável. Quando você renegociar uma dívida,
            está firmando um novo contrato e gerando uma nova obrigação de
            pagamento, que é a emissão da fatura. Ao deixar de pagar a fatura,
            fica caracterizada a quebra de acordo. Dessa forma, o credor pode
            tomar as medidas cabíveis da lei, incluindo cadastrar novamente o
            seu CPF em listas de maus pagadores. O credor pode inclusive acionar
            o pagamento da dívida original na justiça, cobrando inclusive todos
            os juros e multas acumulados no período. Portanto aproveite a chance
            do acordo on-line, pague os boletos em dia e evite que o seu nome
            volte a ficar sujo.
          </div>
          <div
            className="title-perguntas"
            onClick={() => {
              ButtonTitlePerguntas(4);
            }}
          >
            <p>Beneficios de pagar a fatura</p>
            <img alt="teste" src={textPerguntas4.img} />
          </div>
          <div
            className="box-perguntas"
            style={
              textPerguntas4.validation
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Nossa missão é ajudá-lo a buscar uma solução viável para quitar os
            seus débitos. Após o pagamento de todas as faturas em atraso ou da
            primeira parcela de um acordo negociado, o credor tem cinco dias
            para retirar o seu nome da Serasa. Algumas dicas importantes:
            Atenção com os maus hábitos financeiros! Evite consumismo,
            imediatismo e materialismo. Uma vez iniciado o plano de pagamento
            das dívidas, é preciso continuar com os bons hábitos financeiros e a
            boa gestão de seus fluxos de caixa. Se não for assim, você terá
            feito esse esforço em vão. Se tiver alguma aplicação (poupança, por
            exemplo), resgate e pague a dívida mais cara ou aquela mais difícil
            de negociar. Se tiver algum ativo que possa ser devolvido, vendido,
            faça isso e use o dinheiro para quitar/diminuir dívidas. Tente
            conseguir empréstimos com seus familiares e amigos, mesmo que
            pagando juros, que sempre serão mais baixos que os de mercado. Quite
            as dívidas mais caras com esses empréstimos. Tente antecipar 13º
            e/ou IR para amortizar as dívidas mais caras. Verifique as taxas de
            empréstimos consignados e refinanciamentos (caso tenha bens) para
            trocar os empréstimos pessoais, quitar o saldo do cartão e o cheque
            especial.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PerguntasFrequentes;
