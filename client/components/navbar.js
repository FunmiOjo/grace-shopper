import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
})

// const Navbar = props => {
//   const { classes } = props
class Navbar extends Component {
  render() {
    const { classes } = this.props
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Grace Shopper
          </Typography>
          {this.props.isLoggedIn ? (
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button className={classes.productsButton} color="inherit">
                <Link to="/products">Products</Link>
              </Button>
              <Button color="inherit">
                <a href="#" onClick={this.props.handleClick}>
                  Logout
                </a>
              </Button>
              <IconButton color="inherit" component={Link} to="/home">
                <AccountCircle />
              </IconButton>
            </Grid>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Button color="inherit">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button color="inherit">
                <Link to="/products">Products</Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.currentUser.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
