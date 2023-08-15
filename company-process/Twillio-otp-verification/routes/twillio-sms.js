const express = require("express");

const { sendOTP, verifyOTP,GetData } = require("../controller/twillio-sms");
const router = express.Router();

router.route("/send-otp").post(sendOTP);
router.route("/verify-otp").post(verifyOTP);
router.route("/").get(GetData);
module.exports = router;
