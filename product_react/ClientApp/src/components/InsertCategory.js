import { post } from 'jquery';
import React from 'react';

export class InsertCategory extends React.Component {
    static displayName = InsertCategory.name;

    constructor(props) {
        super(props);
        this.state = { catName: '', catIsActive: true, catDesc: '', loading: true };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(changeObject) {
        this.setState(...changeObject)
    }

    create(e) {
        // add entity - POST
        const postData = {
            name: this.state.catName,
            isactive: this.state.catIsActive,
            desc: this.state.catDesc
        };
        const headers = {
            "accept": "application/json",
            "content-type": "application/json"
        };
        const dataTosend = JSON.stringify(postData);
        console.log(dataTosend);
        const uri = 'http://localhost:62330/api/Pro_category';
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
                            <label htmlFor="cat_nm">
                                Category Name:
                                <input
                                    name="cat_nm"
                                    id="cat_nm"
                                    type="text"
                                    className="form-control"
                                    value={this.state.catName}
                                    onChange={(e) => this.setState({ catName: e.target.value })}
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
                                    value={this.state.catIsActive}
                                    onChange={(e) => this.setState({ catIsActive: e.target.value })}
                                />
                            </label>
                            <label htmlFor="description">
                                Description:
                                <input
                                    name="description"
                                    id="description"
                                    type="text"
                                    className="form-control"
                                    value={this.state.catDesc}
                                    onChange={(e) => this.setState({ catDesc: e.target.value })}
                                    required
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