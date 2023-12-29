import { createProject, createTask } from "./siteLogic";
import elementCrafter from "./craftingTable";

const projects = [];

const allTaskProject = createProject("All Tasks", true);

projects.push(allTaskProject);

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

    project.tasks.forEach((task, index) => {
        task.number = index;
        elementCrafter.domTask(task.title, task.parentProject, project.title, index);
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
        if (project.title !== projectToSelect.title) {
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

    projects.forEach((project) => {
        project.tasks.forEach((task) => {
            if (task.number == taskNum) {
                domTaskDetails.textContent = task.details;
            }
        })
    })
}


