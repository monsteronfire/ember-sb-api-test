import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('post');
  },

  //I don't want to keep having to call our model "model"
  //because it is too generic and will get super confusing
  //when we have lots of other types of data
  //so we set the name below:
  setupController(controller, model) {
    //set property on my controller, want to call it 'posts' and bind it to model
    set(controller, 'posts', model);
  }
});
