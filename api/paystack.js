import https from "https"; // Use 'import' for ES modules

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, amount } = req.body;

    // Basic validation
    if (!email || !amount || typeof amount !== "number") {
      return res.status(400).json({
        error: "Email and amount are required, and amount must be a number",
      });
    }

    // Convert amount to kobo
    const amountInKobo = amount * 100;

    // Parameters for Paystack API
    const params = JSON.stringify({
      email,
      amount: amountInKobo.toString(), // Paystack requires amount as string
      callback_url: "https://little-lemon-wheat.vercel.app/confirmation", // Replace with your callback URL
    });

    // Options for HTTPS request
    const options = {
      hostname: "api.paystack.co",
      port: 443,
      path: "/transaction/initialize",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, // Ensure correct environment variable
        "Content-Type": "application/json",
      },
    };

    // Initialize request
    const req = https.request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const responseData = JSON.parse(data);
          if (responseData.status === "success") {
            res.status(200).json({
              accessCode: responseData.data.access_code,
              authorizationUrl: responseData.data.authorization_url,
            });
          } else {
            res.status(400).json({
              error: "Paystack API response error",
              details: responseData,
            });
          }
        } catch (error) {
          res.status(500).json({ error: "Error parsing Paystack response" });
        }
      });
    });

    req.on("error", (error) => {
      console.error("Paystack request error:", error);
      res.status(500).json({ error: "Error initializing payment" });
    });

    req.write(params);
    req.end();
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
