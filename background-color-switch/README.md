
## Background Color Switch
## Quiz link
[Quora Ques](https://quera.org/problemset/49606/).

## Usage/javaScript

```javascript
itemsEl.forEach((item) => {
    item.addEventListener("click", (e) => {
        const colorSelected = e.target.getAttribute("id");
        bodyEl.style.backgroundColor = colorSelected
    });
});
```

