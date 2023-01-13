import './index.css'
import ReactDOM from 'react-dom/client'; // a partir dele nós vamos usar para apartir dele mostrar alguma coisa na tela
import React from 'react';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);