import DS from 'ember-data';

// Make `client/config/environment.js` config available to adapter:
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',
  host: config.APP.apiHost
});
