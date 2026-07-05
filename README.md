# @softon/loader

![npm](https://img.shields.io/npm/v/@softon/loader)
![license](https://img.shields.io/npm/l/@softon/loader)
![downloads](https://img.shields.io/npm/dm/@softon/loader)

Lightweight JavaScript loading spinner for HTML, React, Vue and Node applications.
# Loader.js

A lightweight, dependency-free JavaScript loading indicator that works for both full-page overlays and specific HTML elements.

## Installation

### npm

```bash
npm install @softon/loader
```

### ES Module

```javascript
import Loader from "@softon/loader";
```


## Features

* 🚀 Pure JavaScript (No dependencies)
* 🎨 Customizable spinner size and color
* 🌗 Optional overlay background
* 📦 Lightweight and reusable
* 🖥️ Full-page loading indicator
* 📄 Element-specific loading indicator
* ⚡ Easy to integrate with Fetch, Axios, jQuery, or any JavaScript project

---

## Installation

### Using jsDelivr CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@softon/loader/dist/loader.min.js"></script>
```

### Or download

Download `loader.js` and include it in your project.

```html
<script src="loader.js"></script>
```

---

## Basic Usage

### Full-page Loader

```javascript
Loader.show();

setTimeout(() => {
    Loader.hide();
}, 2000);
```

---

### Loader Inside a Specific Element

```html
<div id="content">
    Loading content...
</div>
```

```javascript
Loader.show({
    targetId: "content"
});

setTimeout(() => {
    Loader.hide("content");
}, 2000);
```

---

## Customization

```javascript
Loader.show({
    targetId: "content",
    size: 60,
    color: "green",
    overlay: true,
    background: "rgba(255,255,255,0.6)"
});
```

---

## API

### `Loader.show(options)`

Displays a loading spinner.

#### Options

| Option       | Type    | Default                  | Description                                                        |
| ------------ | ------- | ------------------------ | ------------------------------------------------------------------ |
| `targetId`   | String  | `null`                   | ID of the target element. If omitted, a full-page loader is shown. |
| `size`       | Number  | `40`                     | Spinner size in pixels.                                            |
| `color`      | String  | `"#0d6efd"`              | Spinner color.                                                     |
| `overlay`    | Boolean | `true`                   | Show or hide the overlay background.                               |
| `background` | String  | `"rgba(255,255,255,.5)"` | Overlay background color.                                          |

Example:

```javascript
Loader.show({
    color: "red",
    size: 50
});
```

---

### `Loader.hide(targetId)`

Hides the loader.

#### Hide Full-page Loader

```javascript
Loader.hide();
```

#### Hide Element Loader

```javascript
Loader.hide("content");
```

---

## Axios Example

```javascript
Loader.show();

axios.get("/api/users")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        Loader.hide();
    });
```

---

## Fetch Example

```javascript
Loader.show({
    targetId: "content"
});

fetch("/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .finally(() => {
        Loader.hide("content");
    });
```

---

## Browser Support

* Chrome
* Edge
* Firefox
* Safari
* Opera

---

## License

MIT License

Feel free to use, modify, and distribute this project.

---

## Contributing

Contributions, bug reports, and feature requests are welcome.

If you find an issue or have an idea for improvement, please open an issue or submit a pull request.

---

## Author

Developed and maintained by **LNT Softwares**.
