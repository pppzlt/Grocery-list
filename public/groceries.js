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
//select all delete button
const deletebtns = document.querySelectorAll('#delete');


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

//add eventlistener on add button in input card
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

//add eventlistener on add item button 
newItemBtn.addEventListener("click", () => {
    toggle.classList.remove("invisible");
    toggle.classList.add("visible");
});

deletebtns.forEach((btn) => {
    btn.addEventListener('click', async function () {
        let id = this.parentElement.children[0].textContent;
        
        await fetch('/innerlist/' + id, {
            method: 'DELETE'
        })
        // this.parentElement.parentElement.parentElement.parentElement.style.animationPlayState = 'running';
        // this.parentElement.parentElement.parentElement.parentElement.addEventListener('animationend', () => {
        //     this.parentElement.parentElement.parentElement.parentElement.remove();
        // })
        location.reload();
    });
})







console.log("hello world");
