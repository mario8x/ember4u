# ember2beginer

## Tasks

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
