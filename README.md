ember-opening-hours
==============================================================================

Ember component for opening hours

![](https://raw.githubusercontent.com/amiarSlimane/ember-opening-hours/master/screenshot/ember-opening-hours.png)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-opening-hours
```


Usage
------------------------------------------------------------------------------

```javascript
<OpeningHours @setOpeningHours={{this.setOpeningHours}}/>
```

in your controller 
```javascript
 @action
  setOpeningHours(openingHours) {
    //here you get the opening hours generated as the openingHours arg  
  }
```
the generate opening hours has the following schema 
```javascript
[{
	day:'monday',
  hours:[{
	  id: 'a5154c0f-8e58-4b20-986f-799767ea621b',
	  from: '00:00',
	  to: '00:00' 
  }]
]
```

Demo
------------------------------------------------------------------------------

 [Opening Hours Demo](https://amiarslimane.github.io/ember-opening-hours/ "Demo")


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
