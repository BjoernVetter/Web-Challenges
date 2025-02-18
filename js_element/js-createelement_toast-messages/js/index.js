console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

clearButton.style.backgroundColor = "red";



addButton.addEventListener("click", () => {
         const toastMessage  = document.createElement ("li");
       toastMessage.classList.add("toast-container__message");
       toastMessage.textContent = "New message";


       toastContainer.prepend(toastMessage);



         
        //  toastContainer.classList.add("card");
           
 




  // Exercise: Append a new entry to the toast messages container
});




clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
toastContainer.innerHTML = "";
});
