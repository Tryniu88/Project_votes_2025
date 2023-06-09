//PODSTAWY

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const port = 3001;
app = express();

app.use(cors());

//POŁĄCZENIE BAZY DANCYH

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "glosowanie",
});

//SPRAWDZA CZY W TERMINALU WYSTĘPUJE BŁĄD

con.connect(function (err) {
  if (err) console.log(err);
  console.log("Połącznie Zatwierdzone");
});

//TWORZENIE ENDPOINTÓW

app.get("/", function (req, res) {
  res.send("Done");
});

//ENDPOINT

app.get("/select", function (req, res) {
  const sql = "SELECT * FROM glosowanie";

  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    res.send(result);
  });
});

//ENDPOINT

app.get("/add/:pesel/:kandydats", function (req, res) {
  //PARAMS MA ZA ZADANIE ODCZYTYWAC DANE Z ENDPOINTA

  var pesel = req.params.pesel;
  var kandydats = req.params.kandydats;

  const sql = `INSERT INTO glosowanie(Pesel, kandydat) VALUES ('${pesel}', '${kandydats}') `;

  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    else console.log("Dodano rekord");
    res.send(result);
  });
});

app.get("/selectkans", function (req, res) {
  var sql = "SELECT * FROM kandydaci";

  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    res.send(result);
  });
});

app.get("/selmor", function (req, res) {
  var sql = "SELECT liczbaglosow FROM kandydaci WHERE ID_kandydata = 1";

  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    res.send(result);
  });
});
app.get("/selmen", function (req, res) {
  var sql = "SELECT liczbaglosow FROM kandydaci WHERE ID_kandydata = 2";

  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    res.send(result);
  });
});
app.get("/seltrz", function (req, res) {
  var sql = "SELECT liczbaglosow FROM kandydaci WHERE ID_kandydata = 3";

  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    res.send(result);
  });
});

app.get("/plus/:ids", function (req, res) {
  const ids = req.params.ids;

  var sql = `UPDATE kandydaci SET liczbaglosow = liczbaglosow + 1 WHERE ID_kandydata = ${ids}`;

  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    console.log("Pomyślnie wykonano");
  });
});

app.listen(port);

app.get("/selvotes", function (req, res) {
  var sql = `SELECT SUM(liczbaglosow) AS glosy FROM kandydaci`;

  con.query(sql, function (err, result, fields) {
    if (err) console.log(err);
    res.send(result);
  });
});
