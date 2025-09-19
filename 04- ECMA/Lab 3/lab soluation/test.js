function addCounter() {
  var c = 0;
  return function () {
    return ++c;
  };
}
let cc = addCounter();
console.log(addCounter());
console.log(cc());
console.log(cc());
console.log(cc());
addCounter();
console.log(cc());
console.log('==============');

var addCount = (function () {
  var c = 0;
  return function () {
    return ++c;
  };
})();
console.log(addCount());
console.log(addCount());
console.log(addCount());
