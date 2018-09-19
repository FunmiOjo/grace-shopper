import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Review = props => {
  const reviews = props.reviews
  return (
    reviews ?
    reviews.map(review => (
      review.user ?
      <Card key={review.id}>
        <CardContent>
          <Typography variant="headline" component="h3">
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
    ))
    : null
  )
}

export default Review
