import Ember from 'ember';

export default function() {
  const Light = Ember.Object.extend({
    // init() {
    //   alert("The isON property is defaulted to " + this.get("isOn"));
    // },
    isOn: false,
    color: 'yellow',
    age: null,
    description: Ember.computed('isOn', 'color', function() {
      return `The ${this.get('color')} light is set to ${this.get('isOn')}`;
    }),
    fullDescription: Ember.computed('description', 'age', function() {
      return this.get('description') + 'and the age is ' + this.get('age');
    }),
    aliasDescription: Ember.computed.alias('fullDescription')
  });

    // const bulb = Light.create({age: 22});
    // bulb.get('aliasDescription');// The yellow light is set to false
    // bulb.set('isOn', true);
    // bulb.get('description');// The yellow light is set to true
  // Light.reopen({
  //   color: 'yellow'
  //   });
  // Light.reopenClass({
  //   wattage: 80
  //   });
}
