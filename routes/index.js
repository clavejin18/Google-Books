// Setting dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Api routes
router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

// Exporting routes
module.exports = router;