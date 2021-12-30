import React from 'react';

export class FetchProduct extends React.Component {
    static displayName = FetchProduct.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.populateProducts();
    }

    static renderProductTable(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Cost</th>
                        <th>Description</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.pro_id}>
                            <td>{product.pro_id}</td>
                            <td>{product.pro_nm}</td>
                            <td>{product.cat_id}</td>
                            <td>{product.cost}</td>
                            <td>{product.description}</td>
                            <td> {product.a_ia ?
                                <input type='checkbox' id='{category.cat_id}' checked />
                                : <input type='checkbox' id='{category.cat_id}' />}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchProduct.renderProductTable(this.state.products);

        return (
            <div>
                <h1 id="tabelLabel" >Products</h1>
                <p>This component demonstrates fetching product from the server.</p>
                {contents}
            </div>
        );
    }

    async populateProducts() {
        const response = await fetch('http://localhost:62330/api/Products');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }

}