const https = require("https");

module.exports = (req, res) => {
  if (req.method === "POST") {
    const { email, amount } = req.body;

    const params = JSON.stringify({
      email,
      amount: amount * 100, // convert amount to kobo
      callback_url: "https://little-lemon-wheat.vercel.app/confirmation", // Update with your deployed frontend URL
    });

    const options = {
      hostname: "api.paystack.co",
      port: 443,
      path: "/transaction/initialize",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    };

    const paystackReq = https
      .request(options, (paystackRes) => {
        let data = "";

        paystackRes.on("data", (chunk) => {
          data += chunk;
        });

        paystackRes.on("end", () => {
          const response = JSON.parse(data);
          res.status(200).json({
            accessCode: response.data.access_code,
            authorizationUrl: response.data.authorization_url,
          });
        });
      })
      .on("error", (error) => {
        console.error(error);
        res.status(500).send("Error initializing payment");
      });

    paystackReq.write(params);
    paystackReq.end();
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
