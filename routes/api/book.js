// Setting Dependencies
const router = require("express").Router();
const booksController = require("../../controller/controllers");

//  .get finds all books and .post posts books 
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// delete books by ID.
router.route("/:id")
.delete(booksController.remove)

// Exporting route
module.exports = router;
