import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import store from '../store'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import { fetchAllProducts } from '../store/product'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    textAlign: 'center'
  },
  table: {
    minWidth: 700
  },
  productImage: {
    maxWidth: 200
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
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { classes } = this.props
    const products = this.props.products
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.tableRows}>
              <TableCell className={classes.tableCells}>
                Product Image
              </TableCell>
              <TableCell className={classes.tableCells} numeric>
                Name
              </TableCell>
              <TableCell className={classes.tableCells} numeric>
                Price
              </TableCell>
              <TableCell className={classes.tableCells} numeric>
                Description
              </TableCell>
              <TableCell className={classes.tableCells} numeric>
                Quantity
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => {
              return (
                <TableRow key={product.id}>
                  <TableCell component="th" scope="row">
                    <img className={classes.productImage} src={product.image} />
                  </TableCell>
                  <TableCell className={classes.tableCells} numeric>
                    {product.name}
                  </TableCell>
                  <TableCell className={classes.tableCells} numeric>
                    ${product.price}
                  </TableCell>
                  <TableCell className={classes.descriptionCell} numeric>
                    {product.description}
                  </TableCell>
                  <TableCell className={classes.tableCells} numeric>
                    {product.quantity}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained">
                      edit<EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
      //   <div>
      //     {products && (
      //       <List>
      //         {products.map(product => (
      //           <ListItem
      //             button
      //             component={Link}
      //             to={'/products/' + product.id}
      //             key={product.id}
      //           >
      //             <img className={classes.productImage} src={product.image} />
      //             <ListItemText
      //               primary={product.name}
      //               secondary={product.price}
      //             />
      //           </ListItem>
      //         ))}
      //       </List>
      //     )}
      //   </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.allProducts
  }
}

export default withStyles(styles)(connect(mapStateToProps)(ManageProducts))
