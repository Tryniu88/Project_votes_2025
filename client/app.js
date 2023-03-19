//STWORZENIE PODSTAWOWEJ FUNKCJI AWAIT. "SCHEMAT"

json = [];

async function getData() {
  const data = await fetch("http://localhost:3000/select");
  json = await data.json();
  console.log(json);
}
getData();

//STWORZENIE PODSTAWOWEJ FUNKCJI AWAIT. "SCHEMAT"

kanson = [];

async function getKans() {
  const data = await fetch("http://localhost:3000/selectkans");
  const kanson = await data.json();
  console.log(kanson);

  //TWORZENIE NIEZBĘDNYCH ELEMENTÓW ORAZ NADAWANIE IM ATRYBUTÓW.

  for (var i = 0; i <= kanson.length - 1; i++) {
    console.log("ok");
    const div = document.createElement("div");

    div.setAttribute("id", `${i}`);

    if (div.id == 0) {
      div.setAttribute("onclick", "Morawiecki()");
    }
    if (div.id == 1) {
      div.setAttribute("onclick", "Mentzen()");
    }
    if (div.id == 2) {
      div.setAttribute("onclick", "Trzaskowski()");
    }

    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");

    div.classList.add("kands");
    h1.innerHTML = "Imię i nazwisko: " + kanson[i].Imieinazwisko;
    h2.innerHTML = "Lat: " + kanson[i].Lat;

    const body = document.getElementById("kandydaci");

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    body.appendChild(div);
  }
}
getKans();

//MATEUSZ MORAWIECKI.

async function Morawiecki() {
  const confirmed = confirm(
    "Jesteś pewny swojego wyboru? Możesz wybrać tylko raz!"
  );
  var inputpesel = document.getElementById("inputpesel").value;
  var input = document.getElementById("inputpesel");

  if (inputpesel.length == "") {
    alert("Wpisz numer PESEL w podanym polu");
  } else if (inputpesel.length < 11) {
    alert("Twój PESEL powinien wynosić 11 cyfr, Wpisz numer PESEL ponownie");
  } else {
    if (confirmed) {
      alert(
        "Serdecznie dziękujemy za oddanie głosu w wyborach na prezydenta Polski 2025"
      );
      znikanie();

      const upd = await fetch(
        `http://localhost:3000/add/${inputpesel}/Mateusz_Morawiecki`
      );
      const dov = await fetch(`http://localhost:3000/plus/1`);
    } else {
    }
  }
}

//SŁAWOMIR MENTZEN.

async function Mentzen() {
  const confirmed = confirm(
    "Jesteś pewny swojego wyboru? Możesz wybrać tylko raz!"
  );
  var inputpesel = document.getElementById("inputpesel").value;
  var input = document.getElementById("inputpesel");

  if (inputpesel.length == "") {
    alert("Wpisz numer PESEL w podanym polu");
  } else if (inputpesel.length < 11) {
    alert("Twój PESEL powinien wynosić 11 cyfr, Wpisz numer PESEL ponownie");
  } else {
    if (confirmed) {
      alert(
        "Serdecznie dziękujemy za oddanie głosu w wyborach na prezydenta Polski 2025."
      );
      znikanie();
      const upd = await fetch(
        `http://localhost:3000/add/${inputpesel}/Sławomir_Mentzen`
      );
      const dov = await fetch(`http://localhost:3000/plus/2`);
    } else {
    }
  }
}

//RAFAŁ TRZASKOWSKI.

async function Trzaskowski() {
  const confirmed = confirm(
    "Jesteś pewny swojego wyboru? Możesz wybrać tylko raz!"
  );
  var inputpesel = document.getElementById("inputpesel").value;
  var input = document.getElementById("inputpesel");

  if (inputpesel.length == "") {
    alert("Wpisz numer PESEL w podanym polu");
  } else if (inputpesel.length < 11) {
    alert("Twój PESEL powinien wynosić 11 cyfr, Wpisz numer PESEL ponownie");
  } else {
    if (confirmed) {
      alert(
        "Serdecznie dziękujemy za oddanie głosu w wyborach na prezydenta Polski 2025."
      );
      znikanie();
      const upd = await fetch(
        `http://localhost:3000/add/${inputpesel}/Rafał_Trzaskowski`
      );
      const dov = await fetch(`http://localhost:3000/plus/3`);
    }
  }
}

//FUNKCJA TA CZYŚCI INTERFEJS PO WYBRANIU KANDYDATA I WYŚWIETLA NAPISY KOŃCOWE.

async function znikanie() {
  const kan = document.getElementById("kandydaci");
  const body = document.getElementById("body");
  const add = document.getElementById("dodawanie");

  kandydaci.innerHTML = "";
  kandydaci.innerHTML = "";
  kandydaci.style.position = "fixed";
  kandydaci.style.top = "0";
  kandydaci.style.left = "0";
  kandydaci.style.width = "100%";
  kandydaci.style.height = "100%";

  const h1 = document.createElement("h1");
  const img = document.createElement("img");

  h1.innerHTML =
    "Serdecznie dziękujemy, za wzięcie udziału w wyborach na prezydenta Polski 2025! Wyniki będą ogłoszone za jakiś czas";
  h1.style.color = "white";
  h1.style.fontFamily = "Arial, Helvetica, sans-serif";
  img.setAttribute(
    "src",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACcCAMAAABhn0ZIAAAABlBMVEXp6OfUIT2ZV8IEAAAAeklEQVR4nO3PAQEAAAjDoNu/tEEGDdgAAAAAAAAAAAAAAAAAAAAAAACAgMtSL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvUi9SL1IvCtcf8h9MLfZKYnkAAAAASUVORK5CYII="
  );

  img.setAttribute("alt", "nature");
  img.setAttribute("height", 350);
  img.setAttribute("width", 550);
  kandydaci.appendChild(h1);
  kandydaci.appendChild(img);
}
