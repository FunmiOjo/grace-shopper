import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Review = props => {
  const review = props.review
  return (
    review.user ?
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            {'★'.repeat(review.rating)}
          </Typography>
          <Typography color="textSecondary">
            {review.user.firstName} {review.user.lastName}
          </Typography>
          <Typography>
            {review.comment}
          </Typography>
        </CardContent>
      </Card> : null
  )
}

export default Review
