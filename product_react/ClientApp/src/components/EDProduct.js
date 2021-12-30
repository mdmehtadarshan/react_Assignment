import React from 'react';

export class EDProduct extends React.Component {
    static displayName = EDProduct.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.populateProducts();
    }

    deleteProduct(ProductId) {
        const products = this.state.products;
        const apiUrl = 'http://localhost:62330/api/Products/' + ProductId;
        const response = fetch(apiUrl, { method: 'DELETE' })
            .then(async response => {
                console.log(response);
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = response.status;
                    return Promise.reject(error);
                }
                const filteredCats = products.filter(product => product.pro_id !== ProductId);
                console.log(filteredCats);
                this.setState({
                    products: filteredCats
                });
                alert('Delete successful');
            })
            .catch(error => {
                alert('There was an error!');
                console.error('There was an error!', error);
            });

    }



    render() {
        var products = this.state.products;
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
                        <th>Delete</th>
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
                            <td><button type='button' onClick={() => this.deleteProduct(product.pro_id)} >delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>


        );
    }

    async populateProducts() {

        const response = await fetch('http://localhost:62330/api/Products');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }

}