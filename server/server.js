const express = require("express");
const paystackRoutes = require("./routes/paystackRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Base route for Paystack-related endpoints
app.use("api/paystack", paystackRoutes);

//Webhook route
app.post("/webhook", (req, res) => {
  try {
    const event = req.body;
    if (event.event === "charge.success") {
      console.log("Webhook received for successful payment:", event);
      res.status(200).send("Webhook received successfully");
    } else {
      res.status(400).send("unrecognized event");
    }
  } catch (error) {
    console.error("Error with Webhook handling:", error);
    res.status(500).send("Webhook processing failed");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});
