class Alumno {
    constructor(nombre, apellido, edad, carrera, materias) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.carrera = carrera
        this.materias = materias
    }

    mostrarCarrera() {
        return this.carrera
    }
    Nombre() {
        return this.nombre + ' ' + this.apellido
    }
    modificarEdad(edad) {
        this.edad = edad
    }
    agregarMateria(...materia) {
        this.materias.push(...materia)
    }
    mostrarMaterias() {
        return console.table(this.materias)
    }
    retornarEdad() {
        return this.edad
    }
}

const alumno = new Alumno('Mariano', 'Buranits', 22, 'Diseño y Programación Web', ['Ética y Deontología Profesional', 'Proyecto Final', 'Aplicaciones Híbridas']);
alumno.agregarMateria('Portales y Comercio Electrónico', 'Internet de las Cosas', 'Clientes Web Mobile')

console.log(alumno)