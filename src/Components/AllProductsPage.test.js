import React from 'react';
import AllProductsPage from './AllProductsPage';
import { mount, shallow } from 'enzyme';
import ProductsList from './ProductsList';

describe('AllProductsPage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AllProductsPage/>);
    });

    afterEach(() => {
        wrapper.unmount(<AllProductsPage/>);
    });

    test('Snapshot renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('AllProductsPage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AllProductsPage/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders heading name correctly', () => {
        expect(wrapper.find('h1').render().text()).toEqual('Products List');
    });

    it('renders one ProductsList', () => {
        expect(wrapper.find(ProductsList).length).toBe(1);
    })
});