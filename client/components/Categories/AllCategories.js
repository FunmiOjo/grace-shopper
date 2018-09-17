import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryGridList from './CategoryGridList'
import { withStyles } from '@material-ui/core/styles'

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

class AllCategories extends Component {
  componentDidMount() {
    this.props.loadAllCategories()
  }

  render() {
    const categories = this.props.categories
    return (
      <div className="container">
        {categories && (
          <div>
            <CategoryGridList categories={categories} />
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(AllCategories)
