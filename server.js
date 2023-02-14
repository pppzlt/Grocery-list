const exphbs = require("express-handlebars");
const express = require("express");
const routes = require("./controllers");
const session = require("express-session");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

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

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// This makes the express application USE the route content.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(routes);

app.get("/", (req, res) => {
    // console.log('hello msg')
    res.send("Hello World");
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("Lets go MVPS");
    });
});
