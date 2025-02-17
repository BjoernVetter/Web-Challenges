console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

const secondInput = document.querySelector('[data-js="second-input"]');
const switchcaseButton = document.querySelector('[data-js="button-switchcase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});



switchcaseButton.addEventListener("click", () => {
  const firstvalue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = firstvalue;




});