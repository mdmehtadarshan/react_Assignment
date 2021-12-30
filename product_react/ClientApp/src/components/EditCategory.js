import React, { useEffect, useState } from 'react';
//import { TextField } from '@mui/material';

const saveChanges = (category) => {
    //api Call
    console.log('in Save API ');
    console.log(category);
}
const EditCategory = (props) => {
    const [category, setCategory] = useState(props.category);
    useEffect(() => { setCategory(props.category) }, [props]);
    //setCategory(props.category);
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
                                value={category.cat_nm}
                                onChange={(e) => {
                                    //const cat = category;
                                    //cat.cat_nm = e.target.value;
                                    //setCategory(cat);
                                }}
                                required
                            />

                            {/*<TextField value={category.cat_nm} />*/}
                        </label>
                        <label htmlFor="a_ia">
                            Available:
                            <input
                                name="a_ia"
                                id="a_ia"
                                type="checkbox"
                                className="form-control"
                                value={category.a_ia}
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
                                value={category.description}
                                onChange={(e) => this.setState({ catDesc: e.target.value })}
                                required
                            />
                        </label>
                        <button className="btn btn-primary" type='button' onClick={(e) => saveChanges(category)}>Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default EditCategory;