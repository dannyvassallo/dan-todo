import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    // Call the parent init function:
    this._super.apply(this, arguments);

    // Set up a credentials object to use in the template. Allows credentials.email and
    // credentials.password to be used in input helpers, e.g.:
    // {{input value=credentials.email}}
    this.set('credentials', {});
  },
  actions: {
    // authenticate() is called when form is submitted
    authenticate: function() {
      // Get credentials object from component. It will be auto-populated with
      // input values from the form:
      var credentials = this.get('credentials');

      // Get the notifier service:
      var notifier = this.get('notifier');

      // Use ES6 arrow function => syntax to avoid having to call .bind(this)
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      var onAuthentication = () => {
        notifier.setMessage("You are signed in.");

        // Show the list index when login is successful:
        this.get('router').transitionTo('list.index');
      };

      function onAuthenticationFailed(/*error*/) {
        notifier.setMessage("Sorry, we failed to sign you in, please try again.");
      }

      // Temporary insecure auth check to help setup the login flow.
      function veryInsecureAuthenticationSucceeds(credentials) {
        return credentials.email === "a@b.c" && credentials.password === "password";
      }

      if (veryInsecureAuthenticationSucceeds(credentials)) {
        onAuthentication();
      } else {
        onAuthenticationFailed();
      }
    }
  }
});
