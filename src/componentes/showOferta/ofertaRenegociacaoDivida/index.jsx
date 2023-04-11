import "./styles.css"
import "./slider.css"
import React, { useState } from 'react';
import ReactSlider from "react-slider";

function OfertaRenegociaDivida  (){
    const [sliderValue, setSliderValue] = useState(0)
    const [selectedOption, setSelectedOption] = useState("Em 2 vezes"); 

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value); 
    };

    return (
        <div className="container_renegociar_divida">
            <div className="box-title-renegocia-divida">
                <h4>Defina em quantas  parcelas você quer pagar a sua renegociação</h4>
            </div>
           
            <div className="box-input-e-label">
            <div className="box-label-input-range"><p>Entrada mínima</p><p>Entrada máxima</p></div>
            <ReactSlider
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          max={200}
          onChange={setSliderValue}
          renderThumb={(props, state) => (
            <div {...props}>
              <div className="box-container">
                <div className="box">R$ {sliderValue}</div>
              </div>
            </div>
          )}
        />
            </div>
            <div className="box-infos-renegocia-divida">
                <div className="box-left-renegocia-divida">
                    <p>Entrada</p>
                    <h2>{`R$ ${sliderValue}`}</h2>
                </div>
                <div className="box-right-renegocia-divida">
                    <div className="box-input-parcelas-renegocia-divida">
                        <p>Em quantas parcelas?</p>
                         <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            id="my-select-input" 
                        >   
                            <option value="2">Em 2 vezes</option> 
                            <option value="3">Em 3 vezes</option> 
                        
                          
                         </select> 
                    </div>
                    <h4>R$ [Quantidy $$]</h4>
                </div>
               
            </div>
            <div className="box-btn-gerar-acordo">
            <button className="btn-gerar-acordo">Gerar acordo</button>
            </div>
        </div>
    )
};
export default OfertaRenegociaDivida