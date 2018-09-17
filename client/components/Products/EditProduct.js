import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProductForm from './ProductForm'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'

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
    textAlign: 'center'
  }
})

class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: this.props.selectedProduct,
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }
  //   handleChange(event) {
  //     const change = {}
  //     change[event.target.name] = event.target.value
  //     this.setState(change)
  //   }
  //   handleSubmit(event) {
  //     event.preventDefault()
  //     this.props.update(this.state.id, this.state)
  //   }

  componentDidMount() {
    this.props.loadSingleProduct()
  }

  render() {
    const { classes, theme } = this.props
    const product = this.props.selectedProduct
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="secondary"
            fullWidth
          >
            <Tab label="Product Details" />
            <Tab label="Product Image" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            {product && (
              <ProductForm
                product={product}
                update={this.props.updateProduct}
              />
            )}
          </TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
      </div>
      //   <div>
      //     {product && (
      //       <div>
      //         <Typography variant="title">
      //           {this.props.selectedProduct.name}
      //         </Typography>
      //         <FormControl>
      //           <InputLabel htmlFor="productName">Product Name</InputLabel>
      //           <Input
      //             value={product.name}
      //             name="productName"
      //             onChange={this.handleChange}
      //           />
      //         </FormControl>
      //       </div>
      //     )}
      //   </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(EditProduct)
