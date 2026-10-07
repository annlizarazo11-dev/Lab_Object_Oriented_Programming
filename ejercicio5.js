const prompt = require("prompt-sync")();

// Constructor de vehículos
function Vehiculo(marca, modelo, año, velocidad, encendido, nivelCombustible) {

    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = velocidad;
    this.encendido = encendido;
    this.nivelCombustible = nivelCombustible;


    // Método para encender el vehículo
    this.encender = function() {

        if (!this.encendido) {
            this.encendido = true;
            console.log(`${this.marca} ${this.modelo} ha sido encendido.`);
        } else {
            console.log(`${this.marca} ${this.modelo} ya está encendido.`);
        }
    };


    // Método para acelerar
    this.acelerar = function() {

        if (!this.encendido) {
            console.log(`No se puede acelerar. ${this.marca} ${this.modelo} está apagado.`);
        } else if (this.nivelCombustible <= 0) {
            console.log(`No se puede acelerar. El vehículo no tiene combustible.`);
        } else {
            this.velocidad += 20;
            this.nivelCombustible -= 1;

            console.log(
                `${this.marca} ${this.modelo} aceleró a ${this.velocidad} km/h.`
            );
        }
    };


    // Método para frenar
    this.frenar = function() {

        if (this.velocidad > 0) {
            this.velocidad -= 20;

            if (this.velocidad < 0) {
                this.velocidad = 0;
            }

            console.log(
                `${this.marca} ${this.modelo} redujo su velocidad a ${this.velocidad} km/h.`
            );
        } else {
            console.log(`${this.marca} ${this.modelo} ya está detenido.`);
        }
    };


    // Método para apagar
    this.apagar = function() {

        if (this.velocidad > 0) {
            console.log(
                `No se puede apagar ${this.marca} ${this.modelo} mientras está en movimiento.`
            );
        } else if (this.encendido) {
            this.encendido = false;
            console.log(`${this.marca} ${this.modelo} ha sido apagado.`);
        } else {
            console.log(`${this.marca} ${this.modelo} ya está apagado.`);
        }
    };
}


// Solicitar información de los vehículos
function pedirVehiculo(numero) {

    console.log(`\n--- Datos del vehículo ${numero} ---`);

    const marca = prompt("Ingrese la marca: ");
    const modelo = prompt("Ingrese el modelo: ");
    const año = Number(prompt("Ingrese el año: "));
    const velocidad = Number(prompt("Ingrese la velocidad inicial: "));
    const nivelCombustible = Number(
        prompt("Ingrese el nivel de combustible: ")
    );

    return new Vehiculo(
        marca,
        modelo,
        año,
        velocidad,
        false,
        nivelCombustible
    );
}


// Crear los tres vehículos
const vehiculo1 = pedirVehiculo(1);
const vehiculo2 = pedirVehiculo(2);
const vehiculo3 = pedirVehiculo(3);


// Mostrar información inicial
console.log("\n========== VEHÍCULOS CREADOS ==========");

console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo3);


// Pruebas del vehículo 1
console.log("\n========== PRUEBA VEHÍCULO 1 ==========");

vehiculo1.encender();
vehiculo1.acelerar();
vehiculo1.frenar();
vehiculo1.frenar();
vehiculo1.apagar();


// Pruebas del vehículo 2
console.log("\n========== PRUEBA VEHÍCULO 2 ==========");

vehiculo2.encender();
vehiculo2.acelerar();
vehiculo2.frenar();
vehiculo2.apagar();


// Pruebas del vehículo 3
console.log("\n========== PRUEBA VEHÍCULO 3 ==========");

vehiculo3.encender();
vehiculo3.acelerar();
vehiculo3.frenar();
vehiculo3.apagar();