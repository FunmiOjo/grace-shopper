import React from 'react';

const OrderItem = (props) => {
  const { image, name, price, description, quantity } = props.product

  return (
    <div>
        <p>{quantity}</p>
        <img src={image} />
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
    </div>
  )
}

export default OrderItem;
