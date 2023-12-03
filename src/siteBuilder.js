import icon1 from "./svgs/format-list-bulleted-square.svg";
import icon2 from "./svgs/information-variant-circle-outline.svg";
import icon3 from "./svgs/archive.svg";
import icon4 from "./svgs/calendar.svg";
import icon5 from "./svgs/calendar-arrow-right.svg";
import icon6 from "./svgs/star.svg";
import icon7 from "./svgs/check-bold.svg";

//solve this when you're done with mostly everything
//ill probably represent the svgs folder as an array in sep. module

import elementCrafter from "./craftingTable";

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

    const sidebar = document.createElement("nav");

    //Filter Tasks

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

    //

    //Projects

    const projectsMenu = document.createElement("div");
    projectsMenu.id = "projects-menu";

    const projectsMenuHeader = document.createElement("p");
    projectsMenuHeader.classList.add("nav-header");
    projectsMenuHeader.textContent = "Projects";

    const projectsMenuList = document.createElement("ul");

    let amountOfProjects = 1;
    let projectName = "placeholder";

    for (let i = 0; i < amountOfProjects; i++) {
        let tab = document.createElement("li");
        let tabText = document.createElement("p");
        tabText.textContent = projectName;
        let tabIcon = elementCrafter.icon(icon1);

        tab.append(tabIcon, tabText);
        projectsMenuList.append(tab);
    }

    projectsMenu.append(projectsMenuHeader, projectsMenuList);

    //

    sidebar.append(filterTasks, projectsMenu);

    mainElement.append(sidebar);

    return mainElement;
}
