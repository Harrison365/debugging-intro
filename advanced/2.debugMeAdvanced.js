const { check, runTest, skipTest } = require("../test-api/index");

function compoundInterest(value, interestRate, years) {
  let bankAccount = value;
  for (let i = 1; i <= years.length; i++) {
    bankAccount *= interestRate + 1;
  }
  return value;
}

runTest('Get sayHello to return "hello students"', function () {
  check(compoundInterest(100, 0.1, 5)).isEqualTo(161.05);
});
