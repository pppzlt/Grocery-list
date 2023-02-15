// imports express, handlebars, controllers files, and session
const exphbs = require("express-handlebars");
const express = require("express");
const routes = require("./controllers");
const session = require("express-session");
// importing in sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// setting up express to use and the server port
const app = express();
const PORT = process.env.PORT || 3001;
// setting up handlebars to use
const hbs = exphbs.create({});
// setting up the session
const sess = {
    secret: "Super secret secret",
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));
// starting up handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// This makes the express application USE the route content.
// setting up the parsing functions, the public folder, and routes to use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(routes);
// default route for controllers
app.get("/", (req, res) => {
    res.send("Hello World");
});
// connecting to sequelize and the port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("Lets go MVPS");
    });
});
