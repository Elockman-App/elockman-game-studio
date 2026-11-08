"use strict";

const languageButtons = document.querySelectorAll("[data-language]");
const copyElements = document.querySelectorAll("[data-copy-tr][data-copy-en]");

function setLanguage(language) {
  if (language !== "tr" && language !== "en") return;

  document.documentElement.lang = language;
  copyElements.forEach((element) => {
    element.textContent = element.getAttribute("data-copy-" + language) || "";
  });

  languageButtons.forEach((button) => {
    const active = button.getAttribute("data-language") === language;
    button.setAttribute("aria-pressed", String(active));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.getAttribute("data-language"));
  });
});

setLanguage("tr");
