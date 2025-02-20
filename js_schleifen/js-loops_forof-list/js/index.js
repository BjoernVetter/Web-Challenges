console.clear();

const main = document.querySelector('[data-js="main"]');


const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];


for (const program of programmingLanguages) {
console.log(program);
const li = document.createElement("li");
li.textContent = program;
ol.append(li)


}









// --v-- write or modify code below this line --v--

// --^-- write or modify code above this line --^--
