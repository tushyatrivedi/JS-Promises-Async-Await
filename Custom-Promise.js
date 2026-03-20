const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catches = [];

  function resolve(result) {
    if (state !== PENDING) return;

    state = FULLFILLED;
    value = result;
    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;
    catches.forEach((c) => c(err));
  }

  this.then = function (callback) {
    if (state === FULLFILLED) {
      callback(value);
    } else {
      handlers.push(callback);
    }
  };

  executor(resolve, reject);
}
const doWork = (res, rej) => {
  setTimeout(() => {
    res("Hello World");
  }, 1000);
};

let someText = new CustomPromise(doWork);

someText.then((val) => {
  console.log(`1st Log: ${val}`);
});

someText.then((val) => {
  console.log(`2nd Log: ${val}`);
});

setTimeout(() => {
  someText.then((val) => {
    console.log(`3rd Log: ${val}`);
  });
}, 3000);
