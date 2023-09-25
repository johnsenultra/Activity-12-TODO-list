const inputEl = document.querySelector('#todoInput');
const btnAdd = document.querySelector('#addTask');
const ulEl = document.querySelector('#taskList');

btnAdd.addEventListener('click',()=>{
    renderItem();
})

function renderItem(){
    const list = document.createElement("li");
    const input = document.createTextNode(inputEl.value);

    if(inputEl.value === ""){
        alert("Please input a task!");
    } else {
        list.appendChild(input);
        ulEl.appendChild(list);
    }
    inputEl.value = "";

    list.addEventListener('click', ()=>{
        list.classList.toggle('done');
    })

    const btn = document.createElement("button");
    const deleteBtn = document.createTextNode("X");

    btn.appendChild(deleteBtn);
    list.appendChild(btn);

    btn.addEventListener('click', ()=>{
        list.remove(input);
    })
}
