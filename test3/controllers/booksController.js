const Subscriber  = require("../models/books");

exports.getAllSubscribers = (req, res, next) => {
// base on lecture this throws and error if book cant be found in the database 
// if its found it fetched and stored in subscribers
    Subscriber.find({}, (error, subscribers)=> {
    if (error) next(error);
    req.data = subscribers;
    next();
});

};

exports.fetchbook = (req, res, next) => {
    let Num_bk = req.params.Num_bk;
    if (Num_bk == "1") {
        // looking for the first book with the name below and store it Subscriber if it cant be found throw error
        Subscriber.findOne({ bookName: "The Lincoln Highway: A Novel Kindle Edition" }, (error, Subscriber) => {
        if (error) next(error);
        req.data = Subscriber;
        //tells it what next it should do look for the second book and the same applies
        next();
      });
    } else if (Num_bk == "2") {
      Subscriber.findOne(
        { bookName: "Crying in H Mart: A Memoir Kindle Edition" },
        (error, Subscriber) => {
          if (error) next(error);
          req.data = Subscriber;
          next();
        }
      );
    }
      else if (Num_bk == "3") {
        Subscriber.findOne(
          { bookName: "How the Word Is Passed: A Reckoning with the History of Slavery Across America Kindle Edition" },
          (error, Subscriber) => {
            if (error) next(error);
            req.data = Subscriber;
            next();
          }
        );
    
    } else if (Num_bk == "4") {
      Subscriber.findOne(
        { bookName: "Witchlings Hardcover" },
        (error, Subscriber) => {
          if (error) next(error);
          req.data = Subscriber;
          next();
        }
      );
      
    }
  };
  
exports.getFormpage =(req, res) => {
  res.render("addNewBook");
};

exports.getdeletebk =(req, res) => {
  res.render("DeleteABook");
};
exports.getsubscriber = (req, res) =>{
  res.render("subscribers");
};
exports.saveSubscriber = (req, res) => {
  let newbk = new Subscriber({
bookName: req.body.bookName,
Author: req.body.Author,
Purchaselink: req.body.Purchaselink,
  });
  newbk.save((error, result) => {
    if(error) res.send(error);
    res.render("thanks");
  });
};



