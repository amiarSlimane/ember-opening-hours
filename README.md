ember-opening-hours
==============================================================================

[Short description of the addon.]


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


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


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
