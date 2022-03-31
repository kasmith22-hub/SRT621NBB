const express = require("express"),
  app = express(),
  homeController = require("./controllers/controller");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});
app.get("/home", (req, res) => {
    res.render("home");
  });
app.get("/images/:images", homeController.paramsAImage);
app.listen(app.get("port"), () => {
  console.log(`Server is listening on port : ${app.get("port")}`);
});