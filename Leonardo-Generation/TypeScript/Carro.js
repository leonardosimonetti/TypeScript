"use strict";
exports.__esModule = true;
var carro = /** @class */ (function () {
    function carro() {
    }
    carro.prototype.andar = function () {
        // mostrando a mensagem usando concatenações
        console.log("O carro " + this.modelo + " do ano " + this.ano + " ta andando...");
    };
    carro.prototype.parar = function () {
        // mostrando mensagens usando expression languages
        console.log("O carro " + this.modelo + " do ano " + this.ano + " acabou de parar");
    };
    carro.prototype.ligar = function () {
        var ligar = new Boolean;
        if (ligar) {
            console.log("O carro " + this.modelo + " do ano " + this.ano + " ta andando...");
        }
        desligar();
        void {
            "var": deligar = new Boolean,
            "else": function (desligar) {
                console.log("O carro " + this.modelo + " do ano " + this.ano + " acabou de parar");
            }
        };
    };
    return carro;
}());
exports.carro = carro;
