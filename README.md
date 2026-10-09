**OBJECT ORIENTED PROGRAMMING**

1. **Computador — ¿Qué ventaja técnica tiene utilizar un constructor frente a crear objetos literales?**

Considero que la principal ventaja de utilizar un constructor es que permite establecer una estructura común y reutilizarla para crear diferentes objetos, en este caso, todos los computadores tienen marca, procesador, RAM y precio, pero cada uno puede tener valores diferentes. Se puede interpretar como crear una especie de molde, no se tiene que construir cada computador desde cero, sino que se define una vez qué información debe tener y después se puede generar diferentes computadores a partir de esa misma estructura, esto hace que el código sea más organizado y facilita agregar nuevos objetos sin repetir toda la lógica

2. **Mascota — ¿Por qué un método interno puede acceder con precisión a las propiedades de su propio objeto utilizando this?**

3. Porque this permite que el objeto se refiera a sí mismo, esto hace que el método no necesite saber de antemano qué mascota está utilizando, sino que pueda trabajar con los datos de la mascota que lo está ejecutando, por ejemplo, Ares y Eclipse utilizan el mismo método presentarse(), pero cada uno obtiene una presentación diferente, me parece interesante porque la función es la misma, pero su resultado cambia dependiendo del objeto que la utiliza. Es como si cada objeto tuviera la capacidad de interpretar la misma acción desde su propia información

4. **Estudiante — ¿Por qué es útil que el objeto conozca su propio estado lógico?

5. Es útil porque el estudiante no solamente guarda información como su nombre, edad y nota, sino que también puede determinar qué significa esa información, en este caso, a partir de la nota puede saber si está aprobado o no, esto evita tener que analizar la nota por separado cada vez que queramos conocer el resultado, el objeto ya tiene relacionado el dato con su consecuencia, para mí, esto muestra una idea importante de la programación orientada a objetos: no se trata únicamente de guardar datos, sino también de relacionarlos con comportamientos o decisiones que tengan sentido dentro del objeto

6. **Libro — ¿Qué pasaría si no existieran controles sobre el estado del libro?**

7. Sin controles de estado, el programa podría permitir situaciones que no tienen sentido en la realidad, por ejemplo, podríamos prestar un libro que ya está prestado o registrar la devolución de un libro que nunca había sido prestado, el problema no sería solamente que el programa hiciera algo incorrecto, sino que la información dejaría de representar una situación real, por eso considero importante que el objeto controle sus propios estados: si un libro está prestado, esa condición debe afectar qué acciones se pueden realizar después, de cierta manera, las validaciones hacen que el comportamiento del programa sea más coherente con las reglas del mundo real

8. **Vehículo — ¿Qué ventajas tiene permitir que el usuario ingrese la información?**

9. Permitir que el usuario ingrese la información hace que el programa sea más flexible, porque ya no depende de unos vehículos definidos previamente. La misma estructura puede recibir los datos de un Mercedes-Benz, una Yamaha o una tractomula y convertir cada uno en un objeto diferente, también existe una conexión interesante entre la entrada de información y la utilidad del programa: mientras más independiente sea el programa de los datos que yo escriba directamente, más posibilidades tiene de adaptarse a diferentes situaciones, en este caso, el constructor funciona como una estructura que recibe información y a partir de ella crea un vehículo con sus propias características y comportamientos
