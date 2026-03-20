function doWork(res, rej) {
  setTimeout(() => {
    res("Hello World!");
  }, 1000);
}

function doOtherWork(res, rej) {
  setTimeout(() => {
    res("How are you?");
  }, 3000);
}

let promise = new Promise(doWork);

promise
  .then((val) => {
    console.log(`1st log: ${val}`);
    return new Promise(doOtherWork);
  })
  .then((value) => {
    console.log(value);
  });
