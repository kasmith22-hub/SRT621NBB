const mongoose = require("mongoose");
const Subscriber = require("./models/books");
const subscriberController = require("./controllers/booksController");
const express = require("express"),
app = express();
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());
require("dotenv").config();
const uri = process.env.ATLAS_URI;
console.log(uri);

mongoose.connect(uri, {useUnifiedTopology: true});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using mongoose");
});
//endpoint 1
app.get( "/home", subscriberController.getAllSubscribers, (req, res, next) => {
  
  console.log(req.data);

  //the subscribers is in the database which pulls the data 
  res.render("home", {subscribers: req.data});
  }
);
//endpoint 2
// the Num_bk will be storing the book data from my bookcontroller fetching the data and storing it in this for display
app.get("/books/:Num_bk", subscriberController.fetchbook, (req, res, next) => {
  let Num_bk = req.params.Num_bk;
  console.log(req.data);
  res.render(Num_bk, { subscribers: req.data });
});
app.get( "/subscribers", subscriberController.getAllSubscribers, (req, res, next) => {
  console.log(req.data);

  //the subscribers is in the database which pulls the data 
  res.render("subscribers", {subscribers: req.data});
  }
);

app.get( "/DeleteABook", subscriberController.getAllSubscribers, (req, res, next) => {
  console.log(req.data);

  //the subscribers is in the database which pulls the data 
  res.render("DeleteABook", {subscribers: req.data});
  }
);

app.get("/addNewBook", subscriberController.getFormpage);
app.get("/DeleteABook", subscriberController.getdeletebk);


app.get("/subscribers", subscriberController.getsubscriber);
app.post("/subscribe", subscriberController.saveSubscriber);


app.listen(app.get("port"),()=>{
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});


