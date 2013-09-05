// Enable cross site scripting
jQuery.support.cors = true;

// Disable ajax cache
jQuery.ajaxSetup({ cache: false });

// Add support of MongoDB Extended JSON
_.extend(Backbone.Model.prototype, Backbone.MongoModel.mixin);

// Add REST service URL
var appConfig = {
  baseURL: 'https://api.mongolab.com/api/1/databases/batigoal/collections/',
  addURL: '?apiKey=tvrt4gBlT0HFJwuMpLAnZBDqmR9ATrFJ'
}
