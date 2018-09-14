import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import TextField from '@material-ui/core/TextField'

export default class ProductGridList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: this.props.products,
      searchInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let updatedProductGrid = this.props.products.filter(product =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    this.setState({
      products: updatedProductGrid,
      searchInput: event.target.value
    })
    console.log(updatedProductGrid)
  }

  render() {
    const products = this.state.products
    return (
      <div>
        <form autoComplete="off">
          <TextField
            id="searchInput"
            name="searchInput"
            label="search for a product"
            value={this.state.searchInput}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
            margin="normal"
          />
        </form>
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
      </div>
    )
  }
}
