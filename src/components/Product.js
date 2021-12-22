import React from 'react';

const Product = ({ product }) => {
    const { name, image, rating, numReviews } = product;
    return (
        <div>
            <h1>this is product name {name}</h1>
        </div>
    );
};

export default Product;