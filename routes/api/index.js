// Setting dependencies
const router = require("express").Router();
const bookRoutes = require("./books");

// Book route
router.use("/books", bookRoutes);

// Exporting route
module.exports = router; 