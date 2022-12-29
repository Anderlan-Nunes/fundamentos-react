import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Primeiro></Primeiro>
        <ComParametro
            titulo="situação do Aluno,"
            aluno="Carlos Silva "
            nota={9.3}
        />
        <ComParametro
            titulo="situação da Aluna,"
            aluno="Ana Silva "
            nota={6.9}
        />
    </div>