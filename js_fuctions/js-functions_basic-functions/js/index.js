console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --^-- write your code here --^--
const title = "the Lord of the javascript";
const author = "Mario";
let rating = 4.2;
let copiesSold = 120;
/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2 
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

logBookData();

numberOfSales = numberOfSales + 1000;
rating = 7;

console.log(`title: ${title}`);
console.log("author: " + author);
console.log("rating:" + rating);
console.log("number of Sales:" + numberOfSales);

logBookData();
// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/
function logBookData() {
  console.log(title);
  console.log(author);
  console.log(rating);
  console.log(number);
}
// --v-- write your code here --v--

// --^-- write your code here --^--
function logBookData() {
  console.log(title + "," + author + ", " + rating + ", "  + numberOfSales);
}
numberOfSales = numberOfSales +500;
logBookData();