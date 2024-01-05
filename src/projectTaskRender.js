import { createProject, createTask, getProjects } from "./siteLogic";
import elementCrafter from "./craftingTable";

const projects = getProjects();

const allTaskProject = projects[0];
const starredTasks = projects[1];
const completedTasks = projects[2];

function domProjectSwitch(project) {
    const addTaskBtn = document.getElementById("add-task");
    const domProjectTitle = document.querySelector(".project-name");

    const pIndex = projects.indexOf(project);
    
    if (pIndex < 3) {
        addTaskBtn.style.display = "none";
    } else {
        addTaskBtn.style.display = "block";
    }

    domProjectTitle.textContent = project.title;
}

function getTask(task) {
    const fullNumber = task.split(".");
    const projectNumber = fullNumber[0];
    const taskNumber = fullNumber[1];

    const desiredTask = projects[projectNumber].tasks[taskNumber];

    return desiredTask;
    //fix this function, it doesn't take kindly to completed tasks
}

function getTaskFromDialog() {
    const dialogForm = document.querySelector("dialog");

    const taskNum = dialogForm.dataset.tnum;
    const task = getTask(taskNum);

    return task;
}

export function updateProjects() {
    const projectsDomMenu = document.querySelector("#projects-menu > ul");
    projectsDomMenu.replaceChildren();

    projects.forEach((project, index) => {
        if (index > 2) {
            elementCrafter.domProject(project.title, index);
        }
    });
}

export function updateTasks(project) {
    const tasksMenu = document.getElementById("tasks");
    tasksMenu.replaceChildren();

    project.tasks.forEach((task) => {
        const parentIndex = task.ppIndex;
        const taskIndex = projects[parentIndex].tasks.findIndex((desiredTask) => desiredTask.number === task.number);

        if (task.starred && !task.completed) {
            let star = true;

            task.number = taskIndex;

            elementCrafter.domTask(task.title, task.parentProject, project.title, taskIndex, parentIndex, star);
        } else if (!task.starred && !task.completed) {
            elementCrafter.domTask(task.title, task.parentProject, project.title, taskIndex, parentIndex);

            task.number = taskIndex;
        }

        if (task.completed) {
            console.log(task.details);
            elementCrafter.domCompletedTask(task.title, task.parentProject, parentIndex, task.number);
        }
    });
}

export function domCreateTask() {
    const title = document.getElementById("task-title");
    const details = document.getElementById("task-details");
    const due = document.getElementById("task-due");

    const selectedProject = projects.find((project) => project.selected === true);
    const selectedProjectIndex = projects.findIndex((project) => project.selected);

    const dialogForm = document.querySelector("dialog");

    if (title.value !== "") {
        const newTask = createTask(title.value, details.value, due.value, false, selectedProject.title, "0", selectedProjectIndex, false);
        selectedProject.tasks.push(newTask);
        allTaskProject.tasks.push(newTask);
        dialogForm.close();
        updateTasks(selectedProject);
    }
}

export function domCreateProject() {
    const title = document.getElementById("project-title");

    const dialogForm = document.querySelector("dialog");

    if (title.value !== "") {
        const newProject = createProject(title.value, false);
        projects.push(newProject);
        dialogForm.close();
        updateProjects();
    }
}

export function selectProject(projectNum) {
    let projectToSelect = projects[projectNum];

    projects.forEach((project) => {
        if (project !== projectToSelect) {
            project.selected = false;
        } else {
            project.selected = true;
        }
    });

    domProjectSwitch(projectToSelect);
    
    updateTasks(projectToSelect);
}

export function displayDetails(taskNum) {
    const domTaskDetails = document.getElementById("task-details");
    const dialogForm = document.querySelector("dialog");

    const task = getTask(taskNum);

    dialogForm.setAttribute("data-tnum", taskNum);

    domTaskDetails.textContent = task.details;
}

export function submitDetails() {
    const dialogForm = document.querySelector("dialog");
    const domTaskDetails = document.getElementById("task-details");

    const task = getTaskFromDialog();

    if (task.details !== domTaskDetails.value) {
        let confirmation = confirm("Confirm Changes");

        if (confirmation === true) {
            task.details = domTaskDetails.value;

            dialogForm.close();
        }
    } else {
        dialogForm.close();
    }
}

export function starTask(taskNum) {
    const task = getTask(taskNum);

    const selectedProject = projects.find((project) => project.selected === true);

    if (task.starred) {
        task.starred = false;
        starredTasks.tasks.splice(task.number, 1);
    } else {
        task.starred = true;
        starredTasks.tasks.push(task);
    }

    updateTasks(selectedProject);
}

export function changeDialogTaskNum(taskNum) {
    const dialogForm = document.querySelector("dialog");

    dialogForm.setAttribute("data-tnum", taskNum);
}

export function displayTaskTitle() {
    const domTaskTitle = document.getElementById("new-task-title");

    const task = getTaskFromDialog();

    domTaskTitle.value = task.title;
}

export function submitTaskTitle() {
    const dialogForm = document.querySelector("dialog");
    const domTaskTitle = document.getElementById("new-task-title");

    const task = getTaskFromDialog();

    const selectedProject = projects.find((project) => project.selected === true);
    
    if (task.title !== domTaskTitle.value) {
        let confirmation = confirm("Confirm Changes");

        if (confirmation === true) {
            task.title = domTaskTitle.value;

            dialogForm.close();
            updateTasks(selectedProject);
        }
    } else {
        dialogForm.close();
    }
}

export function deleteTask() {
    const dialogForm = document.querySelector("dialog");

    const task = getTaskFromDialog();
    const project = projects[task.ppIndex];

    let confirmation = confirm("Confirm Delete Task");

    if (confirmation === true) {
        projects.forEach((project) => {
            project.tasks.forEach((taskToDelete) => {
                if (taskToDelete.number === task.number && 
                    taskToDelete.ppIndex === task.ppIndex ) {
                        project.tasks.splice(taskToDelete.number, 1);
                }
            });
        });

        updateTasks(project);

        dialogForm.close();
    } else {
        dialogForm.close();
    }
}

export function completeTask(taskNum) {
    const task = getTask(taskNum);
    const selectedProject = projects.find((project) => project.selected === true);

    let confirmation = confirm("Confirm Complete Task");

    if (confirmation === true) {
        task.completed = true;
        completedTasks.tasks.push(task);

        projects.forEach((project) => {
            if (project !== completedTasks) {
                project.tasks.forEach((task) => {
                    project.tasks.splice(task.number, 1);
                });
            }
        });
    }

    updateTasks(selectedProject);
}

//to do 

//make the task check boxes work

//add "completed" property
//under the task checkbox function, push the selected task to the completed project

//and... put the due date under the details prompt
//when the date comes (or is near possibly), change the color of the task to yellow or red depending on how far it is
