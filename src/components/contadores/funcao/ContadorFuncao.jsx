import '../Contador.css'
import { useState } from "react";

export default props => {
    
    const valorInicial = props.numInicial || 0;
    const passoInicial = props.passoInicial || 1;

    const [valor, setValor] = useState(valorInicial);
    const [passo, setPasso] = useState(passoInicial);

    function inc(novoValor){
        setValor(novoValor +parseInt(passo))
    }

    function dec(valor){
        setValor(valor -parseInt(passo))
    }

    function incluirPasso(e){
        setPasso(e.target.value)
    }
    return(
        <div className='Contador'>
            <h2>Contador</h2>
            <h3>{valor}</h3>
            <div>
                <label htmlFor="passoInput">Passo: </label>
                <input 
                    type="number" 
                    id="passoInput"
                    value={passo}
                    onChange={incluirPasso}/>
            </div>
            <div>
                <button onClick={_=> inc(valor)}>+</button>
                <button onClick={_=> dec(valor)}>-</button>
            </div>
        </div>
    )
}