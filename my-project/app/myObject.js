import Ember from 'ember';

export default function() {
  const Light = Ember.Object.extend({
    init() {
      alert("The isON property is defaulted to " + this.get("isOn"));
    },
    isOn: false
    });
  Light.reopen({
    color: 'yellow'
    });
  Light.reopenClass({
    wattage: 80
    });
}
