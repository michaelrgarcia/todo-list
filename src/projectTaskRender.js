import { createProject, createTask } from "./siteLogic";
import elementCrafter from "./craftingTable";

const projects = [];

const allTaskProject = createProject("All Tasks", true);

projects.push(allTaskProject);

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

export function domCreateTask() {
    const title = document.getElementById("task-title");
    const details = document.getElementById("task-details");
    const due = document.getElementById("task-due");

    const selectedProject = projects.find((project) => project.selected === true);

    const dialogForm = document.querySelector("dialog");

    if (title.value !== "") {
        const newTask = createTask(title.value, details.value, "", due.value, false);
        selectedProject.tasks.push(newTask);
        allTaskProject.tasks.push(newTask);
        //add little grey text specifying which project the task is from
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


