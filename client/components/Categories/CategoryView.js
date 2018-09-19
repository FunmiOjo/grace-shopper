import React from 'react'
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

const CategoryView = props => {
  const { classes } = props
  const categoryData = props.categoryData // products already filtered by category
  return (
    <div className="container">
      {categoryData && (
        <div>
          <Grid container spacing={24}>
            <Grid className={classes.heading} item xs={12}>
              <Typography className={classes.titleText} variant="display2">
                {props.pageTitle}
              </Typography>
              <div className={classes.caption}>
                <Typography variant="body2">{props.pageDescription}</Typography>
                <hr className={classes.divider} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <CategoryGridList categories={categoryData} />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(CategoryView)
