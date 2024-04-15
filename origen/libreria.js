export function createElement(element, attributes = {}, hijos = []) {
    const elem = document.createElement(element);
    let keys = Object.keys(attributes);
    keys.map(k => elem.setAttribute(k, attributes[k]))

    hijos.map(h => {
        if (typeof h === "string") {
            elem.innerHTML += h;
            return;
        }
        elem.appendChild(h)
    })

    return elem;
}

export function render(content, rootElement) {
    let rootElem = document.getElementById(rootElement);
    rootElem.appendChild(content)
}