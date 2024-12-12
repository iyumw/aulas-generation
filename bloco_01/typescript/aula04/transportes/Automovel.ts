import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre {
    private _cor: string;
    private _numPortas: number;
    private _placa: string;
    private _marcha: number;


	constructor(capacidade: number, numRodas: number, velocidade: number, cor: string, numPortas: number, placa: string, marcha: number) {
		super(capacidade, numRodas, velocidade)
        this._cor = cor;
		this._numPortas = numPortas;
		this._placa = placa;
		this._marcha = marcha;
	}

	public get cor(): string {
		return this._cor;
	}

	public get numPortas(): number {
		return this._numPortas;
	}

	public get placa(): string {
		return this._placa;
	}

	public get marcha(): number {
		return this._marcha;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numPortas(value: number) {
		this._numPortas = value;
	}

	public set placa(value: string) {
		this._placa = value;
	}

	public set marcha(value: number) {
		this._marcha = value;
	}

    public visualizar(){
        super.visualizar();
        console.log("Cor: " + this._cor);
        console.log("Placa: " + this._placa);
        console.log("Numero de portas: " + this._numPortas);
        console.log("Numero de marchas: " + this._marcha);
    }

}