import React from 'react';
import data from '../fakeData/data';
import Product from './Product';

const AllProducts = () => {
    return (
        <div>
            {
                data?.products?.map(product => <Product key={product._id} product={product} ></Product>)
            }
        </div>
    );
};

export default AllProducts;