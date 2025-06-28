let taskInput = document.querySelector("#addTask");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");


addBtn.addEventListener("click", addTaskFunction)           //Adding task on clicking add button by callback
window.addEventListener("load", loadTaskFromLocalStorage)   //Loading task from local storage when page is refreshed

function addTaskFunction(){                             //Add function task
    const taskText = taskInput.value.trim();
    if(!taskText) return;


    const newKey =  `Task${Date.now()}`;
    createAndAddTaskList(taskText, newKey);                        //Calling Function to add task by taking input
    localStorage.setItem(newKey,taskText);
    taskInput.value = '';
}


function loadTaskFromLocalStorage(){
    let loadTask;
    let arr =[];
    if(localStorage.length===0){
        return;
    }
    for(let i=0; i<localStorage.length; i++){             //Looping Through saved taskes in local stoarge
        const key = localStorage.key(i);
        arr[i] = key;
    } 
    arr.sort();
    arr.forEach((val)=>{
        loadTask = localStorage.getItem(val);           
        const temp = val;                           //checking if its a checkbox id and avoiding if true
        if(temp.slice(0,8) === "checkbox"){         
            return;
        }
        createAndAddTaskList(loadTask, val);   
    })

}

function createAndAddTaskList(task, taskID){                      //Function to add task by taking input
    const li = document.createElement("li");                      //Creating a list 
    li.classList.add("listClass");
    li.id = taskID;
    

    const checkBox = document.createElement("input");   //Creating checkbox element
    checkBox.type = "checkbox"
        checkBox.addEventListener("change",()=>{        //Checking if task is completed or not
            if(checkBox.checked){
                li.classList.add("taskCompleted");
                localStorage.setItem(`checkbox${taskID}Status`, checkBox.checked );
            }
            else{
                li.classList.remove("taskCompleted");
                localStorage.setItem(`checkbox${taskID}Status`, checkBox.checked );
            }
        })
        checkBox.classList.add("checkBoxStyle");

        const checkboxStatus = localStorage.getItem(`checkbox${taskID}Status`);         //Checking the value of checkbox to keep checkbox checked after refresh
        if (checkboxStatus === "true") {
            checkBox.checked = true;
            li.classList.add("taskCompleted");
        }

    const label = document.createElement("label");      //Creating label to set our task
    label.innerText = task;
    label.classList.add("taskText");

    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtnStyle");
    deleteBtn.addEventListener("click",()=>{
        deleteTask(taskID);
    })

    const ruler = document.createElement("hr");         //Adding horizontal Ruler 
    ruler.classList.add("hrClass");

    li.appendChild(checkBox);                           //Appending checkbox and list 
    li.appendChild(label);
    li.appendChild(deleteBtn);
    li.appendChild(ruler);
    taskList.appendChild(li);
}


function deleteTask(taskID){                                    //function to remove tasks from local storage on deletion with their chechbox 
    localStorage.removeItem(taskID);
    localStorage.removeItem(`checkbox${taskID}Status`); 
    document.getElementById(taskID)?.remove();                  //removing deleted task from the DOM

    
}