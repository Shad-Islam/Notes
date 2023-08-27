//Selecting the elements
const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");

// Adding an event listener to the button
createBtn.addEventListener("click", () => {
  // Creating a new input box
  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  // Creating a delete icon
  let img = document.createElement("img");
  img.src = "images/delete.png";

  // Adding a click event to the delete icon
  img.addEventListener("click", () => {
    notesContainer.removeChild(inputBox); // Remove the entire input box when delete is clicked
  });

  // Appending the input box and delete icon to the container
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
});
