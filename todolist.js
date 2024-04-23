//button - event 
//list 선언? 

const todolist = document.querySelector("#todo-list"); //리스트
const todoinput = document.querySelector('#todo-input');//추가된 할일

const button = document.getElementById("add-todo"); //버튼
console.log(window.event);


button.onclick = function() {

    if (todoinput.value.trim() !== "" ){
        const newList = document.createElement('listbox'); //목록
        newList.innerText = todoinput.value;
        todoinput.value = '';

        const deleteButton = document.createElement('button');
        const checkButton = document.createElement('button');
        deleteButton.innerText = "X";
        checkButton.innerText = "V";

        deleteButton.onclick = function() {
                //console.log("test");
                todolist.removeChild(this.parentNode);
        }

        checkButton.onclick = function() {
            //console.log("test");
            const doneList = document.getElementById('done-list');
            doneList.appendChild(newList);
            newList.removeChild(deleteButton);
            newList.removeChild(checkButton);
        };
    
        newList.appendChild(deleteButton);
        newList.appendChild(checkButton);
        todolist.appendChild(newList); //newDiv를 자식요소(하위요소)로 넣어줌 > html은 tree형태.*/
        todolist.appendChild(doneList);
    }
}