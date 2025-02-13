console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password123";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("open");
} else {
  console.log("closed");
}
// Part 2: Even / Odd
const number = 4;
if (number % 2 === 0) {
  console.log("gerade Zahl");
} else {
  console.log("ungerade Zahl");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
if (numberOfHotdogs < 5) {
  console.log(numberOfHotdogs * 2);
} else if (numberOfHotdogs < 100) {
  console.log(numberOfHotdogs * 1.5);
} else if (numberOfHotdogs < 1000000) {
  console.log(numberOfHotdogs * 1);
} else {
  console.log(numberOfHotdogs * 0.1);
}

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour <= 17 ? "Muss noch lernen" : "Partytime";
console.log(statement);







// Part 5: Greeting
const userName = "Archibal";
const coachName = "Archibal";

const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";

console.log(greeting);
