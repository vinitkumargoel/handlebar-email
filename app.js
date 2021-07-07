const Handlebars = require("handlebars");
const fs = require("fs");
const template = Handlebars.compile(fs.readFileSync("./template.html"));

console.log(template)