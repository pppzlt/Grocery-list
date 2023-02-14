// const newUserBtn = document.querySelector('#addNewUser');

//select elements
const newItemBtn = document.querySelector("#addNewItem");
const toggle = document.querySelector("#toggle");
//select inputs from user
const itemName = document.querySelector("#item_name");
const itemQuantity = document.querySelector("#quantity");
const itemFreq = document.querySelector("#frequency");
const itemCat = document.querySelector("#category");
const itemSel = document.querySelector("#listname");
const itemComment = document.querySelector("#comment");
const itembtn = document.querySelector("#inputbtn");

(async () => {
    //fetch list of lists to populate the list options
    let response = await fetch("");

    for (let i = 0; i < 10; i++) {
        let el = document.createElement("option");
        el.textContent = "1";
        el.value = "1";
        itemSel.append(el);
    }
})();


itembtn.addEventListener("click", async () => {
    let newItem = {
        item: itemName.value,
        quantity: itemQuantity.value,
        frequency: itemFreq.value,
        category: itemCat.value,
        comment: itemComment.value,
        //needs changed
        //list_id: itemSel.value,
        list_id: 1,
    };
    console.log(newItem);
    let response = await fetch('/innerlist', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
    });
    location.reload()
    return response.json();
});

newItemBtn.addEventListener("click", () => {
    toggle.classList.remove("invisible");
    toggle.classList.add("visible");
});

console.log("hello world");
