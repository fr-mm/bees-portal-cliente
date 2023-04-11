import "./styles.css";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import { useState } from "react";
import { localStorageEnum, tipoDeBuscaEnum } from "../../dominio/enums";
import container from "../../dominio/container";
import { useUser } from "../../hook";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { setBuscaContext } = useUser();
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState(tipoDeBuscaEnum.cpfCnpj);
  const [currentTestimonial, setCurrentTestimonial] = useState({
    title: "Fácil de usar",
    text: "Sabemos que ter dívidas tira o sono de qualquer um e que cada centavo de economia conta. Pensando nisso, oferecemos um ambiente simples e seguro para que você possa focar apenas em regularizar sua água.",
    img: "/img/SVG_Graphic.svg",
  });

  function buscaOnChange(event) {
    setSearch(event.target.value);
  }

  function changeSearchType(event) {
    setSearchType(event.target.value);
  }

  async function doSearch() {
    try {
      const otd = await container.casoDeUso.buscarContratos.executar({
        valor: search,
        tipo: searchType,
      });

      if (otd.contratos.length === 0) {
        // O que acntece se não tiver contratos
        console.log("cliente não tem contratos");
      }

      // muda de rota e passa os contratos pra nova rota
      localStorage.setItem(localStorageEnum.lastSearch, search);
      localStorage.setItem(localStorageEnum.lastSearchType, searchType);
      setBuscaContext(otd);
      navigate("/oferta");
    } catch (error) {
      // O que acontece se der erro de comunicação com backend
      throw error;
    }
  }

  const testimonials = [
    {
      title: "Fácil de usar",
      text: "Sabemos que ter dívidas tira o sono de qualquer um e que cada centavo de economia conta. Pensando nisso, oferecemos um ambiente simples e seguro para que você possa focar apenas em regularizar sua água.",
      img: "/img/SVG_Graphic.svg",
      styl: "",
    },
    {
      title: "100% seguro",
      text: "É rápido e fácil. As parcelas são submetidas a uma análise para garantir a melhor segurança de que você está pagando corretamente",
      img: "/img/SVG_Graphic.svg",
      styl: "",
    },
    {
      title: "Mais agilidade",
      text: "Gere seu boleto em poucos minutos, sistema 100% automatizado.",
      img: "/img/SVG_Graphic.svg",
      styl: "",
    },
    {
      title: "Sem constrangimento",
      text: "Sem telefonemas, sem filas de banco.",
      img: "/img/SVG_Graphic.svg",
      styl: "",
    },
  ];

  function nextTestimonial(currentTestimonial) {
    const testimonialTextList = testimonials.map((item) => item.title);

    const positionOfCurrentTestimonial = testimonialTextList.indexOf(
      currentTestimonial.title
    );

    const positionOfNextTestimonial =
      testimonialTextList.indexOf(currentTestimonial.title) + 1;

    const next = testimonialTextList[positionOfNextTestimonial];

    const nextObgTestimonial = testimonials.filter((item) => {
      const testimonialPosition = item.title.indexOf(next) + 1;
      return testimonialPosition;
    });

    const lastItemArray =
      testimonials.length === positionOfCurrentTestimonial + 1;

    if (lastItemArray) {
      setCurrentTestimonial(testimonials[0]);
    } else {
      setCurrentTestimonial(nextObgTestimonial[0]);
    }
  }

  function pastTestimonial(currentTestimonial) {
    const testimonialTextList = testimonials.map((item) => item.title);

    const positionOfCurrentTestimonial = testimonialTextList.indexOf(
      currentTestimonial.title
    );

    const positionOfNextTestimonial =
      testimonialTextList.indexOf(currentTestimonial.title) - 1;

    const next = testimonialTextList[positionOfNextTestimonial];

    const nextObgTestimonial = testimonials.filter((item) => {
      const testimonialPosition = item.title.indexOf(next) - 1;
      return testimonialPosition;
    });

    const lastItemArray = positionOfCurrentTestimonial === 0;

    if (lastItemArray) {
      setCurrentTestimonial(testimonials[testimonials.length - 1]);
    } else {
      setCurrentTestimonial(nextObgTestimonial[positionOfNextTestimonial]);
    }
  }

  function buttonTestimonial(current) {
    setCurrentTestimonial(testimonials[current]);
  }
  return (
    <div className="container-home">
      <Header />
      <div className="scream-busca-cpf">
        <div className="container-title">
          <h1>NEGOCIE AGORA</h1>
          <h3>Aproveite, é simples mantenha seu nome limpo.</h3>
        </div>
        <div className="container-busca-cpf">
          <h5>CONSULTE SUAS FATURAS EM ABERTO</h5>
          <p>Informe abaixo seu CPF/CNPJ ou número do contrato</p>

          <form className="container-radio-home">
            <div className="box-radio">
              <label>
                <input
                  id="radio-home"
                  type="radio"
                  name="opcao"
                  value={tipoDeBuscaEnum.cpfCnpj}
                  checked={searchType === tipoDeBuscaEnum.cpfCnpj}
                  onChange={changeSearchType}
                />{" "}
                CPF/CNPJ
              </label>
            </div>
            <div className="box-radio">
              <label>
                <input
                  id="radio-home"
                  type="radio"
                  name="opcao"
                  value={tipoDeBuscaEnum.contrato}
                  checked={searchType === tipoDeBuscaEnum.contrato}
                  onChange={changeSearchType}
                />{" "}
                CONTRATO
              </label>
            </div>
          </form>
          <div className="container-input-home">
            <input
              onChange={buscaOnChange}
              placeholder="Escreva aqui seu CPF ou seu contrato..."
            />
            <div className="box-lupa" onClick={doSearch}>
              <img
                id="lupa-icon"
                src="/img/lupaIconWhite.svg"
                alt="lupa-home"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scream-beneficios">
        <h2>Quais são os benefícios?</h2>
        <div className="container-title-beneficios">
          <button
            className="btn-title-beneficios"
            onClick={() => {
              buttonTestimonial(0);
            }}
            style={
              currentTestimonial.title === "Fácil de usar"
                ? { fontWeight: "bold", color: "black" }
                : { fontWeight: "normal" }
            }
          >
            Fácil de usar
          </button>
          <button
            className="btn-title-beneficios"
            onClick={() => {
              buttonTestimonial(1);
            }}
            style={
              currentTestimonial.title === "100% seguro"
                ? { fontWeight: "bold", color: "black" }
                : { fontWeight: "normal" }
            }
          >
            100% seguro
          </button>
          <button
            className="btn-title-beneficios"
            onClick={() => {
              buttonTestimonial(2);
            }}
            style={
              currentTestimonial.title === "Mais agilidade"
                ? { fontWeight: "bold", color: "black" }
                : { fontWeight: "normal" }
            }
          >
            Mais agilidade
          </button>
          <button
            className="btn-title-beneficios"
            onClick={() => {
              buttonTestimonial(3);
            }}
            style={
              currentTestimonial.title === "Sem constrangimento"
                ? { fontWeight: "bold", color: "black" }
                : { fontWeight: "normal" }
            }
          >
            Sem constrangimento
          </button>
        </div>
        <div className="container-total-beneficios">
          <div className="container-infos-beneficios">
            <h2>{currentTestimonial.title}</h2>
            <p>{currentTestimonial.text}</p>

            <div className="container-btns-carrousel">
              <button
                id="btn-beneficios"
                onClick={() => pastTestimonial(currentTestimonial)}
              >
                <img
                  id="img-arrow-beneficios"
                  src="/img/arrowLeftYelloy.svg"
                  alt="btn-prev-beneficios"
                />
              </button>
              <button
                id="btn-beneficios"
                onClick={() => nextTestimonial(currentTestimonial)}
              >
                <img
                  id="img-arrow-rigth-beneficios"
                  src="/img/arrowRigth.svg"
                  alt="btn-next-beneficios"
                />
              </button>
            </div>
          </div>
          <div className="container-img-beneficios">
            <img id="img-beneficios" src={currentTestimonial.img} alt="img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

