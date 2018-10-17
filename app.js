var stripe = require("stripe")("sk_test_qFCjNHoF5GBGCmumuMmLi0vk");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(express.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.get("/", (req, res) => {
  console.log("Fetching Index");
  return res.send("/public/index.html");
});
app.post("/sendpayment", (req, res) => {
  var chargeAmount = "";
  
  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  
  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  const token = request.body.stripeToken; // Using Express

  const charge = stripe.charges.create({
    amount: 999,
    currency: "usd",
    description: "Donation charge",
    statement_descriptor: 'FreeMMA Gym Donation',
    source: token
  });
  console.log(charge);
  return res.sendStatus(200);
});
app.listen(PORT, () => console.log("Example app listening on port 3000!"));
