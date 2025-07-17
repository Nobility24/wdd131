// declare variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a li element that will hold each entry's chapter title and an associated delete button.
button.addEventListener('click', function () {
    if (input.value.trim() !== "") {
        // Populate the li element variable's textContent or innerHTML with the input value. (textContent is preferred over innerHTML because it is more secure.For HTML tags, use innerHTML.) 
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create delete button element that will be used to delete the entry from the list. 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-btn');

        // Append delete button to list item
        li.appendChild(deleteButton);
        // Append list item to the list
        list.appendChild(li);

        // Clear the input field and refocus it after adding a chapter entry.
        input.value = "";
        input.focus();
    }
});

// Delete functionality using event delegation
list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

