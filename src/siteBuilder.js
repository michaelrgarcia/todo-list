import icon1 from "./svgs/format-list-bulleted-square.svg";
import icon2 from "./svgs/information-variant-circle-outline.svg";
import icon3 from "./svgs/archive.svg";
import icon4 from "./svgs/calendar.svg";
import icon5 from "./svgs/calendar-arrow-right.svg";
import icon6 from "./svgs/star.svg";
import icon7 from "./svgs/check-bold.svg";
import icon8 from "./svgs/message-text-outline.svg";
import icon9 from "./svgs/star-outline.svg";
import icon10 from "./svgs/cog-outline.svg";
import icon11 from "./svgs/close-circle.svg"

//solve this when you're done with mostly everything
//ill probably represent the svgs folder as an array in sep. module

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

    const text = document.createElement("p");
    text.id = "header-text"
    text.textContent = "To-Do List";

    const info = elementCrafter.icon(icon2);

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
        
            for (let i = 0; i < 5; i++) {
                let tab = document.createElement("li");
                let tabText = document.createElement("p");
        
                let path;
        
                switch (i) {
                    case 0:
                        path = icon3;
                        tabText.textContent = "All Tasks";
                        break;
                    case 1:
                        path = icon4;
                        tabText.textContent = "Today";
                        break;
                    case 2: 
                        path = icon5;
                        tabText.textContent = "7 Days";
                        break;
                    case 3:
                        path = icon6;
                        tabText.textContent = "Starred";
                        break;
                    case 4:
                        path = icon7;
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
    clearFormChangeTitle("Add Project");
    const formElement = document.querySelector("form > ul");

    const projectTitle = elementCrafter.textField("Title:", "project-title");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.classList.add("submit-project");
    submitButton.textContent = "Done";

    formElement.append(projectTitle, submitButton);
}
