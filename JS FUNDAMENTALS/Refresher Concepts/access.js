const demoId = document.getElementById('demo');

demoId.style.border = '1px solid purple';

const demoClass = document.getElementsByClassName('demo');
console.log(demoClass);

// JS Arrays...
for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '1px solid orange';
  }

const demoTag = document.getElementsByTagName('article');
for (j = 0; j < demoTag.length; j++) {
    demoTag[j].style.border = '1px solid blue';
} 

const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '1px solid red';

const demoQueryAll = document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach((query) => {
    query.style.border = '1px solid green';
})

