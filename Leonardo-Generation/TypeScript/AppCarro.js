"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var c1; // aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
c1 = new carro_1.carro(); // agora sim, aloquei (reservei) memoria para armazenar as coisas
// vamos preencher os dados
c1.ano = 1968;
c1.modelo = "fusca";
c1.placa = "ABC1234";
// vamos manipular o carro com suas operações
c1.andar();
c1.parar();
