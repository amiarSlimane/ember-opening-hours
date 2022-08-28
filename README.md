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
<OpeningHours @openingHours={{this.openingHours}} @setOpeningHours={{this.setOpeningHours}}/>
```

in your controller 
```javascript

// initial opening hours
this.openingHours = [
      {
        "day": "monday",
        "hours": [
          {
            "id": "59fb67d9-096b-4d0a-8214-104cd206a47b",
            "from": "09:00",
            "to": "21:00"
          }
        ]
      },
      {
        "day": "tuesday",
        "hours": [
          {
            "id": "598959b7-f1e4-40bb-b0c0-2359f4c231a3",
            "from": "09:00",
            "to": "21:00"
          }
        ]
      },
      {
        "day": "wednesday",
        "hours": [
          {
            "id": "2ca8a2b3-4697-45e1-b4a2-f7d8f31ebe67",
            "from": "09:00",
            "to": "21:00"
          }
        ]
      },
      
    ];

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
