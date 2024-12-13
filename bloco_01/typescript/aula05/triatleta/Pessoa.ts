export abstract class Pessoa {
    private _nome: string;


	constructor(nome:string) {
        this._nome = nome;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

    abstract cansou(): void;

    public visualizar(){
        console.log("\n", "=".repeat(25), "Dados do Atleta", "=".repeat(25), "\n")
        console.log("Nome: ", this._nome)
    }

}