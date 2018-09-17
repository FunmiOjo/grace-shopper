import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import ProductForm from './ProductForm'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import { postProduct } from '../../store/product'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    textAlign: 'left'
  },
  forms: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  }
})

class AddProduct extends Component {
  render() {
    const { classes, theme } = this.props
    console.log(this.state)
    const newProduct = this.props.newProduct
    const handleChange = this.props.handleChange
    return (
      <div className={classes.root}>
        <Typography variant="subtitle">Product Details</Typography>
        <div className={classes.forms}>
          <TextField
            label="Product Name"
            id="name"
            className={classNames(classes.margin, classes.textField)}
            onChange={handleChange('name')}
          />
          <TextField
            label="Price"
            id="price"
            className={classNames(classes.margin, classes.textField)}
            placeholder="0"
            value={newProduct.price}
            onChange={handleChange('price')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input
              multiline={true}
              id="description"
              value={newProduct.description}
              onChange={handleChange('description')}
            />
          </FormControl>
          <TextField
            id="quantity"
            label="Quantity"
            name="quantity"
            onChange={handleChange('quantity')}
            type="number"
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.props.addProduct(newProduct)}
        >
          ADD PRODUCT
        </Button>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AddProduct)
