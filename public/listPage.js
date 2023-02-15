// getting all of the elements
const addNewList = document.getElementById("addNewList");
const toggle = document.querySelector("#input-card");
const addBtn = document.querySelector("#inputbtn");
const listNameInput = document.getElementById("listNameInput");
const descriptInput = document.getElementById("descriptInput");
const deletebtns = document.querySelectorAll("#delete");
const closebtns = document.getElementById("inputclosebtn")
<<<<<<< HEAD
// toggling the cards on and off 
=======

//logout button
const logoutbtn = document.querySelector("#logout");

>>>>>>> e1894fd4f06648ab8bd522dd2b3d7d99f57a0caf
addNewList.addEventListener("click", () => {
    toggle.classList.remove("invisible");
    toggle.classList.add("visible");
});
closebtns.addEventListener("click", () => {
    toggle.classList.remove("visible");
    toggle.classList.add("invisible");
});
//adds a list to the database
addBtn.addEventListener("click", async () => {
    var listname = listNameInput.value;
    var listdes = descriptInput.value;

    const newList = {
        list_name: listname,
        list_descrip: listdes,
    };
    let response = await fetch("/masterlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newList),
    });
    location.reload();
});
// listens to all the delete buttons and deletes the card if clicked from the database
deletebtns.forEach((btn) => {
    btn.addEventListener("click", async function () {
        let id = this.parentElement.children[0].textContent;

        await fetch("/masterlist/" + id, {
            method: "DELETE",
        });
        location.reload();
    });
});
// logs out when button is clicked
const logout = async () => {
    const response = await fetch("/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/home");
    } else {
        alert(response.statusText);
    }
};

logoutbtn.addEventListener("click", logout);
