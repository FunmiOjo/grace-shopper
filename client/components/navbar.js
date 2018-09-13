import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
})

const Navbar = ({ handleClick, isLoggedIn }, props) => {
  const { classes } = props
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Grace Shopper
          </Typography>
          {isLoggedIn ? (
            <div>
              <Button color="inherit">
                <Link to="/home">Home</Link>
              </Button>
              <Button color="inherit">
                <Link to="/users">Users</Link>
              </Button>
              <Button color="inherit">
                <Link to="/products">Products</Link>
              </Button>
              <Button color="inherit">
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </Button>
            </div>
          ) : (
            //   {/* The navbar will show these links after you log in */}
            //   <Link to="/home">Home</Link>
            //   <a href="#" onClick={handleClick}>
            //     Logout
            //   </a>
            // </div>
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
    </div>
  )
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
