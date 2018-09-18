import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  imageTile: {
    background: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
    fontWeight: 'bolder',
    fontSize: '4em',
    textAlign: 'center',
    lineHeight: 100,
    color: '#fff'
  }
})

class ProductGridList extends Component {
  render() {
    const { classes } = this.props
    const categories = this.props.categories

    return (
      <div>
        <GridList cellHeight={500}>
          {categories.map(category => (
            <GridListTile key={category.id}>
              <img src={category.image} alt={category.name} />
              <Link to={`category/${category.id}`}>
                <StyledGridListTileBar
                  className={classes.imageTile}
                  title={category.name}
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

const StyledGridListTileBar = withStyles({
  title: {
    fontSize: '4rem'
  }
})(GridListTileBar)

export default withStyles(styles)(ProductGridList)
