const express = require("express");
const {
  initializeTransaction,
  verifyPayment,
} = require("../controllers/paystackController");
const router = express.Router();

//specific routes for paystack functionality

router.post("/initialize", initializeTransaction);

router.post("/webhook", verifyPayment);

module.exports = router;
