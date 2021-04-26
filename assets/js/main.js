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
let main = document.querySelector("main");
let myjsExamples = document.querySelectorAll(".Js-ex");
let myjqueryExamples = document.querySelectorAll(".Jquery-ex");

// padding botton for the last example
let ultimoNiño = main.lastElementChild;
ultimoNiño.style.paddingBottom = "1%";

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

for (let x = 0; x < containedSections.length; x++) {
  let myDiv = document.createElement("div");
  myDiv.setAttribute("class", "myExample");
  myDiv.setAttribute("id", `js-${x + 1}`);
  myDiv.insertAdjacentHTML(
    "afterbegin",
    `<h4>Js Example</h4><p class="js-number-examples">${x + 1}</p>
   <button class = "btn" id="mybtnjs${x + 1}">The button</button>
   `
  );
  myjsExamples[x].appendChild(myDiv);
}

for (let x = 0; x < containedSections.length; x++) {
  let myDiv = document.createElement("div");
  myDiv.setAttribute("class", "myExample");
  myDiv.setAttribute("id", `jquery-${x + 1}`);
  myDiv.insertAdjacentHTML(
    "afterbegin",
    `<h4>Jquery Example</h4><p class="jquery-number-examples">${x + 1}</p>
   <button class = "btn" id="mybtnjquery${x + 1}">The button</button>
   `
  );
  myjqueryExamples[x].appendChild(myDiv);
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

document.addEventListener(
  "DOMContentLoaded",
  function () {
    js_2();
    jquery_2();

    js_3();
    jquery_3();

    js_4();
    jquery_4();

    js_5();
    jquery_5();

    js_6();
    jquery_6();

    js_7();
    jquery_7();

    js_8();
    jquery_8();

    js_9();
    jquery_9();

    js_10();
    jquery_10();

    js_11();
    jquery_11();

    js_12();
    jquery_12();

    js_13();
    jquery_13();
  },
  false
);

// function js_6() {
//   let myCodeDiv = document.getElementById("js-6");
//   let myDiv = document.createElement("div");

//   myDiv.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <p>Insert Text here</p>
//     `
//   );
//   myCodeDiv.appendChild(myDiv);
// }

/* **********
 * Exercise 2
 * **********
 */

function js_2() {
  document.getElementById("mybtnjs2").addEventListener("click", (event) => {
    event.target.innerHTML = "Clicks: " + event.detail;
  });
}

function jquery_2() {
  $("#mybtnjquery2").click(function () {
    $(this).slideUp();
  });
}

/* **********
 * Exercise 3
 * **********
 */

function js_3() {
  let btn = document.getElementById("mybtnjs3");

  btn.ondblclick = () => {
    btn.innerHTML = "I was double-clicked!";
  };
}

function jquery_3() {
  $("#mybtnjquery3").dblclick(function () {
    alert("The button was double-clicked");
  });
}

/* **********
 * Exercise 4
 * **********
 */

function js_4() {
  let myCodeDiv = document.getElementById("js-4");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <input id = "input-js-4" type="text" size="50" onkeypress="uniCharCode(event)" onkeydown="uniKeyCode(event)">

    <p>onkeypress - <span id="demo"></span></p>
    <p>onkeydown - <span id="demo2"></span></p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

function uniCharCode(event) {
  var char = event.which || event.keyCode;
  document.getElementById("demo").innerHTML =
    "The Unicode CHARACTER code is: " + char;
}

function uniKeyCode(event) {
  var key = event.keyCode;
  document.getElementById("demo2").innerHTML =
    "The Unicode KEY code is: " + key;
}

function jquery_4() {
  let myCodeDiv = document.getElementById("jquery-4");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    Enter your name: <input id="input-jquery-4" type="text">

    <p>Keypresses: <span id="span-jquery-4">0</span></p>
    `
  );
  myCodeDiv.appendChild(myDiv);

  i = 0;
  $(document).ready(function () {
    $("#input-jquery-4").keypress(function () {
      $("#span-jquery-4").text((i += 1));
    });
  });
}

/* **********
 * Exercise 5
 * **********
 */

function js_5() {
  let myCodeDiv = document.getElementById("js-5");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <h1 id="demo-js-5">Mouse over me</h1>
    `
  );
  myCodeDiv.appendChild(myDiv);

  document.getElementById("demo-js-5").addEventListener("mouseover", mouseOver);
  document.getElementById("demo-js-5").addEventListener("mouseout", mouseOut);

  function mouseOver() {
    document.getElementById("demo-js-5").style.color = "red";
  }

  function mouseOut() {
    document.getElementById("demo-js-5").style.color = "black";
  }
}

function jquery_5() {
  let myCodeDiv = document.getElementById("jquery-5");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="out overout">
      <span>move your mouse</span>
      <div class="in">
      </div>
    </div>

    <div class="out enterleave">
      <span>move your mouse</span>
      <div class="in">
      </div>
    </div>
    `
  );
  myCodeDiv.appendChild(myDiv);

  var i = 0;
  $("div.overout")
    .mouseover(function () {
      i += 1;
      $(this)
        .find("span")
        .text("mouse over x " + i);
    })
    .mouseout(function () {
      $(this).find("span").text("mouse out ");
    });

  var n = 0;
  $("div.enterleave")
    .mouseenter(function () {
      n += 1;
      $(this)
        .find("span")
        .text("mouse enter x " + n);
    })
    .mouseleave(function () {
      $(this).find("span").text("mouse leave");
    });
}

/* **********
 * Exercise 6
 * **********
 */

function js_6() {
  let myCodeDiv = document.getElementById("js-6");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <input id="input-js-6" type="text" size="30" onkeypress="newInput()">
    <p id = "p-js6">Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

function newInput() {
  let myInput = document.getElementById("input-js-6");
  let myPwithInput = document.getElementById("p-js6");
  myPwithInput.innerHTML = myInput.value;
}

function jquery_6() {
  let myCodeDiv = document.getElementById("jquery-6");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <input id="input-jquery-6" type="text" size="30" onkeypress="newInputjquery()">
    <p id = "p-jquery6">Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

function newInputjquery() {
  $("#p-jquery6").html($("#input-jquery-6").val());
}

/* **********
 * Exercise 7
 * **********
 */

function js_7() {
  let myCodeDiv = document.getElementById("js-7");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <img id= "img-js-7" src="assets/images/Chico_bolsa_logo.png" alt="pixel art" style="width:20%;">
    <p id="p-js-7">Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);

  let img = document.getElementById("img-js-7");

  img.addEventListener('load', (event) => {
      let p_js_7 = document.getElementById("p-js-7");
      p_js_7.innerHTML = "Image loaded"
  });
}



function jquery_7() {
  let myCodeDiv = document.getElementById("jquery-7");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <img id= "img-jquery-7" src="assets/images/Chico_bolsa_logo.png" alt="pixel art" style="width:20%;">
    <p id="p-jquery-7"></p>
    `
  );
  myCodeDiv.appendChild(myDiv);

  $("#img-jquery-7").one("load", function() {
    $("#p-jquery-7").html("Image loaded");
  })
  //.each(function() {
  //   if(this.complete) {
  //     $(this).load();
  //     $("#p-jquery-7").html("Image don't loaded");
  //   }
  // })
}

