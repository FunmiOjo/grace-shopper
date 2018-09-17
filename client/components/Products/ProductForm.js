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
import Dropzone from 'react-dropzone'

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    textAlign: 'left'
  },
  forms: {
    display: 'flex',
    flexWrap: 'wrap'
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
    flexBasis: 50,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  imageUploader: {
    border: 1,
    minHeight: 30,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
})

class AddProduct extends Component {
  render() {
    const { classes } = this.props
    const product = this.props.product
    const handleChange = this.props.handleChange
    const categories = this.props.categories
    const productAction = this.props.productAction
    const buttonName = this.props.buttonName
    console.log(product)
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
                label="Quantity"
                name="quantity"
                className={classNames(classes.margin, classes.textField)}
                value={product.quantity}
                onChange={handleChange('quantity')}
                type="number"
                InputLabelProps={{ shrink: true }}
                margin="normal"
              />
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Input
                  multiline={true}
                  id="description"
                  className={classNames(classes.margin, classes.textField)}
                  value={product.description}
                  onChange={handleChange('description')}
                />
              </FormControl>
            </Grid>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="stretch"
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Categories</FormLabel>
                <FormGroup>
                  {categories.map(category => (
                    <FormControlLabel
                      key={category.id}
                      control={
                        <Checkbox
                          onChange={handleChange(category.name)}
                          value={`${category.id}`}
                        />
                      }
                      label={category.name}
                    />
                  ))}
                </FormGroup>
              </FormControl>
              <div>
                <InputLabel htmlFor="images">Product Images</InputLabel>
                <Dropzone className={classes.imageUploader}>
                  <Typography variant="body2">
                    Drop files or click here to upload
                  </Typography>
                </Dropzone>
              </div>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => productAction(product)}
          >
            {buttonName}
          </Button>
        </div>
      )
    )
  }
}

export default withStyles(styles, { withTheme: true })(AddProduct)
