import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/basicos/ListaAlunos';
import TabelaProdutos from './components/basicos/TabelaProdutos';
import DiretaPai from './components/comunicacao/direta/DiretaPai';
import IndiretaPai from './components/comunicacao/indireta/IndiretaPai';

export default _ =>

    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#9 - Comunicação Indireta" color="yellow">
                <IndiretaPai/>
            </Card>
            <Card titulo="#8 - Comunicação Direta" color="#3A9AD9">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#7 - Tabela de produtos" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Lista de alunos">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Familia">
                <Familia sobrenome="lopes">
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="maria" />
                <FamiliaMembro nome="mira" />
                </Familia>
            </Card>
            <Card titulo="#04 - Número aleatório" color="#080">
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

// <Familia/> -> isso eh um elemento

/**
 * https://www.cod3r.com.br/courses/take/react-redux-fundamentos-e-2-apps-do-absoluto-zero/lessons/12636886-componente-card-03
 * 
 * recebendo a cor através do parametro
 */