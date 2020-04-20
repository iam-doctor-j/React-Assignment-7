import React from 'react';
import Product from './Product';

export default class ProductsList extends React.Component {
    
    render() {
        // let headings = this.props.data && Object.keys(this.props.data[0]);

        // let infoItems = headings && headings.map((item) => {
        //     return(
        //         <th key={item}>
        //             { item === 'id' ? 'ID' : item === 'productName' ? 'Product Name' : item }
        //         </th>
        //     );
        // });
        let infoItems = 
            <>
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </>
        

        let listItems = this.props.data && this.props.data.map((item, i) => {
            return(
                <Product key={i} id={item.id} name={item.productName} quantity={item.Quantity} price={item.Price} />
            );
        });

        console.log(this.props);
        return(
            <table border="1">
                <thead>
                    <tr key="head">
                        { infoItems }
                    </tr>
                </thead>
                <tbody>
                    { listItems }
                </tbody>
            </table>
        );
    }
}