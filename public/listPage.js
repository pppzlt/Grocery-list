const addNew = document.getElementById("add-new");


// FUNCTION TO POPULATE NEW LIST
// CLICK EVENT LISTENER, IF Button is clicked, THEN new list is populated
addNew.addEventListener('click', (event) => {
    event.preventDefault();
    let card = document.createElement("add-new");
    card.style.display = "block";
    document.createElement("newCardTitle").innerHTML = "Weekly List";
    document.createElement("newCardDesc").innerHTML = "This is your new list";
    //Template Literal from lines 42-56 on listPage.handlebars
})

// EVENT LISTENERS FOR NAV MENU

// MAKE THE EDIT BUTTONS RESPONSIVE

// EVENT LISTENER FOR DELETE ITEM BUTTON

