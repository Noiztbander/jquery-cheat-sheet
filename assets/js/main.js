/* *******************
 * GLOBAL DECLARATIONS
 * *******************
 */

let asideListEvents = document.getElementById("asideListEvents");
let asideListEventsLi = document.querySelectorAll("#asideListEvents li");
//console.log(asideListEventsLi);
let asideListFunctionsLi = document.querySelectorAll("#asideListFunctions li");
//console.log(asideListFunctionsLi);
let asideListFunctions = document.getElementById("asideListFunctions");
let eventsTitle = document.getElementById("h3-title-events");
let functionsTitle = document.getElementById("h3-title-functions");
let containedSections = document.querySelectorAll(".s-container");
let sectionDivs = document.querySelectorAll(".div-article-grid");

/* ****************************
 * LISTENERS AND ID ASSIGNATION
 * ****************************
 */

eventsTitle.addEventListener("click", () => {
  asideListEvents.classList.toggle("displayNone");
  asideIcon();
});

functionsTitle.addEventListener("click", () => {
  asideListFunctions.classList.toggle("displayNone");
  asideIcon();
});

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

/* ******************
 * DECLARED FUNCTIONS
 * ******************
 */

function focusOnClick() {
  // Esto te pesca el id del listener que sea clickeado y lo almacenamos
  let targetId = event.target.id;
  //console.log(targetContainer);
  if (targetId.indexOf("event") !== -1) {
    //si el id contiene la palabra "evento", nos devolverá 0 o otro indice ya que SÍ ha encontrado esa palabra. Si el condicional nos devuelve -1, significará que NO la ha encontrado. Estudiar indexOf por si no entiendes.
    let x = targetId.substr(9, 2);
    let sectionToScroll = document.getElementById(`event-${x}`);
    let divToAnimate = sectionToScroll.querySelector("div");
    sectionToScroll.scrollIntoView({ block: "center", behavior: "smooth" });

    //Animo la entrada del Div seleccionado, dandole una clase, pero leugo de 2s la elimino
    divToAnimate.classList.add("selectedLi");
    setTimeout(() => {
      divToAnimate.classList.remove("selectedLi");
    }, 1000);
  } else if (targetId.indexOf("function") !== -1) {
    let x = targetId.substr(12, 2);
    let sectionToScroll = document.getElementById(`functions-${x}`);
    let divToAnimate = sectionToScroll.querySelector("div");
    sectionToScroll.scrollIntoView({ block: "center", behavior: "smooth" });

    //Animo la entrada del Div seleccionado, dandole una clase, pero leugo de 2s la elimino
    divToAnimate.classList.add("selectedLi");
    setTimeout(() => {
      divToAnimate.classList.remove("selectedLi");
    }, 1000);
  }

  animSelected();
}

function animSelected() {
  let targetLi = event.target;

  //Ejecuto la animación solo al seleccionado
  asideListEventsLi.forEach((element) => {
    if (element == targetLi) {
      element.classList.add("selectedLi");
    } else {
      element.classList.remove("selectedLi");
    }
  });

  asideListFunctionsLi.forEach((element) => {
    if (element == targetLi) {
      element.classList.add("selectedLi");
    } else {
      element.classList.remove("selectedLi");
    }
  });
}

function asideIcon() {
  let asideHeight = document.querySelector(".aside");
  let navHeight = document.querySelector(".aside .nav");
  let arrowIcon = document.querySelector(".asideArrow");

  if (navHeight.clientHeight > asideHeight.clientHeight) {
    arrowIcon.style.display = "block";
  } else {
    arrowIcon.style.display = "none";
  }
}

/* ******************
 * EXECUTED FUNCTIONS
 * ******************
 */
