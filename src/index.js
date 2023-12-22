import { header, main, dialog, addTaskPrompt } from "./siteBuilder.js";
import { displayDefault, updateScreen, domCreateTask } from "./projectTaskRender.js";

const content = document.getElementById("content");
content.append(header(), main(), dialog());

const dialogSelector = document.querySelector("dialog");



displayDefault();

window.addEventListener("click", function(event) {
    if (event.target.id == "add-task") {
        dialogSelector.showModal();
        addTaskPrompt();
    }
    if (event.target.className === "svg close-dialog") {
        dialogSelector.close();
    }
    if (event.target.className === "submit-task") {
        domCreateTask();
    }
}); 

updateScreen();