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

async function doAllWork() {
  var res1 = new Promise(doWork);
  const text1 = await res1;
  console.log(text1);

  var res2 = new Promise(doOtherWork);
  const text2 = await res2;
  console.log(text2);
}

doAllWork();
console.log("Completed all work!");

// let promise = new Promise(doWork);
// promise
//   .then((val) => {
//     console.log(`1st log: ${val}`);
//     return new Promise(doOtherWork);
//   })
//   .then((value) => {
//     console.log(value);
//   });
