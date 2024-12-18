const input = document.querySelector('#favechap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button 
// using addEventListener and an anonymous function or arrow function.

button.addEventListener("click", () => {
    if (input.value != "")
    {
        // create a li element
        const li = document.createElement("li");
        // create a delete button
        const deleteButton = document.createElement("button");
        // del.setAttribute("type", "submit");
        
        // populate the li elements textContent or innerHTML with the input value
        li.textContent = input.value;
        // populate the button textContent with a ❌
        deleteButton.textContent = "❌";
        // append the li element with the delete button
        li.appendChild(deleteButton);
        // append the li element to the unordered list in your HTML
        ul.appendChild(li);
        // change the input value to nothing or the empty string to clean up the interface for the user
        input.value = "";
        // add an event listener to the delete button that removes the li element when clicked
        input.focus();
        deleteButton.addEventListener("click", () => {
            ul.removeChild(li);
            // send the focus to the input element
            input.focus();
        });
    }
    else {
        input.focus();
    }
});

// // In the click event function block {...}, do the following:
// // check to make sure the input is not blank before doing the 
// // following remaining tasks in this list using an if block, 
// // otherwise provide a message or at least do nothing and return 
// // the .focus() to the input field.
