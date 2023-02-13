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
    doc.innerHTML = `<div class="card d-flex justify-content-center col-6">
    <div class="card-body d-flex justify-content-between shadow">
        <div>
            <h5 class="card-title">Weekly List</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
        </div>
        <div class = "d-flex flex-column justify-content-center">
            <span class="material-symbols-outlined px-3">
                    edit_note
            <a href="#" class="card-link">
                <span class="material-symbols-outlined">
                    add_shopping_cart
                </span>
            </a>
        </div>
    </div>
</div>` // template literal here 
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

