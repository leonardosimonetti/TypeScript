import { carro } from "./carro";

let c1: carro; // aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
c1 = new carro(); // agora sim, aloquei (reservei) memoria para armazenar as coisas

// vamos preencher os dados
c1.ano    = 1968;
c1.modelo = "fusca";
c1.placa  = "ABC1234";

// vamos manipular o carro com suas operações
c1.andar();
c1.parar();
