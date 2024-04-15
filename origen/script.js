// Necesario colocar la extensión JS para que se importe el modulo `libreria.js`
import { createElement, render } from "./libreria.js";

const Link = createElement("a", { "class": "link", "href": "/hola" }, ["Hola"])
const Link2 = createElement("a", { "class": "link", "href": "/hola2" }, ["Hola2"])
const Link3 = createElement("a", { "class": "link", "href": "/hola3" }, ["Hola3"])
const Header = createElement("header", { "id": "myID", "class": "main-header header" }, [Link, Link2, Link3]);
render(Header, "root");