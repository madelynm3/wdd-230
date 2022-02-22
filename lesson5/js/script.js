// Create three variables that hold references to the input, button, and list elements using const

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");


// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  

button.addEventListener("click", () => {
	// Does not execute when input is empty
	// Create an li element
	if (input.value != "") {
		const li = document.createElement("li");
		li.textContent = input.value;

		// Create a delete button
		// Populate the button textContent with an ❌
		const delete_button = document.createElement("button");
		delete_button.textContent = "❌";

		// Append the li element with the delete button
		// Append the list element with the li element just created and appended with text and the delete button
		li.appendChild(delete_button);
		list.appendChild(li);

		// Deletes item
		// Add an event listener to the delete button that removes the li element when clicked
		delete_button.addEventListener("click", () => {
			list.removeChild(li);
		});
		
		// Resets input
		input.value = "";
	}
});
