import https from "https";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, amount } = req.body;

    // Basic validation
    if (!email || !amount) {
      return res.status(400).json({ error: "Email and amount are required" });
    }

    const params = JSON.stringify({
      email,
      amount: amount * 100, // amount in kobo
      callback_url: "https://little-lemon-wheat.vercel.app/confirmation", // Replace with your deployed frontend URL
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

    const paystackReq = https.request(options, (paystackRes) => {
      let data = "";

      paystackRes.on("data", (chunk) => {
        data += chunk;
      });

      paystackRes.on("end", () => {
        try {
          const response = JSON.parse(data);
          if (response.status === "success") {
            res.status(200).json({
              accessCode: response.data.access_code,
              authorizationUrl: response.data.authorization_url,
            });
          } else {
            res.status(400).json({ error: "Paystack API response error" });
          }
        } catch (error) {
          res.status(500).json({ error: "Error parsing Paystack response" });
        }
      });
    });

    paystackReq.on("error", (error) => {
      console.error("Paystack request error:", error);
      res.status(500).json({ error: "Error initializing payment" });
    });

    paystackReq.write(params);
    paystackReq.end();
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

// const https = require("https");

// module.exports = (req, res) => {
//   if (req.method === "POST") {
//     const { email, amount } = req.body;

//     // Basic validation
//     if (!email || !amount) {
//       return res.status(400).json({ error: "Email and amount are required" });
//     }

//     const params = JSON.stringify({
//       email,
//       amount: amount * 100, // amount in kobo
//       callback_url: "https://little-lemon-wheat.vercel.app/confirmation", // Replace with your deployed frontend URL
//     });

//     const options = {
//       hostname: "api.paystack.co",
//       port: 443,
//       path: "/transaction/initialize",
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//         "Content-Type": "application/json",
//       },
//     };

//     const paystackReq = https.request(options, (paystackRes) => {
//       let data = "";

//       paystackRes.on("data", (chunk) => {
//         data += chunk;
//       });

//       paystackRes.on("end", () => {
//         try {
//           const response = JSON.parse(data);
//           if (response.status === "success") {
//             res.status(200).json({
//               accessCode: response.data.access_code,
//               authorizationUrl: response.data.authorization_url,
//             });
//           } else {
//             res.status(400).json({ error: "Paystack API response error" });
//           }
//         } catch (error) {
//           res.status(500).json({ error: "Error parsing Paystack response" });
//         }
//       });
//     });

//     paystackReq.on("error", (error) => {
//       console.error("Paystack request error:", error);
//       res.status(500).json({ error: "Error initializing payment" });
//     });

//     paystackReq.write(params);
//     paystackReq.end();
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// };
