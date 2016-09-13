import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //console.log(payload);
    payload = { posts: payload };
    //Because we're overriding this method, we want to make sure we don't completely override it
    //return this._super(..arguments);
    //We can't actually use '..arguments' because arguments would be referrencing the original payload
    //ignoring the payload we overrode
    //Hence, in order to make it work, we have to do it the following way:
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});