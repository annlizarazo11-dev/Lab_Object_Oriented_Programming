// Constructor de libros
function Libro(titulo, autor, año, genero) {

    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;

    // Estado inicial del libro
    this.prestado = false;

    // Método para prestar el libro
    this.prestar = function() {

        if (!this.prestado) {
            this.prestado = true;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" ya está prestado.`);
        }
    };

    // Método para devolver el libro
    this.devolver = function() {

        if (this.prestado) {
            this.prestado = false;
            console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this.titulo}" no está prestado.`);
        }
    };
}


// Crear los libros
const libro1 = new Libro(
    "Una breve historia de casi todo",
    "Bill Bryson",
    2003,
    "Divulgación científica"
);

const libro2 = new Libro(
    "Misery",
    "Stephen King",
    1987,
    "Terror / Suspenso"
);

const libro3 = new Libro(
    "Los crímenes de la calle Morgue",
    "Edgar Allan Poe",
    1841,
    "Misterio / Cuento detectivesco"
);


// Mostrar información de los libros
console.log(libro1);
console.log(libro2);
console.log(libro3);


// Probar el estado del primer libro
console.log("\n--- Pruebas de préstamo ---");

libro1.prestar();
libro1.prestar();

libro1.devolver();
libro1.devolver();


// Probar otro libro
console.log("\n--- Prueba con Misery ---");

libro2.prestar();
libro2.devolver();