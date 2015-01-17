# fasterclick
a simpler alternative to fastclick

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

*Example:*
```javascript
Fasterclick.attach(document.body, function(event) {
	console.log(event);
});
```

___

MIT License.
