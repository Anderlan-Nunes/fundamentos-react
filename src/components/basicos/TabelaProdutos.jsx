import produtos from "../../data/produtos"

export default props => {
    const ListaProdutos = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })
    return(
        <table>
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
    )
}