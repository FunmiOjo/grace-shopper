import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { searchProducts } from '../store/product'
import ProductGridList from './ProductGridList'
import { InputLabel, Select } from '@material-ui/core'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

class AllProducts extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
      currentCategory: ''
    }
    console.log(this.state.searchInput)
    this.handleKey = this.handleKey.bind(this)
  }
  componentDidMount() {
    this.props.loadAllProducts()
  }

  handleSelect(event) {}

  handleKey(event) {
    if (event.key === 'Enter') {
      this.props.search(this.state.searchInput)
      this.setState({ searchInput: event.target.value })
      event.preventDefault()
    }
  }

  render() {
    // const { classes } = this.props
    const products = this.props.products
    return (
      <div className="container">
        <form autoComplete="off">
          <TextField
            id="searchInput"
            name="searchInput"
            label="search for a product"
            value={this.state.searchInput}
            onChange={evt => {
              this.setState({ searchInput: evt.target.value })
            }}
            onKeyDown={this.handleKey}
            margin="normal"
          />
          <InputLabel htmlFor="category">Category</InputLabel>
          {/* <Select
            value={this.state.currentCategory}
            onChange={this.handleSelect}
            inputProps={{
              [category]
            }} */}
        </form>
        {products && <ProductGridList products={products} />}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: input => dispatch(searchProducts(input))
  }
}

// TextField.propTypes = {
//   classes: PropTypes.object.isRequired
// }

export default withStyles(styles)(
  connect(null, mapDispatchToProps)(AllProducts)
)
