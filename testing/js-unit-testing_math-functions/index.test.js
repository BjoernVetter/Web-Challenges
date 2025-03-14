import { add, divide, multiply, subtract } from "./index.js";

// export function add(a, b) {
//     return a + b;
//   }

//   export function subtract(a, b) {
//     return a - b;
//   }

//   export function multiply(a, b) {
//     return a * b;
//   }

//   export function divide(a, b) {
//     if (b === 0) {
//       return "You should not do this!";
//     }

//     return a / b;
//   }

test("add() returns 5 if called with add(2, 3)", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });



  test("add() returns a negative value if the greater argument is negative", () => {
    const result = add(-10, 3);
    expect(result).toBeLessThan(0);
  });
  

  test("add() returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3); 
  });
  

test("subtract() return a negative value if the second argument is greater than the first one", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

test("multiply() returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply() returns a negative value if only the first argument is negative ", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("multiply ()returns a negative value if only the second argument is negative ", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("multply returns a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

test("divide  returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});


test('divide() returns "You should not do this!" if called with 0 as second argument', () => {
    const result = divide(5, 0);
    expect(result).toBe("You should not do this!");
  });
  