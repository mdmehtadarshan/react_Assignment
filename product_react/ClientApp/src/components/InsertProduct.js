import React from 'react';

export class InsertProduct extends React.Component {
    static displayName = InsertProduct.name;

    constructor(props) {
        super(props);
        this.state = { proName: '', catId: 0, cost: 0, proIsActive: true, proDesc: '', loading: true, categories: [] };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(changeObject) {
        this.setState(...changeObject)
    }

    async componentDidMount() {
        //here code for fetch cats.
        const response = await fetch('http://localhost:62330/api/Pro_category');
        const data = await response.json();
        this.setState({ categories: data });
    }

    create(e) {
        // add entity - POST
        const postData = {
            name: this.state.proName,
            cat: this.state.catId,
            isactive: this.state.proIsActive,
            desc: this.state.proDesc,
            cost: this.state.cost
        };
        const headers = {
            "accept": "application/json",
            "content-type": "application/json"
        };
        const dataTosend = JSON.stringify(postData);
        console.log(dataTosend);
        const uri = 'http://localhost:62330/api/Products';
        fetch(uri, { method: 'POST', body: dataTosend, headers: headers }).catch(e => console.log(e));
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form className="d-flex flex-column">
                            <legend className="text-center">Insert Category</legend>
                            <label htmlFor="pro_nm">
                                Product Name:
                                <input
                                    name="pro_nm"
                                    id="pro_nm"
                                    type="text"
                                    className="form-control"
                                    value={this.state.proName}
                                    onChange={(e) => this.setState({ proName: e.target.value })}
                                    required
                                />
                            </label>
                            <label htmlFor="cat_id">
                                Category:
                                <select value={this.state.cat_id} className="form-control">
                                {this.state.categories.length > 0 ? this.state.categories.map(cat =>
                                    <option value={cat.cat_id}>{cat.cat_nm}</option>) : null}
                                </select>
                            </label>
                            <label htmlFor="cost">
                                Cost:
                                <input
                                    name="cost"
                                    id="cost"
                                    type="number"
                                    className="form-control"
                                    value={this.state.cost}
                                    onChange={(e) => this.setState({ cost: e.target.value })}
                                    required
                                />
                            </label>
                            <label htmlFor="description">
                                Description:
                                <input
                                    name="description"
                                    id="description"
                                    type="text"
                                    className="form-control"
                                    value={this.state.proDesc}
                                    onChange={(e) => this.setState({ proDesc: e.target.value })}
                                    required
                                />
                            </label>
                            <label htmlFor="a_ia">
                                Available:
                                <input
                                    name="a_ia"
                                    id="a_ia"
                                    type="checkbox"
                                    className="form-control"
                                    value={this.state.proIsActive}
                                    onChange={(e) => this.setState({ proIsActive: e.target.value })}
                                />
                            </label>
                            <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>Insert</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}