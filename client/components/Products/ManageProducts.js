import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import store from '../../store'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import ProductsTable from './ProductsTable'
import { fetchAllProducts } from '../../store/product'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    textAlign: 'center'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  table: {
    minWidth: 700
  },
  productImage: {
    maxWidth: 100
  },
  tableCells: {
    textAlign: 'center'
  },
  descriptionCell: {
    textAlign: 'left'
  },
  tableHeader: {
    color: '#000',
    backgroundColor: '#fff'
  }
})

class ManageProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.products,
      open: false,
      vertical: 'top',
      horizontal: 'center'
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.products !== prevProps.allProducts) {
      console.log('hey!!')
    }
  }

  render() {
    const { classes } = this.props
    const products = this.props.products
    return (
      <div>
        <ProductsTable productData={products} classes={classes} />
      </div>

      // <div className={classes.root}>
      //   <Table className={classes.table}>
      //     <TableHead>
      //       <TableRow>
      //         <TableCell>
      //           <Button
      //             width={200}
      //             className={classes.buttons}
      //             component={Link}
      //             to="/manageproducts/products/add"
      //           >
      //             Add product
      //           </Button>
      //         </TableCell>
      //       </TableRow>
      //       <TableRow className={classes.tableRows}>
      //         <TableCell className={classes.tableCells}>
      //           Product Image
      //         </TableCell>
      //         <TableCell className={classes.tableCells} numeric>
      //           Category
      //         </TableCell>
      //         <TableCell className={classes.tableCells} numeric>
      //           Name
      //         </TableCell>
      //         <TableCell className={classes.tableCells} numeric>
      //           Price
      //         </TableCell>
      //         <TableCell className={classes.tableCells} numeric>
      //           Description
      //         </TableCell>
      //         <TableCell className={classes.tableCells} numeric>
      //           Quantity
      //         </TableCell>
      //         <TableCell />
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //       {products.map(product => {
      //         return (
      //           <TableRow key={product.id}>
      //             <TableCell component="th" scope="row">
      //               <img className={classes.productImage} src={product.image} />
      //             </TableCell>
      //             <TableCell className={classes.tableCells} numeric>
      //               {product.categories && (
      //                 <ul>
      //                   {product.categories.map(category => (
      //                     <li key={category.id}>{category.name}</li>
      //                   ))}
      //                 </ul>
      //               )}
      //             </TableCell>
      //             <TableCell className={classes.tableCells} numeric>
      //               {product.name}
      //             </TableCell>
      //             <TableCell className={classes.tableCells} numeric>
      //               ${product.price}
      //             </TableCell>
      //             <TableCell className={classes.descriptionCell} numeric>
      //               {product.description}
      //             </TableCell>
      //             <TableCell className={classes.tableCells} numeric>
      //               {product.quantity}
      //             </TableCell>
      //             <TableCell>
      //               <Button
      //                 variant="contained"
      //                 component={Link}
      //                 to={{
      //                   pathname: `/manageproducts/edit/product/${product.id}`,
      //                   state: {
      //                     product: product
      //                   }
      //                 }}
      //               >
      //                 edit<EditIcon />
      //               </Button>
      //             </TableCell>
      //           </TableRow>
      //         )
      //       })}
      //     </TableBody>
      //   </Table>
      // </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.allProducts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllProducts: () => dispatch(fetchAllProducts())
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ManageProducts)
)
