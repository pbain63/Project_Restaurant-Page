// src/index.js
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";

const contentDiv = document.getElementById("content");

function render(page) {
  contentDiv.textContent = "";
  contentDiv.appendChild(page);
}

render(loadHome());

const homeClick = document.getElementById("home");
const menuClick = document.getElementById("menu");
const contactClick = document.getElementById("contact");

homeClick.addEventListener("click", () => render(loadHome()));
menuClick.addEventListener("click", () => render(loadMenu()));
contactClick.addEventListener("click", () => render(loadContact()));
