function Computador(marca, procesador, ram, precio) {

    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const computador1 = new Computador(
    "Acer",
    "AMD Ryzen 7 7445HS",
    16,
    2869000
);

const computador2 = new Computador(
    "Lenovo",
    "AMD Ryzen 5",
    16,
    2449900
);

const computador3 = new Computador(
    "HP",
    "Intel Core i3",
    8,
    1968970
);

console.log(computador1);
console.log(computador2);
console.log(computador3);

