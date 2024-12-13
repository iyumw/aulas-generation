import { Triatleta } from "./Triatleta";

export function main() {
    const atleta = new Triatleta("Dani");

    atleta.visualizar();

    atleta.aquecer();
    atleta.pedalar();
    atleta.nadar();
    atleta.correr();
    atleta.cansou();
    }

main()