// import printMe from './print';

// Manual imports
// import _ from 'lodash';
// function component() {
//   const element = document.createElement('div');
//   const button = document.createElement('button');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   button.innerHTML = `Click me and check the console!`;
//   button.addEventListener('click', () => printMe());

//   element.appendChild(button);
//   return element;
//  }

// document.body.appendChild(component());

// Dynamic imports
// function getComponent() {
//   return import('lodash').then(({ default: _ }) => {
//     const element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack', 'Walter', 'behind', 'keyboard.'], ' ');

//     return element;
//   }).catch((errror) => 'An error occured while loeading the component');
// }

// getComponent().then((component) => document.body.appendChild(component));

// Using import with async functions.
// async function getComponent() {
//   const element = document.createElement('div');
//   const { default: _ } = await import('lodash');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
//  }

//  getComponent().then((component) => {
//    document.body.appendChild(component);
//  });

import _ from 'lodash';
import { cube } from './maths';


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.textContent = "Click me and check the console.";
  element.textContent = _.join(['Hello', 'webpack', 'Its Walter the dev!', ' ']);
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  const handleClick = e => {
    console.log("Papa dev");
    import(/* webpackChunkName: "print" */ './print').then(module => {
      const print = module.default;
      print();
    });
  };

  button.addEventListener('click', handleClick)

  return element;
}

document.body.appendChild(component());

function newComponent() {
  const element = document.createElement('pre');

  element.innerHTML = ['Hello Webpack!',`5 cubed is equal to ${cube(5)}`,].join('\n\n')

  return element;
}

document.body.appendChild(newComponent());