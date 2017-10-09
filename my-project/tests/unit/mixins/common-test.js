import Ember from 'ember';
import CommonMixin from 'my-project/mixins/common';
import { module, test } from 'qunit';

module('Unit | Mixin | common');

// Replace this with your real tests.
test('it works', function(assert) {
  let CommonObject = Ember.Object.extend(CommonMixin);
  let subject = CommonObject.create();
  assert.ok(subject);
});
