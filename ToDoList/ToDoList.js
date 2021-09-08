const addTaskBtn = document.getElementById('todo-add-btn-tast');
const descriptionTaskInput = document.getElementById('description-task');
const todosTasksWrapper = document.querySelector('.todos__tasks--wrapper');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElems = [];

function Task(description) {
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return `
            <div class="todo__item ${task.completed ? 'checked' : ''}">
                <div class="description">
                    <input onclick="complatedTask(${index})" class="btn__complate" type="checkbox" ${task.completed ? 'checked' : ''}>
                    <p>${task.description}</p>
                </div>
                <div class="buttons__task-completion">
                    <button onclick="deleteTask(${index})" class="btn__delete">Delete</button>
                </div>
            </div>
        `;
};

const filterTasks = () => {
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const complitedTasks = tasks.length && tasks.filter(item => item.completed == true);
    tasks = [...activeTasks, ...complitedTasks];
};

const addTaskToList = () => {
    todosTasksWrapper.innerHTML = "";
    if (tasks.length > 0) {
        filterTasks();
        tasks.forEach((item, index) => {
            todosTasksWrapper.innerHTML += createTemplate(item, index)
        });
        todoItemElems = document.querySelectorAll('.todo__item')
    }
};
addTaskToList();

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const complatedTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        todoItemElems[index].classList.add('checked');
    } else {
        todoItemElems[index].classList.remove('checked')
    }

    updateLocal();
    addTaskToList();
};


addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(descriptionTaskInput.value));
    updateLocal();
    addTaskToList();
    descriptionTaskInput.value = '';
});

const deleteTask = index => {
    todoItemElems[index].classList.add('delition')
    setTimeout(() => {
        tasks.splice(index, 1);
        updateLocal();
        addTaskToList();
    }, 500);
};