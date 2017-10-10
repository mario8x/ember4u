import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('comment');
  this.route('about', {path: '/aboutme'}, function() {
    this.route('location');
  });
  this.route('students', {path: '/students' }, function(){
    //this.route('student', '/:student_id');
  });
});

export default Router;
