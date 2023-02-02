const { check, runTest, skipTest } = require("../test-api/index");

function shoutNames(names) {
  const shoutedNames = names.forEach((name) => {
    return word + "!";
  });
  return shoutedNames;
}

runTest('Get sayHello to return "hello students"', function () {
  check(shoutNames(["Hannah", "Lewis", "Harrison", "Rob"])).isEqualTo([
    "Hannah!",
    "Lewis!",
    "Harrison!",
    "Rob!",
  ]);
});
