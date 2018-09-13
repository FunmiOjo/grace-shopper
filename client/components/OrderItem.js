import React from 'react';
import { formatPrice } from '../helpers'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    size: 2
  },
  image: {
    width: 200,
    height: 200
  }
})

const OrderItem = (props) => {
  const { image, name, description, quantity } = props.product
  const price = formatPrice(props.product.price)
  const { classes } = props
  return (
    <div>
        <Grid container spacing={16}>
          <Grid item>
            <Input defaultValue={quantity} size={1} className={classes.root}/>
          </Grid>
          <Grid item>
            <ButtonBase>
              <img src={image} alt={name} className={classes.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs>
              <Typography gutterBottom variant="subheading">
                {name}
              </Typography>
              <Typography gutterBottom variant="headline">
                {price}
              </Typography>
              <Typography gutterBottom>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
    </div>
  )
}

export default withStyles(styles)(OrderItem);
