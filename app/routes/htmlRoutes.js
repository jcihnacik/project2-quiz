
var path = require("path");


module.exports = function(app) {

    app.get("/survey-intro", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey-intro.html"));
      });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });



};
