import React from 'react';
import EditCategory from './EditCategory';

export class EDProCat extends React.Component {
    static displayName = EDProCat.name;

    constructor(props) {
        super(props);
        this.state = { categories: [], loading: true, selectedCategory: null };
    }

    componentDidMount() {
        this.populateCategories();
    }

    deleteCategory(CatId) {
        const categories = this.state.categories;
        const apiUrl = 'http://localhost:62330/api/Pro_category/' + CatId;
        const response = fetch(apiUrl, { method: 'DELETE' })
            .then(async response => {
                console.log(response);
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = response.status;
                    return Promise.reject(error);
                }
                const filteredCats = categories.filter(category => category.cat_id !== CatId);
                console.log(filteredCats);
                this.setState({
                    categories: filteredCats
                });
                alert('Delete successful');
            })
            .catch(error => {
                alert('There was an error!');
                console.error('There was an error!', error);
            });

    }

    editCategory(CatId) {
        //here
    }

    render() {
        var categories = this.state.categories;
        return (
            <div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category Name</th>
                            <th>Available</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category =>
                            <tr key={category.cat_id}>
                                <td>{category.cat_id}</td>
                                <td>{category.cat_nm}</td>
                                {category.a_ia ?
                                    <td><input type='checkbox' id='{category.cat_id}' checked /></td>
                                    : <td><input type='checkbox' id='{category.cat_id}' /></td>}
                                <td>{category.description}</td>
                                <td><button type='button' onClick={() => this.deleteCategory(category.cat_id)} >delete</button></td>
                                <td><button type='button' onClick={() => this.setState({ selectedCategory: category })} >edit</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {this.state.selectedCategory ?
                    <EditCategory category={this.state.selectedCategory} />
                    : null}
            </div>
        );
    };

    async populateCategories() {

        const response = await fetch('http://localhost:62330/api/Pro_category');
        const data = await response.json();
        this.setState({ categories: data, loading: false });
    }

}