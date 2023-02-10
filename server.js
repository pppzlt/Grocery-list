const exphbs = require("express-handlebars");
const express = require ('express');
const routes = require ("./controllers/");
const sequelize = require("./config/connection");
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// This makes the express application USE the route content.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(routes);

app.get('/', (req, res) => {
  console.log('hello msg')
  res.send('Hello World')
})

app.post("/sms", (req, res) => {
  console.log('msg received');
  const twiml = new MessagingResponse();

  // Access the message body and the number it was sent from.
  console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);

  twiml.message("The Robots are coming! Head for the hills!");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('Lets go MVPS');
    });
});



