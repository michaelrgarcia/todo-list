import icon1 from "./svgs/format-list-bulleted-square.svg";
import icon2 from "./svgs/information-variant-circle-outline.svg";
import elementCrafter from "./craftingTable";

function header() {
    const mainElement = document.createElement("header");

    const dropdown = elementCrafter.icon(icon1);

    const text = document.createElement("p");
    text.id = "header-text"
    text.textContent = "To-Do List";

    const info = elementCrafter.icon(icon2);

    mainElement.append(dropdown, text, info);

    return mainElement;
}

export default header();