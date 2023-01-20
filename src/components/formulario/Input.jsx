import './Input.css';

import { useState } from 'react'


export default props => {
    const [valor, setValor] = useState('Inicial');

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className='Input'>
            <div>
                <h2>{valor}</h2>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input type="text" value={valor} onChange={quandoMudar} />
                <input type="text" value={valor} readOnly placeholder='somente leitura' />
                <input type="text" value={undefined} placeholder='componente não controlado'/>
            </div>
        </div>
    )
}