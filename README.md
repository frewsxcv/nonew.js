# nonew.js

Allows constructor functions to be called without using `new`

## Example

Consider this constructor function:

```js
function Person(name) {
  this.name = name;
}
```

Normally to instantiate it, we'd do:

```js
var myself = new Person('Corey Farwell');
```

With nonew.js, we can create an alternate constructor that doesn't require the use of `new`:

```js
var nonew = require('nonew');

var person = nonew(Person);
```

Now we can do:

```js
var myself = person('Corey Farwell');
```

## License

[Mozilla Public License version 2](https://www.mozilla.org/MPL/2.0/)
