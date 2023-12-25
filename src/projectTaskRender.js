import { createProject, createTask } from "./siteLogic";
import elementCrafter from "./craftingTable";

const projects = [];
const domProjectTitle = document.querySelector(".project-name");

const test = createProject("hello", true);
const test2 = createProject("testing", true);
const testTask = createTask("imtest", "hello", "im a test task", "12/23/23", false);
test.tasks.push(testTask);
projects.push(test, test2);

function updateProjects() {
    const projectsDomMenu = document.querySelector("#projects-menu > ul");
    if (projectsDomMenu) projectsDomMenu.replaceChildren();

    projects.forEach((project) => {
        elementCrafter.domProject(project.title);
    });
}

function updateTasks() {
    const tasks = document.getElementById("tasks");
    if (tasks) tasks.replaceChildren();
    projects.forEach((project) => {
        project.tasks.forEach((task) => {
            elementCrafter.domTask(task.title);
        });
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

export function updateScreen() {
    updateProjects();
    updateTasks();
}


