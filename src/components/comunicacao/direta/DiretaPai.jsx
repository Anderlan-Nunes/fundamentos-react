import DiretaFilho from "./DiretaFilho"

export default () => {
    return(
        <>
            <DiretaFilho nome = 'filho-1, ' idade={20} boolean={true}></DiretaFilho>
            <DiretaFilho nome = 'filho-2, ' idade={50} boolean={false}></DiretaFilho>
        </>
    )
}