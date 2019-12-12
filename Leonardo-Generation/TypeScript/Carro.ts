export class carro{
    placa : string;
    cor   : string;
    modelo: string;
    ano   : number;
    ligar : Boolean;
    

    andar(): void{
        // mostrando a mensagem usando concatenações
        console.log("O carro "+this.modelo+" do ano "+this.ano+" ta andando...");
    }

    parar():void{
        // mostrando mensagens usando expression languages
        console.log(`O carro ${this.modelo} do ano ${this.ano} acabou de parar`);
    }

    ligar():void{
        this.ligado = true;
            if (this.ligado){
            console.log("O carro "+this.modelo+" do ano "+this.ano+" ta andando...");
        }
            else{
            console.log("O carro "+this.modelo+" do ano "+this.ano+" ta andando...");
            }
        }

    desligar():void{
        var deligar = new Boolean;
        else (desligar){
            console.log(`O carro ${this.modelo} do ano ${this.ano} acabou de parar`);
        }
    }
}