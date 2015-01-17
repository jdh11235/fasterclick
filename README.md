# fasterclick
a simpler alternative to **[fastclick](https://github.com/ftlabs/fastclick)**


1. **[Download Here](https://github.com/jdh11235/fasterclick/releases)**
2. Load this script before any scripts that use Fasterclick:
```html
<script src="fasterclick.js">
```

___

*Usage:*
```javascript
Fasterclick.attach(element, callback);
```

This will return the click event to your callback function, however if there is a touch event, it will return that instead (it will not return both events).

*Example:*
```javascript
Fasterclick.attach(document.body, function(event) {
	console.log(event);
});
```

___

MIT License.
