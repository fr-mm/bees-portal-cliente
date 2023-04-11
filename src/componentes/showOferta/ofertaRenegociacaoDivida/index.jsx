import "./styles.css"
import React, { useState } from 'react';

function OfertaRenegociaDivida  (){
    const [sliderValue, setSliderValue] = useState(5); 
    const [selectedOption, setSelectedOption] = useState("Em 2 vezes"); 
 
    const handleSliderChange = (event) => {
        const value = event.target.value;
        setSliderValue(value);
    };
   

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value); 
    };
  

    return (
        <div className="container_renegociar_divida">
            <div className="box-title-renegocia-divida">
                <h4>Defina em quantas  parcelas você quer pagar a sua renegociação</h4>
            </div>
           
            <div>
            <div className="box-label-input-range"><p>Entrada mínima</p><p>Entrada máxima</p></div>
                    <input
                    type="range"
                    min={0}
                    id="input-slider"
                    max={100}
                    value={sliderValue}
                    onChange={handleSliderChange}
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
                    <h4>BR [Quantidy $$]</h4>
                </div>
            </div>
        </div>
    )
};
export default OfertaRenegociaDivida