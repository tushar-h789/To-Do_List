let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

//ae faka arr neoar karon ta holo, ae arr er moddhe sob value ese add hobe
let arr = [];

//ekhane button ke daka hoiche.
button.addEventListener("click", function () {
  //ekhane arr er moddhe user jei input dibe sei input er value gulo push kora hoiche.
  arr.push(input.value);

  //ekhane nicer function ke call kora hoiche.
  addtodo();
});

function addtodo() {
  //ekhane ul er 2 ta value er moddhe akta faka kora hoiche jno user er next value gulo deoar age 2ta value er majhe akta gabe dei.
  ul.innerHTML = "";

  //ekhaen arr ke map kora hoiche.
  arr.map((item) => {
    //ekhane ul er vetore jei value gulo user input dibe sei value gulor sathe akta kore delete button add hoye jabe. r map korar jonno user er protita value er jonno akta kore delete button add hobe.
    ul.innerHTML += `<li>${item} <button class= "delete">delete</button></li>`;
  });

  let remove = document.querySelectorAll(".delete");
  let btnarr = Array.from(remove);

  //button arr ke map kora hoiche. map er moddhe button r value er index number deoa hoiche jno kono value delete korar somoi ae index number ta kaje lage.
  btnarr.map((button, index) => {
    //ekhane button ke jokhon click kora hobe tokhon akdom opur er arr er moddhe thaka value er index number gulo akta akta kore kete jabe.
    button.addEventListener("click", function () {
      arr.splice(index, 1);

      //ekhane opur er function ke abar call kora hoiche. karon ae ak e kaj bar bar korte hobe tai.
      addtodo();
    });
  });
}
