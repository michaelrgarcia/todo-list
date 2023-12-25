import { header, main, dialog, addTaskPrompt, addProjectPrompt } from "./siteBuilder.js";
import { updateProjects, updateTasks, domCreateTask, selectProject, domCreateProject } from "./projectTaskRender.js";

const content = document.getElementById("content");
content.append(header(), main(), dialog());

selectProject(0); //selects "All Tasks" project

window.addEventListener("click", function(event) {
    const dialogSelector = document.querySelector("dialog");

    if (event.target.className === "all-tasks") {
        selectProject(0);
    }
    if (event.target.dataset.pnum) {
        selectProject(event.target.dataset.pnum);
    }
    if (event.target.id === "add-task") {
        dialogSelector.showModal();
        addTaskPrompt();
    }
    if (event.target.id === "add-project") {
        dialogSelector.showModal();
        addProjectPrompt();
    }
    if (event.target.className === "submit-task") {
        domCreateTask();
    }
    if (event.target.className === "submit-project") {
        domCreateProject();
    }
    if (event.target.className === "svg close-dialog") {
        dialogSelector.close();
    }
}); 

updateProjects();