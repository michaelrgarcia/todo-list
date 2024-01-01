import { createProject, createTask, getProjects } from "./siteLogic";
import elementCrafter from "./craftingTable";

const projects = getProjects();

const allTaskProject = projects[0];

function domProjectSwitch(project) {
    const addTaskBtn = document.getElementById("add-task");
    const domProjectTitle = document.querySelector(".project-name");

    if (project === projects[0]) {
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
}

function getTaskFromDialog() {
    const dialogForm = document.querySelector("dialog");

    const taskNum = dialogForm.dataset.tnum;
    const task = getTask(taskNum);

    return task;
}

function getParentProject(task) {
    const fullNumber = task.split(".");
    const projectNumber = fullNumber[0];

    const project = projects.find((project) => project === projects[projectNumber]);

    return project;
}

function confirmChanges(taskValue, domValue, update) {
    const task = getTaskFromDialog();

    const parentProjectIndex = getParentProjectIndex(task);
    const project = projects.find((project) => project === projects[parentProjectIndex]); 

    const dialogForm = document.querySelector("dialog");
    
    if (taskValue !== domValue) {
        let confirmation = confirm("Confirm Changes");

        if (confirmation === true) {
            taskValue = domValue;

            dialogForm.close();
            if (update) {
                updateTasks(project);
            }
        }
    } else {
        dialogForm.close();
    }
}

export function updateProjects() {
    const projectsDomMenu = document.querySelector("#projects-menu > ul");
    projectsDomMenu.replaceChildren();

    projects.forEach((project, index) => {
        if (index > 0) {
            elementCrafter.domProject(project.title, index);
        }
    });
}

export function updateTasks(project) {
    const tasksMenu = document.getElementById("tasks");
    tasksMenu.replaceChildren();

    project.tasks.forEach((task) => {
        const parentIndex = projects.indexOf(project);
        const taskIndex = projects[parentIndex].tasks.findIndex((desiredTask) => desiredTask.number === task.number);

        task.number = taskIndex;

        if (task.starred) {
            let star = true;

            elementCrafter.domTask(task.title, task.parentProject, project.title, taskIndex, parentIndex, star);
        } else {
            elementCrafter.domTask(task.title, task.parentProject, project.title, taskIndex, parentIndex);
        }
    });
}

export function domCreateTask() {
    const title = document.getElementById("task-title");
    const details = document.getElementById("task-details");
    const due = document.getElementById("task-due");

    const selectedProject = projects.find((project) => project.selected === true);

    const dialogForm = document.querySelector("dialog");

    if (title.value !== "") {
        const newTask = createTask(title.value, details.value, due.value, false, selectedProject.title);
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

    const parentProject = getParentProject(taskNum);

    if (task.starred) {
        task.starred = false;
    } else {
        task.starred = true;
    }

    updateTasks(parentProject);
}

export function changeDialogTaskNum(taskNum) {
    const dialogForm = document.querySelector("dialog");

    dialogForm.setAttribute("data-tnum", taskNum);
}

export function displayTaskTitle() {
    const domTaskTitle = document.getElementById("new-task-title");
    const dialogForm = document.querySelector("dialog");

    const task = getTaskFromDialog();

    domTaskTitle.value = task.title;
}

export function submitTaskTitle() {
    const dialogForm = document.querySelector("dialog");
    const domTaskTitle = document.getElementById("new-task-title");

    const taskNum = dialogForm.dataset.tnum;
    const task = getTaskFromDialog();

    const project = getParentProject(taskNum);

    if (task.title !== domTaskTitle.value) {
        let confirmation = confirm("Confirm Changes");

        if (confirmation === true) {
            task.title = domTaskTitle.value;

            dialogForm.close();
            updateTasks(project);
        }
    } else {
        dialogForm.close();
    }
}

//final features are the sorting of the tasks in All tasks, and all the other date filters/others.
