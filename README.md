# ember2beginer

## Tasks
### Oct 09t, 2017

Ember Template

* Create new route to add new template

* working with html links inside templates

```
ember g route students
```
* binding with element attribute and classes

```
ember g template index
ember g controller index

controller.js:
export default Ember.Controller.extend({
  url: 'http:/placehold.it/350x200',
  sideClass: 'cc',
  secondClass: 'dd'
});

template.hbs:
<img src="{{url}}"/>
<div id="side" class="{{sideClass}} {{secondClass}}"> Info </div>
```

* use each helper to display list of items

```
ember g controller student
ember g resource student

./student/template.hbs

{{#each students as |student|}}
  {{student.name}} <br>
{{/each}}

{{#each emptyArray as |itme|}}
  {{item}}
{{else}}
  Empty Array
{{/each}}

<br>
{{#each students as |student index|}}
  Student {{student.name}} is at index {{index}} <br>
{{/each}}

http://localhost:4200/student
```

* generating a controller, component

```
ember g controller comment
ember g component hello-world
```

Enumerable with Arrays
* Iterating over an array with forEach

```
let food = ['Poi', 'Ono', 'Adobo Chicken'];

food.forEach((item, index) => {
  console.log(`Menu Item ${index+1}: ${item}`);
});
```

* using map and mapBy with an array

```
-map
let words = ['goodbye', 'cruel', 'world'];

let emphaticWords = words.map(item => `${item}!`);
//=> ["goodbye!", "cruel!", "world!"]
-mapBy
let hawaii = Ember.Object.create({
  capital: 'Honolulu'
});

let california = Ember.Object.create({
  capital: 'Sacramento'
});

let states = [hawaii, california];

states.mapBy('capital');
//=> ["Honolulu", "Sacramento"]
```

* using filterBy with a collection of objects
```
Todo = Ember.Object.extend({
  title: null,
  isDone: false
});

let todos = [
  Todo.create({ title: 'Write code', isDone: true }),
  Todo.create({ title: 'Go to sleep' })
];

todos.filterBy('isDone', true);

// returns an Array containing only items with `isDone == true`
```
* Creating a common mixin object
* Mixins with Ember CLI

```
ember generate mixin common
/mixins/common.js
import Ember from 'ember';

export default Ember.Mixin.create({
  property1: 'This is a mixin property',
  edit: function() {
    // console.log('Starting to edit');
    this.set('isEditing', true);
  },
  isEditing: false
});
```
* Working with ember observers
Adding new observers
Adding multiple properties to the observer
Resolving the synchronous issues

* Working with computed properties

### Oct 08th, 2017

Working with classes and instances
* Creating a very simple Ember class
```
myObject.js
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
    const bulb = Light.create();
    console.log(bulb.get('color'));
    console.log(Light.wattage);
}

then import object above int app.js
```
* Accessing proeperties within the buld instance

* Initializing the Ember object and reopenening classes

Build app  by using Firebase:http://www.firebase.com/
```
npm install -g firebase-tools
firebase init
firebase deploy
```

Deploying application
* build
```
default will build to /dist folder

ember build -production
or
ember build -prod -o<directory>
```
* deploy
```
ember-cli-deploy
```

Upgrading project
* uninstall : ember-cli, cache
`
npm uninstall -g ember-cli
npm cache clean
bower cache clean

then re-install
npm install -g ember-cli
`
### Oct 07th, 2017

Managing dependency

* Using bower for dependency management:
to check add-ons: https://emberobserver.com/

`
https://bower.io/
npm install -g bower
bower init > to create bower.json
bower install bootstrap --save

install add on package
ember install ember-bootstrap
`

* Loading AMD and non-AMD assets

Compiling the assets
* build production

`
ember build --environment=production
`

* create resource

```
ember g resource posts
```

* down load watchman
http://facebook.github.io/watchman/docs/install.html

* proxy

`
ember server --proxy http://127.0.0.1:8080
`
* ember-cli.js: to organize feature by feature
http://www.programwitherik.com/ember-pods/

```
In ember-cli.js
"usePods" : true

generate resource
ember g resource comment
```

* steps to create app

```
ember new exermatic_v2
```

* create controllers:

```
ember generate controller walks --type=array
```

* build and run:

```
ember build
ember server
```
