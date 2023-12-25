import { createProject, createTask } from "./siteLogic";
import elementCrafter from "./craftingTable";

const projects = [];

const allTaskProject = createProject("All Tasks", true);

const test2 = createProject("testing", false);
const testTask = createTask("imtest", "hello", "im a test task", "12/23/23", false);

allTaskProject.tasks.push(testTask);

projects.push(allTaskProject, test2);

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
        elementCrafter.domTask(task.title);
    });
}

export function displayDefault() {
    const checkElement = async selector => {
        while ( document.querySelector(selector) === null) {
            await new Promise( resolve => requestAnimationFrame(resolve) )
        }
        return document.querySelector(selector);
    }

    projects.forEach((project) => {
        if (project.isDefault) {
            checkElement(".project-name").then((selector) => {
                selector.textContent = "hi";
            });
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
        const newTask = createTask(title.value, details.value, "", due.value, false);
        selectedProject.tasks.push(newTask);
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
    const domProjectTitle = document.querySelector(".project-name");
    let projectToSelect = projects[projectNum];

    projects.forEach((project) => {
        project.selected = false;
    })

    projectToSelect.selected = true;

    domProjectTitle.textContent = projectToSelect.title;

    updateTasks(projectToSelect);
}


