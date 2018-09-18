import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryGridList from './CategoryGridList'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'
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
  },
  heading: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  caption: {
    textAlign: 'left',
    width: 475,
    padding: 20,
    margin: 'auto'
  },
  divider: {
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  titleText: {
    color: '#000',
    fontWeight: 'bolder'
  }
})

class AllCategories extends Component {
  componentDidMount() {
    this.props.loadAllCategories()
  }

  render() {
    const { classes } = this.props
    const roomCategories = this.props.categories.filter(
      category => category.kind === 'room'
    )
    return (
      <div className="container">
        {roomCategories && (
          <div>
            <Grid container spacing={24}>
              <Grid className={classes.heading} item xs={12}>
                <Typography className={classes.titleText} variant="display2">
                  Rooms
                </Typography>
                <div className={classes.caption}>
                  <Typography variant="body2">
                    Looking for some furniture inspiration? Find everything for
                    your home under one roof at IKEA, including bedroom, living
                    room, kitchen, dining room furniture and much more. From
                    bedroom ideas to living room solutions, we have functional,
                    well-designed furniture to transform any space into the room
                    you’ve always dreamed of.
                  </Typography>
                  <hr className={classes.divider} />
                </div>
              </Grid>
              <Grid item xs={12}>
                <CategoryGridList categories={roomCategories} />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(AllCategories)
