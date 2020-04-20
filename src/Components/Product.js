import React from 'react';

export default class Product extends React.Component {
    render() {
        return(
            <tr key={ this.props.id }>
                <td>
                    { this.props.id }
                </td>
                <td>
                    { this.props.name }
                </td>
                <td>
                    { this.props.quantity }
                </td>
                <td>
                    Rs. { this.props.price }
                </td>
            </tr>
        );
    }
}