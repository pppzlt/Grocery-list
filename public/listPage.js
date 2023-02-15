const addNewList = document.getElementById("addNewList");
const toggle = document.querySelector("#input-card");
const addBtn = document.querySelector("#inputbtn");
const listNameInput = document.getElementById("listNameInput");
const descriptInput = document.getElementById("descriptInput");
const deletebtns = document.querySelectorAll("#delete");
const closebtns = document.getElementById("inputclosebtn")

addNewList.addEventListener("click", () => {
    toggle.classList.remove("invisible");
    toggle.classList.add("visible");
});
closebtns.addEventListener("click", () => {
    toggle.classList.remove("visible");
    toggle.classList.add("invisible");
});

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

deletebtns.forEach((btn) => {
    btn.addEventListener("click", async function () {
        let id = this.parentElement.children[0].textContent;

        await fetch("/masterlist/" + id, {
            method: "DELETE",
        });
        location.reload();
    });
});
