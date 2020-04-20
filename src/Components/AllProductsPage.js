import React from 'react';
import DataApi from '../Data/DataApi';
import ProductsList from './ProductsList';

export default class AllProductsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: DataApi.getData()
        }
    }

    render() {
        return(
            <div style={{ marginLeft: 10 }}>
                <h1>
                    Products List
                </h1>
                <ProductsList data={ this.state.data } />
            </div>
        );
    }
}