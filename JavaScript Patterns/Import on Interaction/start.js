const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    import('lodash.sortby')
        .then((module) => module.default())
        .then(sortInput()) // use the imported dependency
        .catch((error) => {
            console.log(error);
        })
});

// Prior to dynamic imports
const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", () => {
  const loader = new scriptLoader();
  loader
    .load(["//apis.google.com/js/client:platform.js?onload=showLoginScreen"])
    .then(({ length }) => {
      console.log(`${length} scripts loaded!`);
    });
});
