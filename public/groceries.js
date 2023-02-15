// const newUserBtn = document.querySelector('#addNewUser');

//select elements
const newItemBtn = document.querySelector("#addNewItem");
const toggle = document.querySelector("#input-card");
//select inputs from user
const itemName = document.querySelector("#item_name");
const itemQuantity = document.querySelector("#quantity");
const itemFreq = document.querySelector("#frequency");
const itemCat = document.querySelector("#category");
const itemSel = document.querySelector("#listname");
const itemComment = document.querySelector("#comment");
const itembtn = document.querySelector("#inputbtn");
const closebtns = document.getElementById("inputclosebtn")
//select all delete button
const deletebtns = document.querySelectorAll('#delete');


(async () => {
    //fetch list of lists to populate the list options
    let response = await (await fetch("/masterlist/all")).json();
    // console.log(response);

    for (let i = 0; i < response.length; i++) {
        let el = document.createElement("option");
        el.textContent = response[i].list_name;
        el.value = response[i].list_id;
        itemSel.append(el);
    }
})();

//add eventlistener on add button in input card
itembtn.addEventListener("click", async () => {
    let newItem = {
        item: itemName.value,
        quantity: itemQuantity.value,
        frequency: itemFreq.value,
        category: itemCat.value,
        comment: itemComment.value,
        list_id: itemSel.value,
    };

    console.log(itemFreq.value)

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

//add eventlistener on add item button 
newItemBtn.addEventListener("click", () => {
    toggle.classList.remove("invisible");
    toggle.classList.add("visible");
});

closebtns.addEventListener("click", () => {
    toggle.classList.remove("visible");
    toggle.classList.add("invisible");
});

deletebtns.forEach((btn) => {
    btn.addEventListener('click', async function () {
        let id = this.parentElement.children[0].textContent;
        
        await fetch('/innerlist/' + id, {
            method: 'DELETE'
        })
        location.reload();
    });
})

