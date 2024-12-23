// Function composition OR
// import pipe from 'lodash/fp/flow';
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// Functions to compose
const g = n => n + 1;
const f = n => n * 2;
// Imperative composition
const doStuffBadly = x => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
};
// Declarative composition
const doStuffBetter = pipe(g, f);
console.log(
  doStuffBadly(20), // 42
  doStuffBetter(20) // 42
);

// Using pure functions.
// Not pure
const signInUser = user => user.isSignedIn = true;
const foo = {
  name: 'Foo',
  isSignedIn: false
};
// Foo was mutated
console.log(
  signInUser(foo), // true
  foo              // { name: "Foo", isSignedIn: true }
);

// Pure
const signInUserOne = user => ({...user, isSignedIn: true });
const fooOne = {
  name: 'Foo',
  isSignedIn: false
};
// Foo was not mutated
console.log(
  signInUserOne(fooOne), // { name: "Foo", isSignedIn: true }
  fooOne              // { name: "Foo", isSignedIn: false }
);

// Isolate logic from I/O
async function uploadFiles({user, folder, files}) {
    const dbUser = await readUser(user);
    const folderInfo = await getFolderInfo(folder);
    if (await haveWriteAccess({dbUser, folderInfo})) {
      return uploadToFolder({dbUser, folderInfo, files });
    } else {
      throw new Error("No write access to that folder");
    }
  }

const logIt = (...args) => console.log(...args);
// Ignore these. In your real code you'd import
// the real things.
const readUser = () => Promise.resolve(true);
const getFolderInfo = () => Promise.resolve(true);
const haveWriteAccess = () => Promise.resolve(true);
const uploadToFolder = () => Promise.resolve('Success!');
// gibberish starting variables
const user = '123';
const folder = '456';
const files = ['a', 'b', 'c'];
async function uploadFiles({user, folder, files}) {
const dbUser = await readUser({ user });
const folderInfo = await getFolderInfo({ folder });
if (await haveWriteAccess({dbUser, folderInfo})) {
    return uploadToFolder({dbUser, folderInfo, files });
} else {
    throw new Error("No write access to that folder");
}
}
uploadFiles({user, folder, files}).then(logIt);

// And now refactor it to use promise composition via asyncPipe():
const asyncPipe = (...fns) => x => (fns.reduce(async (y, f) => f(await y), x));
const uploadFiles = asyncPipe(readUser, getFolderInfo, haveWriteAccess, uploadToFolder);
uploadFiles({user, folder, files}).then(log);

// Use objects that represent future computations
// sugar for console.log we'll use later
const log = msg => console.log(msg);
const call = (fn, ...args) => ({ fn, args });
const put = (msg) => ({ msg });
// imported from I/O API
const sendMessage = msg => Promise.resolve('some response');
// imported from state handler/Reducer
const handleResponse = response => ({
  type: 'RECEIVED_RESPONSE',
  payload: response
});
const handleError = err => ({
  type: 'IO_ERROR',
  payload: err
});
function* sendMessageSaga (msg) {
  try {
    const response = yield call(sendMessage, msg);
    yield put(handleResponse(response));
  } catch (err) {
    yield put(handleError(err));
  }
}

const iter = sendMessageSaga('Hello, world!');
// Returns an object representing the status and value:
const step1 = iter.next();
log(step1);
/* =>
{
  done: false,
  value: {
    fn: sendMessage
    args: ["Hello, world!"]
  }
}
*/
const { value: {fn, args }} = step1;

const step2 = fn(args);
step2.then(log); // "some response"

iter.next(simulatedNetworkResponse);

const express = require('express');
// const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!')
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// Testing an express application.
const hello  = (req, res) => res.send('Hello World!');

{
    const expected = 'Hello World!';
    const msg = `should call .send() with ${ expected }`;
    const res = {
      send: (actual) => {
        if (actual !== expected) {
          throw new Error(`NOT OK ${ msg }`);
        }
        console.log(`OK: ${ msg }`);
      }
    }
    hello({}, res);
}

const handleListen = (log, port) => () => log(`Example app listening on port ${ port }!`);

const express = require('express');
const hello = require('./hello.js');
const handleListen = require('./handleListen');
const log = require('./log');
const port = 3000;
const app = express();
app.get('/', hello);
app.listen(port, handleListen(port, log));