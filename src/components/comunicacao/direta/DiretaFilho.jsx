
export default props => {
    return(
        <div>
            <span>{props.nome}</span>
            <span>{props.idade}</span>
            <span>{props.nerd ? <strong> eh </strong> : <strong> não eh </strong>}</span>
            <span>nerd</span>
        </div>
    )
}

/**
 * comunicaçao das arvores (troca de dados do componente pai e filho)

comunicação direta ser dar ataraves das props
dentro do pai tem uma correspondencia (referencia) direta do filho
 */