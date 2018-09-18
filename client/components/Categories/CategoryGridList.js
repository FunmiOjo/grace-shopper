import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'

export default class ProductGridList extends Component {
  render() {
    const categories = this.props.categories
    return (
      <div>
        <GridList cellHeight={500}>
          {categories.map(category => (
            <GridListTile key={category.id}>
              <img src={category.image} alt={category.name} />
              <Link to={`category/${category.id}`}>
                <GridListTileBar title={category.name} />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}
