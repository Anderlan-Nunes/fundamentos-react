import { useState } from 'react';

import IndiretaFilho from './IndiretaFilho';

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState('0')
    const [nerd, setNerd] = useState(false)
    
    function pegaInformacao(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

    }
    return(
        <div>
            <div>Pai</div>
            <span>{nome} </span>
            <span><strong>{idade}</strong> </span>
            <span>{nerd ? 'ehNerd':'NãoEhNerd'}</span>
            <IndiretaFilho quandoClicar={pegaInformacao}/>
        </div>
    )
    
}
