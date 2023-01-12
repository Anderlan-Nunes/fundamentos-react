import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/card';
import Familia from './components/basicos/Familia';


export default _ =>

    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#05 - Familia">
                <Familia sobrenome="nunes"/>
            </Card>
            <Card titulo="#04 - Número aleatório">
                <Aleatorio min={1} max={12} />
            </Card>
            <Card titulo="#03 - Com parâmetro 2">
                <ComParametro
                    titulo="situação do Aluno,"
                    aluno="Carlos Silva "
                    nota={9.3}
                />
            </Card>
            <Card titulo="#02 - Com parâmetro 2">
                <ComParametro
                    titulo="situação da Aluna,"
                    aluno="Ana Silva "
                    nota={6.9}
                />
            </Card>
            <Card titulo="#01 - Primeiro componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>