/* **********
 * Exercise 8
 * **********
 */

function js_8() {
  let myCodeDiv = document.getElementById("js-8");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <img id= "img-js-8" src="assets/images/Chico_bolsa_logo.jpg" alt="pixel art" style="width:20%;">
    <p id="p-js-8"></p>
    `
  );
  myCodeDiv.appendChild(myDiv);

  let myImage_js8 = document.getElementById("img-js-8");

  myImage_js8.addEventListener('error', imageNotFound);

  function imageNotFound() {
    myImage_js8.setAttribute("src", "assets/images/giphy.gif");
  }
}

function jquery_8() {
  let myCodeDiv = document.getElementById("jquery-8");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <img id= "img-jquery-8" src="assets/images/Chico_bolsa_logo.jpg" alt="pixel art" style="width:20%;">
    <p id="p-jquery-8"></p>
    `
  );
  myCodeDiv.appendChild(myDiv);

  $("#img-jquery-8").on("error", function () {
    $(this).attr("src", "assets/images/giphy.gif");
  });
}

/* **********
 * Exercise 9
 * **********
 */

function js_9() {
  let myCodeDiv = document.getElementById("js-9");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <form id="myForm-js9" action="/action_page.php">
    First name: <input type="text" name="fname"><br>
    Last name: <input type="text" name="lname"><br><br>
    </form>
    `
  );
  myCodeDiv.appendChild(myDiv);

  let myBtn = document.getElementById("mybtnjs9");
  myBtn.innerHTML = "Submit";
  myBtn.addEventListener("click", mySubmitJs);

  function mySubmitJs() {
    alert("From submitted");
    let myForm = document.getElementById("myForm-js9")
    myForm.submit();
    myForm.reset();
  }
}

function jquery_9() {
  let myCodeDiv = document.getElementById("jquery-9");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <form id="myForm-jquery9" action="/action_page.php">
    First name: <input type="text" name="fname"><br>
    Last name: <input type="text" name="lname"><br><br>
    </form>
    `
  );
  myCodeDiv.appendChild(myDiv);

  let myBtn = $("#mybtnjquery9");
  myBtn.attr("type", "submit");
  myBtn.on("click",()=>{
    $("#myForm-jquery9").submit()
  });
}

/* **********
 * Exercise 10
 * **********
 */

function js_10() {
  let myCodeDiv = document.getElementById("js-10");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <p>Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

function jquery_10() {
  let myCodeDiv = document.getElementById("jquery-10");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <p>Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

/* **********
 * Exercise 11
 * **********
 */

function js_11() {
  let myCodeDiv = document.getElementById("js-11");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <p>Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

function jquery_11() {
  let myCodeDiv = document.getElementById("jquery-11");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <p>Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

/* **********
 * Exercise 12
 * **********
 */

function js_12() {
  let myCodeDiv = document.getElementById("js-12");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <p>Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

function jquery_12() {
  let myCodeDiv = document.getElementById("jquery-12");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <p>Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

/* **********
 * Exercise 13
 * **********
 */

function js_13() {
  let myCodeDiv = document.getElementById("js-13");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <p>Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}

function jquery_13() {
  let myCodeDiv = document.getElementById("jquery-13");
  let myDiv = document.createElement("div");

  myDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <p>Insert Text here</p>
    `
  );
  myCodeDiv.appendChild(myDiv);
}
