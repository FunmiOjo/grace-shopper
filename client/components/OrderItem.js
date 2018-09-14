import React from 'react';
import { formatPrice } from '../helpers'

const OrderItem = (props) => {
  const { image, name, description, quantity } = props.product
  const price = formatPrice(props.product.price)

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
