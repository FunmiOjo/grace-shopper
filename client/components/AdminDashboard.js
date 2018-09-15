import React, { Component } from 'react'
import compose from 'recompose/compose'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import ManageProducts from './ManageProducts'
import FaceIcon from '@material-ui/icons/Face'
import WeekendIcon from '@material-ui/icons/Weekend'
import ReceiptIcon from '@material-ui/icons/Receipt'
import Collapse from '@material-ui/core/Collapse'
import ListIcon from '@material-ui/icons/List'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  logoutButton: {
    color: '#d33300'
  }
})

class AdminDashboard extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button component={Link} to="/users">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <WeekendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Products" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="/manageproducts"
              >
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText inset primary="Manage Products" />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <ListItem button component={Link} to="/orders">
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <Divider />
        <List component="nav">
          <ListItem
            className={classes.logoutButton}
            button
            onClick={this.props.handleClick}
          >
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default withStyles(styles)(connect(null, mapDispatch)(AdminDashboard))
