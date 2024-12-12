import { Transporte } from "./Transporte";

export class Terrestre extends Transporte {
    private _numRodas: number;
    private _velocidade: number;


	constructor(capacidade: number, numRodas: number, velocidade: number) {
        super(capacidade);
		this._numRodas = numRodas;
		this._velocidade = velocidade;
	}



	public get numRodas(): number {
		return this._numRodas;
	}

	public get velocidade(): number {
		return this._velocidade;
	}

	public set numRodas(value: number) {
		this._numRodas = value;
	}

	public set velocidade(value: number) {
		this._velocidade = value;
	}

    public visualizar(){
        super.visualizar();
        console.log("Numero de rodas: " + this._numRodas);
        console.log("Velocidade: " + this._velocidade);
    }

}