# fasterclick
Fasterclick is a streamlined alternative to **[Fastclick](https://github.com/ftlabs/fastclick)**. &nbsp;Fasterclick is targeted for fine-grained control of each element's click/touch behavior, and does not replace all functionality of Fastclick.

1. **[Download Here](https://github.com/jdh11235/fasterclick/releases)**
2. Load this script before any scripts that use Fasterclick:
```html
<script src="fasterclick-1.2.js">
```

___

*Usage:*
```javascript
Fasterclick.attach(element, callback);
```

This will return the element's click events to your callback function, however if there is a touch event, it will return that instead of the click event (it will not return both events).

*Example:*
```javascript
Fasterclick.attach(document.body, function(event) {
	console.log(event);
});
```

Storing the ```uid``` (Unique Identifier) of an event listener will allow you to cancel it whenever you wish:
```javascript
var uid = Fasterclick.attach(document.body, function(event) {
	console.log(event);
});

Fasterclick.cancel(uid);
```


___

*Note: Fasterclick is original work by Jonathan Herman, and is not affiliated with Fastclick or FT Labs.*

**MIT License.**
