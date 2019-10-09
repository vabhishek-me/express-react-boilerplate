// setting up esm for import export syntax support
require = require("esm")(module);

module.exports = require("./server/app.js");