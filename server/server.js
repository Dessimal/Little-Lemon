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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});
