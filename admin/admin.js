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

let chartInstance = null;

async function upd() {
  const ctx = document.getElementById("myChart");

  const datapoints = await Promise.all([
    Morawiecki(),
    Mentzen(),
    Trzaskowski(),
  ]);

  const moraw = datapoints[0].map((datapoints) => datapoints.liczbaglosow);
  const mentz = datapoints[1].map((datapoints) => datapoints.liczbaglosow);
  const trzas = datapoints[2].map((datapoints) => datapoints.liczbaglosow);

  if (chartInstance !== null) {
    chartInstance.destroy();
    chartInstance = null;
  }

  chartInstance = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Mateusz Morawiecki", "Sławomir Mentzen", "Rafał Trzaskowski"],
      color: "white",
      datasets: [
        {
          label: "Ilość zebranych głosów",
          data: [moraw, mentz, trzas],
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
  const n = await upd();
}, 10000);

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
  h1.innerHTML = "Zostało oddanych już: " + jsons[0].glosy + " głosów";
  last.appendChild(h1);
}
getVotes();

setInterval(async function () {
  const y = await getVotes();
}, 10000);
