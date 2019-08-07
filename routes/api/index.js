// Setting dependencies
const router = require("express").Router();
const bookRoutes = require("./book");

// Book route
router.use("/books", bookRoutes);

// Exporting route
module.exports = router; 