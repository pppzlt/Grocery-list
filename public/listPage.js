const addNewList = document.getElementById("addNewList")
console.log(addNewList);

// on page boot up render lists
// on click button add new list
// delete liston click trashcan
// on click edit - edit names of list

addNewList.addEventListener('click', () => {
    addElement();
});
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
// addNewList.addEventListener('click', () => {
//     addElement();
// });

// function addElement() {
//     console.log("Hello!");
//     const doc = document.createElement('div');
//     doc.innerHTML = `<div class="card d-flex justify-content-center col-6">
//     <div class="card-body d-flex justify-content-between shadow">
//         <div>
//             <h5 class="card-title">Weekly List</h5>
//             <h6 class="card-subtitle mb-2 text-muted"></h6>
//         </div>
//         <div class = "d-flex flex-column justify-content-center">
//             <span class="material-symbols-outlined px-3">
//                     edit_note
//             <a href="#" class="card-link">
//                 <span class="material-symbols-outlined">
//                     add_shopping_cart
//                 </span>
//             </a>
//         </div>
//     </div>
// </div>` 
//     const container = document.querySelector('#parent-div');
//     container.appendChild(doc);
// }