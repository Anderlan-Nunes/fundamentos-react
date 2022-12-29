import './index.css'
import ReactDom from 'react-dom'; // a partir dele nós vamos usar para apartir dele mostrar alguma coisa na tela
import React from 'react';

import App from './App';

const el = document.getElementById('root')

ReactDom.render(
   <App />,
   el);