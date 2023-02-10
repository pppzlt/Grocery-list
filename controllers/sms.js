const MessagingResponse = require("twilio").twiml.MessagingResponse;
const router = require("express").Router();
const { User, List } = require("../models");

router.post("/sms", async (req, res) => {
  console.log("msg received");
  console.log(req.body);
  const twiml = await new MessagingResponse();

  // Access the message body and the number it was sent from.
  console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);

  await twiml.message("The MVP team reminds you of smiling!");

  await res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

module.exports = router;
