const { check, runTest, skipTest } = require("../test-api/index");

// The returnHighest function takes an array of objects and an integer num as inputs. The function sorts the array based on the value of an object property score in descending order. The function then calculates the number of elements in the array whose indices are multiples of num. The function then filters the original array to only include elements whose indices are less than the number of multiples of num, and returns the resulting filtered array.

/*For example returnHighest([
  { score: 100, country: "England" },
  { score: 0, country: "Scotland" },
  { score: 30, country: "Italy" },
  { score: 40, country: "France" }], 2)
  Would return [{ score: 100, country: "England" },{ score: 4, country: "France" }]

returnHighest([
  { score: 100, country: "England" },
  { score: 35, country: "Scotland" },
  { score: 30, country: "Italy" },
  { score: 40, country: "France" }], 3)
  Would return [{ score: 100, country: "England" }]
*/

//It is your job to fix it.

function returnHighest(array, num) {
  if (num === 0) {
    return [];
  }

  array.sort((a, b) => {
    return b.score - a.score;
  });

  let multipleOfNum = 1;
  for (let i = 1; i <= array.length; i++) {
    if (i % num === 0) {
      multipleOfNum++;
    }
  }
  const newArray = array.filter((object, index) => {
    return index < multipleOfNum;
  });
  return newArray;
}

runTest('Returns empty array if num is 0"', function () {
  check(returnHighest([{ score: 100, country: "England" }], 0)).isEqualTo([]);
});
runTest('Returns 1 country if array length is 1 and num  is > 0"', function () {
  check(returnHighest([{ score: 100, country: "England" }], 4)).isEqualTo([]);
});
runTest('Get sayHello to return "hello students"', function () {
  check(
    returnHighest(
      [
        { score: 100, country: "England" },
        { score: 15, country: "Scotland" },
        { score: 98, country: "Italy" },
        { score: 96, country: "France" },
        { score: 80, country: "Germany" },
        { score: 42, country: "Uganda" },
        { score: 70, country: "Nepal" },
        { score: 91, country: "USA" },
        { score: 12, country: "Wales" },
        { score: 72, country: "Argentina" },
        { score: 38, country: "Kenya" },
        { score: 60, country: "Brazil" },
        { score: 9, country: "China" },
        { score: 78, country: "Switzerland" },
        { score: 52, country: "Norway" },
      ],
      4
    )
  ).isEqualTo([
    { score: 100, country: "England" },
    { score: 98, country: "Italy" },
    { score: 96, country: "France" },
  ]);
});