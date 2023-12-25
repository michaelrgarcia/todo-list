import { header, main, dialog, addTaskPrompt, addProjectPrompt } from "./siteBuilder.js";
import { displayDefault, updateProjects, updateTasks, domCreateTask, selectProject } from "./projectTaskRender.js";

const content = document.getElementById("content");
content.append(header(), main(), dialog());

displayDefault();

window.addEventListener("click", function(event) {
    const dialogSelector = document.querySelector("dialog");

    if (event.target.dataset.pnum) {
        selectProject(event.target.dataset.pnum);
    }
    if (event.target.id === "add-task") {
        dialogSelector.showModal();
        addTaskPrompt();
    }
    if (event.target.className === "submit-task") {
        domCreateTask();
    }
    if (event.target.id === "add-project") {
        dialogSelector.showModal();
        addProjectPrompt();
    }
    if (event.target.className === "submit-project") {

    }
    if (event.target.className === "svg close-dialog") {
        dialogSelector.close();
    }
}); 

updateProjects();