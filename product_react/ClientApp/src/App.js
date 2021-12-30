import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchProCat } from './components/FetchProCat';
import { FetchProduct } from './components/FetchProduct';
import { EDProCat } from './components/EDProCat';
import { EDProduct } from './components/EDProduct';
import { InsertCategory } from './components/InsertCategory';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/fetch-pro-cat' component={FetchProCat} />
                <Route path='/fetch-product' component={FetchProduct} />
                <Route path='/e-d-pro-cat' component={EDProCat} />
                <Route path='/e-d-product' component={EDProduct} />
                <Route path='/insert-category' component={InsertCategory} />
            </Layout>
        );
    }
}
