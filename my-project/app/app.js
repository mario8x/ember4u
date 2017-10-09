import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import myObject from './myObject';
import common from './mixins/common';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);
/*Mixins*/
const obj = Ember.Object.extend(common, {
  objprop: 'This is an Ember Object Property'
})
const object = obj.create();

console.log(object.get('objprop'));
console.log(object.get('property1'));
console.log(object.get('isEditing'));
object.edit();
console.log(object.get('isEditing'));
myObject();

/*Enumerable*/
// forEach
var students = ['Erik', 'Jim', 'Shelly', 'Kate'];
students.forEach(function(item, index) {
  console.log(`Student #${index+1}: ${item} `);
})
//map
var students = ['Erik', 'Jim', 'Shelly', 'Kate'];
const upperCaseStudent = students.map(function(item) {
  return item.toUpperCase();
});
//mapBy
var student = Ember.Object.extend({
  name: 'Erik Hanchett'
});
var teacher = Ember.Object.extend({
  name: 'John P. Smith'
});
const t = teacher.create()
const s = student.create()
const people = [s, t];
console.log(people.mapBy('name'));

// filterBy
var student = Ember.Object.extend({
  grade: null,
  name: null
})
var listOfStudents = [
  student.create({grade: 'senior', name:'Jen Smith'}),
  student.create({grade: 'sophmore', name:'Ben Shine'}),
  student.create({grade: 'senior', name:'Ann Cyrus'})
]

var newStudent = listOfStudents.filterBy("grade", "senior");
newStudent.forEach(function(item,index) {
  console.log(item.get("name"));
})// Jen Smith and Ann Cyrus

export default App;
