const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY || require('../../secrets').STRIPE_SECRET_TEST_KEY)

const main = async () => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com'
  })
  console.log(charge)
}

main()

