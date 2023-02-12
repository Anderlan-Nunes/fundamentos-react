import '../Contador.css'
import { useState } from "react";
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

/*export default props => {
    
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
        setPasso(e)
    }
    return(
        <div className='Contador'>
            <h2>Contador</h2>
            <Display valor={valor}/>
            <div>
                <PassoForm passo={passo} incluirPasso={incluirPasso}/>
            </div>
            <div>
                <Botoes incrementar={_=> inc(valor)} decrementar={_=> dec(valor)}/>
            </div>
        </div>
    )
}*/

export default props => {

    const [valor, setValor] = useState(props.numeroInicial || 0)
    const [passo, setPasso] = useState(props.passoInicial || 5)


    return (
        <div className='Contador'>
            <h2>Contador</h2>
            <Display valor={valor}></Display>
            <PassoForm passo={passo} incluirPasso={setPasso}></PassoForm>
            <Botoes incrementar={() => setValor(valor + passo)} decrementar={() => setValor(valor - passo)}></Botoes>
        </div>
    )

}
