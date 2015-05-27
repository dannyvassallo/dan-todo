import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  // Configure 'user.new' route to serve it at URL path ending '/register':
  this.route('user.new', { path: '/register' });
});
