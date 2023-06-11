var k1 = 0;
var k2 = 0;
var k3 = 0;

var char;

kanson = [];

async function getKans() {
  const data = await fetch("http://localhost:3000/selectkans");
  kanson = await data.json();

  if (char != undefined) {
    niszcz();
  }
  console.log(kanson);
  upd();
}
getKans();

async function Morawiecki() {
  const url = "http://localhost:3000/selboe";
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

async function Mentzen() {
  const url = "http://localhost:3000/selbar";
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

async function Trzaskowski() {
  const url = "http://localhost:3000/selpud";
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

Morawiecki();
Mentzen();
Trzaskowski();

async function upd() {
  k1 = await Morawiecki();
  k2 = await Mentzen();
  k3 = await Trzaskowski();
  console.log(k1);
  const ctx = document.getElementById("myChart");

  char = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Mateusz Morawiecki", "Sławomir Mentzen", "Rafał Trzaskowski"],
      color: "white",
      datasets: [
        {
          label: "Ilość zebranych głosów",
          data: [k1[0].liczbaglosow, k2[0].liczbaglosow, k3[0].liczbaglosow],
          backgroundColor: ["#000039 ", "#1a2421 ", "#353839"],
          borderWidth: 0.6,
          borderColor: "#f0ffff ",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Wybory Prezydenckie 2025",
          color: "#f0ffff ",
        },
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      height: 200,
      width: 300,
    },
  });
}

setInterval(async function () {
  getKans();
}, 10000);

async function coems() {
  k1 = await Morawiecki();
  k2 = await Mentzen();
  k3 = await Trzaskowski();
  char.data = [k1[0].liczbaglosow, k2[0].liczbaglosow, k3[0].liczbaglosow];
  char.update();
}

async function getData() {
  const data = await fetch("http://localhost:3000/select");
  json = await data.json();
  console.log(json);

  const tabela = document.getElementById("tabela");
  tabela.innerHTML = "";

  for (var i = 0; i <= json.length - 1; i++) {
    const label = document.createElement("label");
    const record = `
      <p>Pesel: ${json[i].Pesel}</p>
      <p>Wybrany kandydat: ${json[i].kandydat}</p>
     
    `;
    label.classList.add("lab");
    label.innerHTML = record;

    tabela.appendChild(label);
  }
}

getData();

setInterval(async function () {
  const d = await getData();
}, 10000);

async function getVotes() {
  const datas = await fetch("http://localhost:3000/selvotes");
  jsons = await datas.json();
  console.log(jsons);

  const last = document.getElementById("last");
  const h1 = document.createElement("h1");
  last.innerHTML = "";
  h1.innerHTML = "Zostało oddanych już: " + json.length + " głosów";
  last.appendChild(h1);
}
getVotes();

setInterval(async function () {
  const y = await getVotes();
}, 10000);

function niszcz() {
  char.destroy();
}

// function glosy(i) {
// await fetch(`http://localhost:3000/plus/${i}`);
// getKans()
