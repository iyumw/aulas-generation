export class Transporte {
    private _capacidade: number;

	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}

	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

    public visualizar(){
        console.log("\n", "=".repeat(25), "Dados do Transporte", "=".repeat(25), "\n")
        console.log("Capacidade: ", this._capacidade)
    }

}