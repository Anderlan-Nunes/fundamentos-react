import React, { cloneElement } from 'react'

//import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (
       <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key:i});
                })
            }
            {/*
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            */}
            {/*cloneElement(props.children, props) so funciona qndo tem só um elemento */}
       </div>
    )
}

// filho
/** ...operador sprad no angular eh o spradoperation tambem pode {props.sobrenome}
 * parametro do componente pai nao eh automaticamente passado para o componente filho
operador sprad no angular eh o spradoperation ou tres pontinho ...

props eh um objeto e um objeto vc consegue espalhar as propriedades em uma determinada tag
 */

//  <FamiliaMembro nome="maria" {...props}/> peguei todas as propriedades q recebi desse componente passei para o meu COMp FILHO

/**
 * herança
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="maria" {...props}/>
            <FamiliaMembro nome="mira" sobrenome="lopes"/>
       </div> nao usa assim quando ...
essa eh a forma q tem que fazer qndo não tem acesso aos filhos .qndo vc so tem acesso a {props.children}
quando o pai nao tem referencia com o filho

monstrar os filhos recebidos aki
cloneElement- passa só um elemento para o filho

passar mais de um elemento React.Childrem.map()

                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                }) nao precisa...
props.children eh um object console.log(typeof props.children) e console.log(typeof props.children.map) diz que eh uma function
 */