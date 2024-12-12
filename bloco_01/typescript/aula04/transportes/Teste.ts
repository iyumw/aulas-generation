import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";

function main() {
    const t1 = new Transporte(5);
    t1.visualizar();

    const tr1 = new Terrestre(5, 4, 100);
    tr1.visualizar();

    const a1 = new Automovel(5, 4, 250, "branco", 4, "FHD-4378", 5);
    a1.visualizar();
}

main();