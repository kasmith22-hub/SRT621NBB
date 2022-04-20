const mongoose = require("mongoose");
const Assignment = require("./models/newbook");
const methodOverride = require("method-override");
const newBKController = require("./controllers/newBKController");
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

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);


require("dotenv").config();
const uri = process.env.ATLAS_URI;
console.log(uri);

mongoose.connect(uri, {useUnifiedTopology: true});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using mongoose");
});

app.get("/books", newBKController.index);
app.get("/books/addNewBooks", newBKController.new);
app.get("/books/DeleteABook", newBKController.deletebk);
app.post("/books/create", newBKController.create, newBKController.redirectView);
app.get("/books/:id", newBKController.show, newBKController.showView);
app.delete("/books/:id/delete", newBKController.delete, newBKController.redirectView);







app.listen(app.get("port"),()=>{
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});


