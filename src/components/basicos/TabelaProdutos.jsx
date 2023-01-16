import './TabelaProdutos.css'
import produtos from "../../data/produtos"

export default props => {
    const ListaProdutos = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 ==0 ?  "Par" : "Impar"}>
                <td>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    })
    return(
        <div className='TabelaProduto'>
            <table border="1">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Product</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaProdutos}
                </tbody>
            </table>
        </div>
    )
}