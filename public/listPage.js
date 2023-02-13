const addNew = document.getElementById("add-new");


// FUNCTION TO POPULATE NEW LIST
// CLICK EVENT LISTENER, IF Button is clicked, THEN new list is populated
addNew.addEventListener('click', (event) => {
    event.preventDefault();
    let card = document.getElementById("newCard");
    card.style.display = "block";
    document.getElementById("newCardTitle").innerHTML = "Weekly List";
    document.getElementById("newCardDesc").innerHTML = "This is your new list";
})


// EVENT LISTENERS FOR NAV MENU

// MAKE THE EDIT BUTTONS RESPONSIVE

// EVENT LISTENER FOR DELETE ITEM BUTTON

