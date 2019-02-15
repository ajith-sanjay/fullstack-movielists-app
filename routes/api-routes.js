const fs = require('fs');
const MovieList = require('../models/MovieList');

module.exports = function (app) {

  app.post('/api/pages', function (req, res) {
    MovieList.find({"page.page-num-requested" : req.body.pageNum.toString() })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}