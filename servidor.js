const PORT = 8000;
const express = require('express');
const axios = require('axios').default;
const cors = require('cors');

const app = express();
app.use(cors());

let palavraPt = ["parvo", "valia", "ameno", "gênio", "prumo", "parco", "laico", "vivaz", "vivaz", "bravo", "favor", "vital", "visão", "parvo", "adiar", "noção", "façam", "rogar", "citar", "ranço", "legal", "anelo", "selar", "tecer", "casta", "prime", "olhar", "horda", "fonte", "marco", "doido", "leito", "ajuda", "probo", "cauda", "bravo", "morte", "rogar", "fator", "legal", "anelo", "noção", "façam", "rogar"]
let palavraEn = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp"]
var qtdvitoria = 0;
let results = {winners: 0, level: {first: 0, second: 0, third: 0, fourth: 0, fifth: 0, sixth: 0}};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/palavrapt', (req, res) => {

  res.json(palavraPt[Math.floor(Math.random() * palavraPt.length)])
    
});

app.get('/palavraen', (req, res) => {

  res.json(palavraEn[Math.floor(Math.random() * palavraEn.length)])
});

app.put('/result/:level', (req, res) => {
  let level = req.params.level;

  results.winners += 1;
  results.level[level] += 1;

  return res.json("Results updated");
});

app.get('/result', (req, res) => {
  return res.json(results);
});