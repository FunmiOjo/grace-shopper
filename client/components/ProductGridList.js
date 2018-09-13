import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'

const ProductGridList = props => {
  const products = props.products
  return (
    <GridList cellHeight={500}>
      <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader component="div">All Products</ListSubheader>
      </GridListTile>
      {products.map(product => (
        <GridListTile key={product.id}>
          <img src={product.image} alt={product.name} />
          <Link to={`products/${product.id}`}>
            <GridListTileBar
              title={product.name}
              subtitle={<span>{product.price}</span>}
            />
          </Link>
        </GridListTile>
      ))}
    </GridList>
  )
}

export default ProductGridList
