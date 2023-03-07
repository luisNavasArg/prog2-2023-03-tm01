//modulo nativo
const fs = require('fs'); 
let txt=fs.readFileSync('./texto.txt','utf-8');
// console.log(txt);
//modulo de terceros 
const moment = require('moment');
// console.log(moment);

const profesores = require('./profesores/profesores');
console.log(profesores[1]);
