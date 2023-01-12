import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (
       <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="maria" {...props}/>
            <FamiliaMembro nome="mira" sobrenome="lopes"/>
       </div>
    )
}


/** ...operador sprad no angular eh o spradoperation tambem pode {props.sobrenome}
 * parametro do componente pai nao eh automaticamente passado para o componente filho
operador sprad no angular eh o spradoperation ou tres pontinho ...

props eh um objeto e um objeto vc consegue espalhar as propriedades em uma determinada tag
 */

//  <FamiliaMembro nome="maria" {...props}/> peguei todas as propriedades q recebi desse componente passei para o meu COMp FILHO
