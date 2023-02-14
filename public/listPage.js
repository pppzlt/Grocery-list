const addNewList = document.getElementById("addNewList")
const toggle = document.querySelector("#input-card");
const addBtn = document.querySelector("#inputbtn");
const listNameInput = document.getElementById("listNameInput");
const descriptInput = document.getElementById("descriptInput");
console.log(addNewList);

// addNewList.addEventListener('click', () => {
//     addElement();
// });
async function addElement() {
    console.log("Hello!");
    const listData = await getAllWeeklyLists();
    console.log(listData);
    if (listData) {
        const listCont = document.getElementById('parent-div')
        listData.map((elem , index) =>{
            console.log(elem, index);
            const doc = document.createElement('div');
            doc.setAttribute('id', elem.list_id)
            doc.innerHTML = `


            <div class="card mt-3">
                <div class="card-body d-flex justify-content-between shadow">
                    <div>
                        <h5 class="card-title">${elem}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">This is your most current list</h6>
                    </div>
                    <div class = "d-flex flex-row align-items-center justify-content-center">
                        <span class="material-symbols-outlined px-3">
                            edit_note
                        </span>    
                        <a href="#" class="card-link">
                            <span class="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            
            
            ` 
        })
        listCont.appendChild(doc);
    }
}

function getAllWeeklyLists() {
    return fetch('/masterlist/all').then((result) =>{
        console.log(result);
        if(!result.ok){
            console.log('Can not get list');
        }
        return result.json()
    }).then((value) => {
        console.log(value)
        return value;
    })
    .catch((err)=> console.log(err));  
}

addNewList.addEventListener("click", () => {
    toggle.classList.remove("invisible");
    toggle.classList.add("visible");
});


addBtn.addEventListener("click", async () => {
    console.log("hello world!")
    var text = listNameInput.value;
    var text2 = descriptInput.value;

    const newList = {
        list_name: text,
        list_descrip: text2,
    }
    let response = fetch("/masterlist", {
        method:'POST',
        headers:{'Content-Type': "application/json",
    
    },
    body:JSON.stringify(newList)
    }); 
});

