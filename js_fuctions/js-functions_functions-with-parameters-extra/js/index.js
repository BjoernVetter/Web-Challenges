console.clear();

/*
1: The function calls below are not working properly yet. Modify the function
   `printSquare` to log the square of the parameter to the console.
   The formula is: square = number * number
*/

function printSquare(num) {
  return num * num;
}

console.log(printSquare(4));
console.log(printSquare(9));

function printCircumference(number) {
  console.log(number * number);
}
console.log(printSquare(3));
/*
2: Write a function that accepts the radius of a circle as a parameter and logs
   the circumference to the console. The function does not exist yet.
   The formula is: circumference = 2 * Pi * radius
*/

// Uncomment the following function calls and implement the function `printCircumference`.

function printCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(printCircumference(4));
console.log(printCircumference(6));

// Das ist die kurze Version mit Runden
function printCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  console.log("The circumference is: " + Math.round(circumference));
}
printCircumference(4);
printCircumference(6);

// da sist die richtige Lösung

function printCircumference(radius) {
  console.log(2 * Math.PI * radius);
}

printCircumference(8);


// so kann ich in der funktion auhc runden.
function printCircumference(radius) {
  console.log(Math.round(2 * Math.PI * radius));
}

printCircumference(5);

/*
3: Write a function that accepts the width and length of a rectangle
   and logs the following text to the console: "The area of the rectangle is ?".
   The function should replace the question mark "?" with the correct area.
   The function does not exist yet.
   The formula is: area = width * length
*/

// Uncomment the following function calls and implement the function `printRectangleArea`.

function printRectangleArea(width, length) {
  console.log("The area of the rectangle is " + width * length + ".");
}

printRectangleArea(3, 4);
// printRectangleArea(3, 8);
