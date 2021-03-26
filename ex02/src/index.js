function* myGenerator() {
  yield insideGenerator1();
  yield insideGenerator2();
  yield insideGenerator3();
}
function* insideGenerator1() {
  for (let i = 1; i < 6; i++) {
    yield x;
  }
}
function* insideGenerator2() {
  for (let i = 10; i < 16; i++) {
    yield x;
  }
}
function* insideGenerator3() {
  for (let i = 6; i < 10; i++) {
    yield x;
  }
}
const iterator = myGenerator();
var fifteenArray = [];
for (let j = 0; j < 16; j++) {
  console.log(iterator.next().value);
}
module.exports = myGenerator;
