let container = document.createElement("div")
let p = document.createElement('p')

const list = document.getElementById('myDiv')


function addTask(){
    const task = document.getElementById('in').value
    if (task == ""){
        return
    }
    const taskContainer = document.createElement('div')

    let newTask = document.createElement('p')
    const node = document.createTextNode(task);
    newTask.appendChild(node)

    const button = document.createElement('button')
    button.textContent = 'delete'
    button.className = "knopka"
    button.addEventListener("click", (e) => {
        list.removeChild(taskContainer)
    })

    taskContainer.style = "display: flex;border: 1px solid black;border-radius: 5px;"
    taskContainer.className = taskContainer;

    const checkBox = document.createElement('input')
    checkBox.type="checkbox"
    checkBox.addEventListener("change", (e) => { 
        console.log(e.target)
        if(e.target.checked){
            newTask.style = "text-decoration:line-through;"
        }else{
            newTask.style = "text-decoration:none;"
        }
    })

    taskContainer.appendChild(checkBox)
    taskContainer.appendChild(newTask)
    taskContainer.appendChild(button)
    document.getElementById('in').value = ""
    

    list.appendChild(taskContainer)
}

  