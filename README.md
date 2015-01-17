# fasterclick
Fasterclick is a streamlined approach to **[Fastclick](https://github.com/ftlabs/fastclick)**. &nbsp;Fasterclick is targeted for fine-grained control of each element, and does not replace all functionallity of Fastclick.

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

This will return the element's click events to your callback function, however if there is a touch event, it will return that instead of the click event (it will not return both events).

*Example:*
```javascript
Fasterclick.attach(document.body, function(event) {
	console.log(event);
});
```

___

MIT License.
