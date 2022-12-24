import './index.css'
import ReactDom from 'react-dom'; // a partir dele nós vamos usar para apartir dele mostrar alguma coisa na tela
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

const el = document.getElementById('root')

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
           titulo="situação do Aluno," 
           aluno= "Carlos Silva "
           nota= {9.3}
        />
        <ComParametro
           titulo="situação da Aluna," 
           aluno= "Ana Silva "
           nota= {6.9}
        />
    </div>,
    el);