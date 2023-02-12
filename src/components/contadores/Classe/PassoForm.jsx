
export default props => {

    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input
                type="number"
                id="passoInput"
                value={props.passo}
                onChange={e => props.setarPasso(+e.target.value)}
            />
        </div>
    )
}