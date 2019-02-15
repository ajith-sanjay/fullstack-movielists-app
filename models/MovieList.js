const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const MovieSchema = new Schema({
   'page': {
    'title': { type: String },
    'total-content-items' :  { type: String },
    'page-num-requested' :  { type: String },
    'page-size-requested' :  { type: String },
    'page-size-returned' :  { type: String },
    'content-items': {
      'content': [
        {
          'name':  { type: String },
          'poster-image':  { type: String }
        }
      ]
    }
  }
});

// This creates our model from the above schema, using Mongoose's model method
var MovieList = mongoose.model('movielist', MovieSchema);

// Export the Tweet model
module.exports = MovieList;