const ListBooks = require("../models/newbook");

module.exports = {
index: (req, res) => {
 ListBooks.find({})
.then(books =>{
    res.render("index",{
        books: books
    })
})
.catch(error => {
    console.log(`Error fetching books:${error.message}`)
    res.redirect("/");
   });
      
  },
  index2: (req, res) => {
    ListBooks.find({})
   .then(books =>{
       res.render("home",{
           books: books
       })
   })
   .catch(error => {
       console.log(`Error fetching books:${error.message}`)
       res.redirect("/");
      });
    },
show: (req, res, next) => {
        let bookID = req.params.id;
        ListBooks.findById(bookID)
        .then(newbook => {
            res.locals.newbook = newbook;
            next();
        })
        .catch(error =>{
            console.log(`Error fetching book ID : ${error.message}`);
            next(error);
        });
    
   },


new: (req, res) => {
         res.render("addNewBooks");
         
   },

  
deletebk: (req, res) => {
        ListBooks.find({})
       .then(books =>{
           res.render("DeleteABook",{
               books: books
           })
       })
       .catch(error => {
           console.log(`Error fetching deleted books:${error.message}`)
           res.redirect("/");
       });
   },
create: (req, res, next) =>{
         let bookParam ={
             bookName: req.body.bookName,
             Author: req.body.Author,
             Purchaselink: req.body.Purchaselink
         };
         // insert it in the database coming from the form
         ListBooks.create(bookParam)
         .then(newbook => {
             res.locals.redirect = "/home";
             res.locals.newbook = newbook;
             next();
         })
         .catch(error => {
             console.log(`Error saving book:${error.message}`);
             next(error);
         });
   },
redirectView : (req, res, next) => {
            let redirectPath = res.locals.redirect;
            if (redirectPath) res.redirect(redirectPath);
            else next();
   },

showView: (req, res) => {
            res.render("show");
    },      
delete : (req, res, next) => {
             let bookID = req.params.id;
             ListBooks.findByIdAndRemove(bookID)
             .then(()=>{
                 res.locals.redirect = "/home";
                 next();
             })
             .catch(error => {
                 console.log(`Error deleting book by ID:${error.message}`);
             });

         }
     };
