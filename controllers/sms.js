const MessagingResponse = require("twilio").twiml.MessagingResponse;
const router = require("express").Router();
const { User, List } = require("../models");
//posts data through text message
router.post("/sms", async (req, res) => {
    console.log("msg received");
    console.log(req.body);
    const twiml = await new MessagingResponse();

<<<<<<< HEAD
  // Access the message body and the number it was sent from.
    console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
    let text_user = req.body.From;
    let text_array = req.body.Body.split(',');
=======
    // Access the message body and the number it was sent from.
    console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
    let text_user = req.body.From;
    let text_array = req.body.Body.split(",").map((each) => each.trim());
>>>>>>> e1894fd4f06648ab8bd522dd2b3d7d99f57a0caf
    let newItem = {
        item: text_array[0],
        quantity: text_array[1],
        frequency: 1, //default to be weekly
        category: "grocery", //default
        comment: text_array[2],
<<<<<<< HEAD
       //needs changed
       //list_id: itemSel.value,
        list_id: 1,//default
    };
    console.log(newItem);
    let response = await fetch("https://mvp-grocery-list.herokuapp.com/innerlist", {
=======
        //needs changed
        //list_id: itemSel.value,
        list_id: 1, //default
    };
    console.log(newItem);
    let response = await fetch("/innerlist", {
>>>>>>> e1894fd4f06648ab8bd522dd2b3d7d99f57a0caf
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
    });

<<<<<<< HEAD

    await twiml.message("Text received! The MVP team reminds you of smiling!");

    await res.writeHead(200, { "Content-Type": "text/xml" });
=======
    await twiml.message("Text received! The MVP team reminds you of smiling!");

    res.writeHead(200, { "Content-Type": "text/xml" });
>>>>>>> e1894fd4f06648ab8bd522dd2b3d7d99f57a0caf
    res.end(twiml.toString());
});

module.exports = router;
