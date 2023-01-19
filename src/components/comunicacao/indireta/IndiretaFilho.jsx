
export default props => {
    const gerarIdade = () => parseInt(Math.random() * (30)) + 50
    const  gerarNerd = () => Math.random() > 0.5

    return(
        
        <div>
            <div>Filho</div>
            <button onClick={ _=> props.quandoClicar('Joao', gerarIdade(), gerarNerd())
                /*function (e) {
                    props.quandoClicar('João', 20, 'eh Nerd')
                */
            }>
                Fornecer Informações
            </button>
        </div>
        
    )
}

/**
 * comunicação indireta
eh qndo vc precisa passar informações de um componente filho para um pai. O componente filho nao vai ter uma referencia direta para o componente pai. Entao nao tem como por via propriedade vc instanciar um componente pai.ou seja eu consegui pegar informaçoes(nome do pai, idade do pai, etc) q estava dentro do filho qual a estrategia pra passar essas informaç~eo pro pai?. O pai q tem um comunicacao direta com filho comunicacao via props passa um funcão essa função callback que sera chamada de volta em album momento ou seja qndo acontecer algum evento no filho(click no botao) vc chamou essa funcao q foi passada via props e que passou as informaçoes q vc queria do componente filho pro pai
nome idade nerd o filho vai dizer se o pai vai ter essas caracteristicas

para passar os valores o component pai precisa ter ele precisa ter um estado interno para funcionar


isso _=>{} ao inves (e)=> {}
nao precisa do (e) pq vc nao esta trabalhando so ta passando uma funçao passando os dados


 */