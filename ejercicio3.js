// Constructor de estudiantes
function Estudiante(nombre, edad, nota) {

    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;

    // Propiedad calculada
    this.aprobado = this.nota >= 3.0;
    
    // Método para mostrar el resultado
    this.mostrarResultado = function() {

        if (this.aprobado) {
            console.log(`${this.nombre} aprobó con una nota de ${this.nota}.`);
        } else {
            console.log(`${this.nombre} no aprobó con una nota de ${this.nota}.`);
        }
    };
}

// Crear los estudiantes
const estudiante1 = new Estudiante("Luna", 24, 3.7);

const estudiante2 = new Estudiante("Edward", 21, 4.6);

const estudiante3 = new Estudiante("Jack", 19, 2.9);

const estudiante4 = new Estudiante("Christopher", 26, 3.0);

// Mostrar los resultados
estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();