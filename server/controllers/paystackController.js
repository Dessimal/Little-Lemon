const axios = require('axios')


//Initialize a Paystack Transaction

exports.initializeTransaction = async (req, res) => {
    try {
      const { email, amount } = req.body;

      const response = await axios.post(
        "https://api.paystack.co/transaction/initialize",
        {
          email,
          amount: amount * 100,
          callback_url: "http://localhost:5173/confirmation",
        },
        {
          headers: {
            Authorization: `Bearer${process.env.PAYSTACK_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
        }
        );
        res.status(200).json(accesCode: response.data.data.access_code,authorizationUrl:response.data.data.authorization_url,)
    } catch (error) {
        console.error('Error initializing transaction:', error);
        res.status(500).send('Failed to initialize transaction');
    }
}


//Verify a Payment (Webhook)
exports.verifyPayment = (req, res) => {
    try {
        const event = req.body;
        if (event.event === 'charge.success') {
            console.log('Payment successful:', event);

            res.status(200).send('Payment verification successful');
        } else {
            res.status(400).send('Unrecognized event');
        }
      
    } catch (error) {
        console.error('Webbook verificaton failed:', error);

        res.status(500).send('Failed to verify payment')
        
    }
}