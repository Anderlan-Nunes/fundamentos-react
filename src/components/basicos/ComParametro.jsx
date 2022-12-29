export default function ComParametro (props) {
    const status= props.nota > 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                 { props.aluno } 
                tem nota:
                <strong> { notaInt } </strong>
                 e está
                <strong> { status } </strong>
            </p>
        </div>
    )
}