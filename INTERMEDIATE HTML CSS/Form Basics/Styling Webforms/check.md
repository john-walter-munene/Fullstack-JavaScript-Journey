Since some form elements in our forms are rendered differently on browsers, you can employ some techniques to ensure consistency in the application...

## Fonts and Texts
```
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

## Box-sizing
```
input,
textarea,
select,
button {
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

## Legend placement
```
fieldset {
  position: relative;
}

legend {
  position: absolute;
  bottom: 0;
  right: 0;
}
```