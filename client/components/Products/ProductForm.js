import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
  root: {
    width: '50%',
    overflowX: 'auto',
    textAlign: 'left'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  quantityPicker: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100
  },
  descriptionField: {
    height: 300,
    border: 1,
    borderStyle: 'solid'
  },
  chip: {
    margin: theme.spacing.unit
  }
})

class ProductForm extends Component {
  // constructor() {
  //   super()
  //   this.state = {}
  // }

  handleDelete() {
    alert('You clicked the delete icon.') // eslint-disable-line no-alert
  }
  render() {
    const { classes } = this.props
    const product = this.props.product
    const handleChange = this.props.handleChange
    const handleClick = this.props.handleClick
    const categories = this.props.categories
    const productAction = this.props.productAction
    const buttonName = this.props.buttonName
    console.log('inside the form', product)
    return (
      product && (
        <div className={classes.root}>
          <Typography variant="subheading">Product Details</Typography>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <TextField
                label="Product Name"
                id="name"
                className={classNames(classes.margin, classes.textField)}
                value={product.name}
                onChange={handleChange('name')}
              />
              <TextField
                label="Price"
                id="price"
                className={classNames(classes.margin, classes.textField)}
                placeholder="0"
                value={product.price}
                onChange={handleChange('price')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
              />
              <TextField
                id="quantity"
                className={classes.quantityPicker}
                label="Quantity"
                name="quantity"
                required={true}
                value={product.quantity ? product.quantity : ''}
                onChange={handleChange('quantity')}
                type="number"
                inputProps={{ min: 0, max: 1000 }}
                margin="normal"
              />
              <TextField
                id="description"
                className={classNames(classes.margin, classes.textField)}
                label="Product Description"
                name="description"
                required={true}
                value={product.description}
                onChange={handleChange('description')}
                multiline={true}
                variant="filled"
                helperText="Enter a short description of the product or product details"
                rows="4"
              />
            </Grid>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="stretch"
            >
              <div>
                {categories.map(category => (
                  <Chip
                    key={category.id}
                    label={category.name}
                    onDelete={this.handleDelete}
                    className={classes.chip}
                    color="secondary"
                  />
                ))}
              </div>
              <div>
                <InputLabel htmlFor="images">Product Images</InputLabel>
                <TextField
                  label="Image URL"
                  id="image-url"
                  className={classNames(classes.margin, classes.textField)}
                  value={product.image}
                  onChange={handleChange('image')}
                />
              </div>
            </Grid>
          </Grid>
          {this.props.buttonName === 'UPDATE' ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => productAction(product)}
            >
              {buttonName}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleClick()}
            >
              {buttonName}
            </Button>
          )}
        </div>
      )
    )
  }
}

export default withStyles(styles, { withTheme: true })(ProductForm)
