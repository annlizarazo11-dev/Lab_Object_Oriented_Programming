// Constructor de mascotas
function Mascota(nombre, especie, edad, peso) {

    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    // Método para presentar la mascota
    this.presentarse = function() {
        return `Hola, soy ${this.nombre}. Soy un ${this.especie}, tengo ${this.edad} años y peso ${this.peso} kg.`;
    };
}

// Crear las mascotas
const mascota1 = new Mascota(
    "Ares",
    "Lobo Siberiano (Husky Siberiano)",
    4,
    24
);

const mascota2 = new Mascota(
    "Eclipse",
    "Gato (Mestizo / Común)",
    3,
    4.2
);

const mascota3 = new Mascota(
    "Ícaro",
    "Loro Amazónico (Loro Verde)",
    6,
    0.5
);

// Ejecutar el método presentarse()
console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());