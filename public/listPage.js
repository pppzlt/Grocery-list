const addNewList = document.getElementById("addNewList")
console.log(addNewList);
// FUNCTION TO POPULATE NEW LIST
// CLICK EVENT LISTENER, IF Button is clicked, THEN new list is populated
addNewList.addEventListener('click', () => {
    addElement();
});

function addElement() {
    console.log("Hello!");
    const doc = document.createElement('div');
    doc.innerHTML = 'Hello World'; // template literal here 
    const container = document.querySelector('#parent-div');
    container.appendChild(doc);
}

    // let card = document.createElement("add-new");
    // card.style.display = "block";
    // document.createElement("newCardTitle").innerHTML = "Weekly List";
    // document.createElement("newCardDesc").innerHTML = "This is your new list";

// EVENT LISTENERS FOR NAV MENU

// MAKE THE EDIT BUTTONS RESPONSIVE

// EVENT LISTENER FOR DELETE ITEM BUTTON

