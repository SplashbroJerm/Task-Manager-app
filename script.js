//global variable and will create an empty array with name tasks

let tasks=[];

//add task function
function addTask(){
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    console.log(task);

    if (task !== ''){
        tasks.push(task);
        console.log(tasks);
        input.value='';
        displayTask();
    }
}


//remove task ---- delet button
function removeTask(index){
    tasks.splice(index,1);
    displayTask();
}



//display tasks
function displayTask(){
    const taskList = document.getElementById('taskList');
    let html ='';
    for(let i=0; i<tasks.length; i++){
        html += `
            <div class ="task-item">
                <span class="task-text"> ${i+1}. ${tasks [i]}</span>
                <div class="button-group">
                    <button class="delete-btn" onclick="removeTask()">Delete</button>
                </div>
            </div>
        
        
        
        
        `;
    }
    taskList.innerHTML = html;
}