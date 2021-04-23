// Global declarations
let asideListEvents = document.getElementById("asideListEvents");
let asideListEventsLi = document.querySelectorAll("#asideListEvents li");
//console.log(asideListEventsLi);
let asideListFunctionsLi = document.querySelectorAll("#asideListFunctions li");
//console.log(asideListFunctionsLi);
let asideListFunctions = document.getElementById("asideListFunctions");
let eventsTitle = document.getElementById("h3-title-events");
let functionsTitle = document.getElementById("h3-title-functions");
let containedSections = document.querySelectorAll(".s-container");

//Convirtiendo un NodeList a un Array para iterar en el, aunque...
let arrayEventsLi = Array.from(asideListEventsLi);
for (let x = 0; x < arrayEventsLi.length; x++) {
  arrayEventsLi[x].setAttribute("id", `event-li-${x + 1}`);
  arrayEventsLi[x].addEventListener("click", focusOnClick);
}
// Tambien puedo iterar con un bucle a un NodeList como si fuese un Array
for (let i = 0; i < asideListFunctionsLi.length; i++) {
  asideListFunctionsLi[i].setAttribute(
    "id",
    `function-li-${i + 1 + arrayEventsLi.length}`
  );
  asideListFunctionsLi[i].addEventListener("click", focusOnClick);
}

//Con esto pongo Ids a cada contenedor de los ejercicios
for (let m = 0; m < containedSections.length; m++) {
  if (m < asideListEventsLi.length) {
    containedSections[m].setAttribute("id", `event-${m + 1}`);
  } else if (m >= asideListEventsLi.length) {
    containedSections[m].setAttribute("id", `functions-${m + 1}`);
  }
}

function focusOnClick() {
  console.log("hola");
}

// Listeners
eventsTitle.addEventListener("click", () => {
  asideListEvents.classList.toggle("displayNone");
});

functionsTitle.addEventListener("click", () => {
  asideListFunctions.classList.toggle("displayNone");
});

// Declared functions

// executed Functions
