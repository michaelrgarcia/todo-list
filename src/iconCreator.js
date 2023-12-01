function icon(path) {
    const create = function(path) {
        let svg = document.createElement("img");
        svg.src = path;
        svg.classList.add("svg");

        return svg;
    }

    return { path, create };
}

export default icon();