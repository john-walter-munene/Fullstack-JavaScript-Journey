```
input[type="radio"]::before {
    display: block;
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color: red;
    font-size: 1.2em;
    transform: translate(3px, 3px) scale(0);
    transform-origin: center;
    transition: all 0.3s ease-in;
}
input[type="radio"]:checked::before {
    transform: translate(3px, 3px) scale(1);
    transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```