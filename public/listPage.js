const addNewList = document.getElementById("addNewList")
console.log(addNewList);
// FUNCTION TO POPULATE NEW LIST
// CLICK EVENT LISTENER, IF Button is clicked, THEN new list is populated
addNewList.addEventListener('click', () => {
    addElement();
});
function addElement() {
    console.log("Hello!");
    const listData = getAllWeeklyLists();
    if (listData) {
        const listCont = document.getElementById('#parent-div')
        listData.map((elem , index) =>{
            console.log(elem, index);
            const doc = document.createElement('div');
            doc.setAttribute('id', elem.list_id)
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
        </div>` 
        })
    }
    const container = document.querySelector('#parent-div');
    container.appendChild(doc);
}
function getAllWeeklyLists() {
    fetch('/api/list/all').then((result) =>{
        console.log(result);
        if(!result.ok){
            console.log('Can not get list')
        }
        return result.json()
    }).then((value) => {
        console.log(value)
        return value;
    })
    .catch((err)=> console.log(err));


}
