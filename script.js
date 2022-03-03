// 1
const date = new Date("1990-01-28");
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
console.log(`${day}.0${month}.${year}`);

// 2
function getDiffDays(firstDate, lastDate) {
  let startDate = new Date(firstDate);
  let endDate = new Date(lastDate);
  const MILLISECONDS_IN_DAY = 86400000;
  if (
    startDate.toString() === "Invalid Date" ||
    endDate.toString() === "Invalid Date"
  ) {
    console.error("Error: invalid date");
    return;
  }
  if (endDate < startDate) {
    console.error("Error: your start date is later than end");
    return;
  }
  return (endDate - startDate) / MILLISECONDS_IN_DAY;
}
console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

// 3
const isWeekend = function (date1) {
  let date = new Date(date1);

  if (date.getDay() === 6 || date.getDay() === 0) {
    return "true";
  } else {
    return "false";
  }
};
console.log(isWeekend("2022-02-12")); // true
console.log(isWeekend("2022-02-13")); // true
console.log(isWeekend("2022-02-09")); // false

// 4
const person = {
  fullName: "Sherlock Holmes",
  address: {
    street: "Baker Street",
    city: "London",
    house: "221b",
  },
};
const newPerson = JSON.stringify(person);
console.log(person);
console.log(JSON.parse(newPerson));

const { fullName } = person;
const { street } = person.address;
const { city } = person.address;
const { house } = person.address;
console.log(fullName);
console.log(street);
console.log(city);
console.log(house);
