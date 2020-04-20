import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';
import toJson from 'enzyme-to-json';
import Product from './Product';

describe('ProductsList', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            data: [

                {
                
                    "id": 1,
                    
                    "productName": "Product_1",
                    
                    "Quantity": 1,
                    
                    "Price": 10
                
                },
                
                {
                
                    "id": 2,
                    
                    "productName": "Product_2",
                    
                    "Quantity": 2,
                    
                    "Price": 20
                
                }
                
            ]
        }
        wrapper = shallow(<ProductsList {...props}/>);
    });

    afterEach(() => {
        wrapper.unmount(<ProductsList/>);
    })

    it('renders second column heading correctly', () => {
        // console.log(toJson(wrapper.find('th')));
        expect(wrapper.find('th').at(1).render().text()).toEqual('Product Name');
    });

    it('renders fourth column heading correctly', () => {
        // console.log(toJson(wrapper.find('th')));
        expect(wrapper.find('th').at(3).render().text()).toEqual('Price');
    });
 
    it('passes 2nd product\'s name is passed to 2nd Product as props', () => {
        let secProduct = wrapper.instance().props
        // console.log(secProduct);
        expect(wrapper.find(Product).at(1).props().name).toEqual(secProduct.data[1].productName);
    })

    it('passes 2nd product\'s price is passed to 2nd Product as props', () => {
        let secProduct = wrapper.instance().props
        // console.log(secProduct);
        expect(wrapper.find(Product).at(1).props().price).toEqual(secProduct.data[1].Price);
    });
});

describe('ProductsList', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            data: null
        }
        wrapper = shallow(<ProductsList {...props}/>);
    });

    afterEach(() => {
        wrapper.unmount(<ProductsList/>);
    });

    it('should not crash', () => {
        expect(wrapper.find(Product).length).toBe(0);
    });
});