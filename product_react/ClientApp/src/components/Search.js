import React from 'react';
//==================================================
//ERROR IN SEARCH
//==================================================
export class Search extends React.Component {
    static displayName = Search.name;

    constructor(props) {
        super(props);
        this.state = { categories: [], products: [],opt:1,id:0, loading: true };
    }
    async getrecord(e) {
        var id = this.state.id;
        if (this.state.opt == 1)
        {
            var url = 'http://localhost:62330/api/Pro_category/' + id;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ categories: data, loading: false });

            //{id>0?
            //    <table className='table table-striped' aria-labelledby="tabelLabel">
            //    <thead>
            //        <tr>
            //            <th>Id</th>
            //            <th>Category Name</th>
            //            <th>Available</th>
            //            <th>Description</th>
            //        </tr>
            //    </thead>
            //    <tbody>
            //        {categories.map(category =>
            //            <tr key={category.cat_id}>
            //                <td>{category.cat_id}</td>
            //                <td>{category.cat_nm}</td>
            //                {category.a_ia ?
            //                    <td><input type='checkbox' id='{category.cat_id}' checked /></td>
            //                    : <td><input type='checkbox' id='{category.cat_id}' /></td>}
            //                <td>{category.description}</td>
            //            </tr>
            //        )}
            //    </tbody>
            //</table>
            //:""}
        }
        else if (this.state.opt == 2)
        {
            var url = 'http://localhost:62330/api/Products/' + id;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ products: data, loading: false });

            // {id>0?
            //    <table className='table table-striped' aria-labelledby="tabelLabel">
            //    <thead>
            //        <tr>
            //            <th>Id</th>
            //            <th>Product Name</th>
            //            <th>Category</th>
            //            <th>Cost</th>
            //            <th>Description</th>
            //            <th>Available</th>
            //        </tr>
            //    </thead>
            //    <tbody>
            //        {products.map(product =>
            //            <tr key={product.pro_id}>
            //                <td>{product.pro_id}</td>
            //                <td>{product.pro_nm}</td>
            //                <td>{product.cat_id}</td>
            //                <td>{product.cost}</td>
            //                <td>{product.description}</td>
            //                <td> {product.a_ia ?
            //                    <input type='checkbox' id='{category.cat_id}' checked />
            //                    : <input type='checkbox' id='{category.cat_id}' />}</td>
            //            </tr>
            //        )}
            //    </tbody>
            //</table>
            //:""}
        }
    };

    render() {
        var categories = this.state.categories;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form className="d-flex flex-column">
                            <select id="selopt" className="form-control" onChange={(e) => this.setState({ opt: e.target.value })}>
                    <option value="1">Category</option>
                    <option value="2">Product</option>
                </select>
                            <input type="number" className="form-control" value={this.state.id}
                                onChange={(e) => this.setState({ id: e.target.value })} required />
                <button className="btn btn-primary" type='button' onClick={(e) => this.getrecord(e)}>Search</button>
                </form>
                    </div>
                </div>
            </div>
            )};
}