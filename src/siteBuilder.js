import icon1 from "./svgs/format-list-bulleted-square.svg";
import icon2 from "./svgs/information-variant-circle-outline.svg";
import icon3 from "./svgs/archive.svg";
import icon6 from "./svgs/star.svg";
import icon7 from "./svgs/check-bold.svg";
import icon11 from "./svgs/close-circle.svg"

import elementCrafter from "./craftingTable";

function clearFormChangeTitle(newTitle) {
    const formElement = document.querySelector("form > ul");
    const title = document.querySelector(".dialog-heading > p ");

    title.textContent = newTitle;
    formElement.replaceChildren();
}

export function header() {
    const mainElement = document.createElement("header");

    const dropdown = elementCrafter.icon(icon1);
    dropdown.classList.add("toggle-nav");

    const text = document.createElement("p");
    text.id = "header-text"
    text.textContent = "To-Do List";

    const info = elementCrafter.icon(icon2);
    info.classList.add("site-info");

    mainElement.append(dropdown, text, info);

    return mainElement;
}

export function main() {
    const mainElement = document.createElement("main");

    function sidebar() {
        const sidebar = document.createElement("nav");

        function filterTasks() {
            const filterTasks = document.createElement("div");
            filterTasks.id = "filter-tasks";
        
            const filterTasksHeader = document.createElement("p");
            filterTasksHeader.classList.add("nav-header");
            filterTasksHeader.textContent = "Filter Tasks";
        
            const filterTasksList = document.createElement("ul");
        
            for (let i = 0; i < 3; i++) {
                let tab = document.createElement("button");
                tab.type = "button";
                let tabText = document.createElement("p");
        
                let path;
        
                switch (i) {
                    case 0:
                        path = icon3;
                        tabText.textContent = "All Tasks";
                        tab.classList.add("all-tasks");
                        break;
                    case 1:
                        path = icon6;
                        tabText.textContent = "Starred";
                        tab.classList.add("starred-tasks");
                        break;
                    case 2:
                        path = icon7;
                        tab.classList.add("completed-tasks");
                        tabText.textContent = "Completed";
                }
        
                let tabIcon = elementCrafter.icon(path);
        
                tab.append(tabIcon, tabText);
                filterTasksList.append(tab);
            }
        
            filterTasks.append(filterTasksHeader, filterTasksList);
            
            return filterTasks;
        }

        function projectsMenu() {
            const projectsMenu = document.createElement("div");
            projectsMenu.id = "projects-menu";
        
            const projectsMenuHeader = document.createElement("p");
            projectsMenuHeader.classList.add("nav-header");
            projectsMenuHeader.textContent = "Projects";
        
            const projectsMenuList = document.createElement("ul");
        
            const addProject = document.createElement("button");
            addProject.type = "button";
            addProject.id = "add-project";
            addProject.textContent = "Add project";
        
            projectsMenu.append(projectsMenuHeader, projectsMenuList, addProject);

            return projectsMenu;
        }
    
        sidebar.append(filterTasks(), projectsMenu());

        return sidebar;
    }

    function overview() {
        const overview = document.createElement("div");
        overview.id = "overview";
    
        const title = document.createElement("p");
        title.textContent = "PLACEHOLDER";
        title.classList.add("project-name");

        const tasks = document.createElement("ul");
        tasks.id = "tasks";

        const addTask = document.createElement("button");
        addTask.type = "button";
        addTask.id = "add-task";
        addTask.textContent = "Add task";

        overview.append(title, tasks, addTask);

        return overview;
    }

    mainElement.append(sidebar(), overview());

    return mainElement;
}

export function dialog() {
    const mainElement = document.createElement("dialog");

    const heading = document.createElement("div");
    heading.classList.add("dialog-heading");

    const headText = document.createElement("p");
    headText.textContent = "placeholder";

    const closeButton = elementCrafter.icon(icon11);
    closeButton.classList.add("close-dialog");

    heading.append(headText, closeButton);

    const dialogForm = document.createElement("form");
    dialogForm.method = "dialog";

    const formUl = document.createElement("ul");

    dialogForm.append(formUl);

    mainElement.append(heading, dialogForm);

    return mainElement;
}

export function addTaskPrompt() {
    const dialogSelector = document.querySelector("dialog");
    dialogSelector.showModal();

    clearFormChangeTitle("Add Task");
    const formElement = document.querySelector("form > ul");

    const taskTitle = elementCrafter.textField("Title:", "task-title");
    const taskDetails = elementCrafter.textAreaField("Details:", "task-details");
    const taskDueDate = elementCrafter.dateField("Due:", "task-due");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("submit-task");
    submitButton.textContent = "Done";

    formElement.append(taskTitle, taskDetails, taskDueDate, submitButton);
}

export function addProjectPrompt() {
    const dialogSelector = document.querySelector("dialog");
    dialogSelector.showModal();

    clearFormChangeTitle("Add Project");
    const formElement = document.querySelector("form > ul");

    const projectTitle = elementCrafter.textField("Title:", "project-title");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("submit-project");
    submitButton.textContent = "Done";

    formElement.append(projectTitle, submitButton);
}

export function detailsPrompt() {
    const dialogSelector = document.querySelector("dialog");
    dialogSelector.showModal();

    clearFormChangeTitle("Details");
    const formElement = document.querySelector("form > ul");

    const taskDetails = elementCrafter.textAreaField("", "task-details");
    
    const taskDue = elementCrafter.dateField("Due:", "task-due", "marginChange");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("confirm-details");
    submitButton.textContent = "Done";

    formElement.append(taskDetails, taskDue, submitButton);
}

export function settingsPrompt() {
    const dialogSelector = document.querySelector("dialog");
    dialogSelector.showModal();

    clearFormChangeTitle("Task Settings");
    const formElement = document.querySelector("form > ul");

    const renameTask = document.createElement("button");
    renameTask.type = "button";
    renameTask.classList.add("rename-task");
    renameTask.textContent = "Rename";

    const deleteTask = document.createElement("button");
    deleteTask.type = "button";
    deleteTask.classList.add("delete-task");
    deleteTask.textContent = "Delete";
    
    formElement.append(renameTask, deleteTask);
}

export function renamePrompt() {
    const dialogSelector = document.querySelector("dialog");
    dialogSelector.showModal();

    const formElement = document.querySelector("form > ul");
    formElement.replaceChildren();

    const newName = elementCrafter.textField("Title:", "new-task-title");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("confirm-new-task-title");
    submitButton.textContent = "Done";

    formElement.append(newName, submitButton);
}

export function projectSettingsPrompt() {
    const dialogSelector = document.querySelector("dialog");
    dialogSelector.showModal();

    clearFormChangeTitle("Project Settings");
    const formElement = document.querySelector("form > ul");

    const renameProject = document.createElement("button");
    renameProject.type = "button";
    renameProject.classList.add("rename-project");
    renameProject.textContent = "Rename";

    const deleteProject = document.createElement("button");
    deleteProject.type = "button";
    deleteProject.classList.add("delete-project");
    deleteProject.textContent = "Delete";
    
    formElement.append(renameProject, deleteProject);
}

export function projectRenamePrompt() {
    const dialogSelector = document.querySelector("dialog");
    dialogSelector.showModal();

    const formElement = document.querySelector("form > ul");
    formElement.replaceChildren();

    const newName = elementCrafter.textField("Title:", "new-project-title");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("confirm-new-project-title");
    submitButton.textContent = "Done";

    formElement.append(newName, submitButton);
}

export function infoPrompt() {
    const 
}