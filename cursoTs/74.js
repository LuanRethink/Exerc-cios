// function sum0(num, callback) {
//   console.log("Chegou no sum " + num);
//   callback(++num);
// }

// function sum1(num, callback) {
//   console.log("Chegou no sum " + num);
//   callback(++num);
// }
// function sum2(num, callback) {
//   console.log("Chegou no sum " + num);
//   callback(++num);
// }

// sum0(0, (user) => {
//   sum1(user, (repos) => {
//     sum2(repos, (num) => {
//       console.log("Chegou no sum " + num);
//     });
//   });
// });

// Divisor de águas //

function sum0(num, callback) {
  console.log("Chegou no sum " + num);
  callback(++num);
}

function sum1(num, callback) {
  console.log("Chegou no sum " + num);
  callback(++num);
}
function sum2(num, callback) {
  console.log("Chegou no sum " + num);
  callback(++num);
}

sum0(0, callback1);

function callback1(num) {
  sum1(num, callback2);
}
function callback2(num) {
  sum2(num, callback3);
}

function callback3(num) {
  console.log("Chegou no sum " + num);
}
