import DS from 'ember-data';
import Model from 'ember-data/model';

const {
  attr
} = DS;

export default Model.extend({
  title: attr('string'),
  body: attr('string')
});
