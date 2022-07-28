class Usuario { // Creamos la Clase Usuario
    constructor (nombre, apellido) {
        this.nombre = nombre;       // Nombre del usuario
        this.apellido = apellido;   // Apellido del usuario
        this.libros = [];           // Lista de libros vacía del usuario
        this.mascotas = [];         // Lista de mascotas vacía del usuario
    }

    getFullName() {         // Método de obtención del nombre completo del usuario
        return (`${this.nombre} ${this.apellido}`)
    }

    addMascota(pet) {       // Método para agregar una mascota a la lista de Mascotas
        this.mascotas.push(pet);
    }

    countMascotas() {       // Método para contar la cantidad de mascotas en la lista de Mascotas
        return this.mascotas.length;
    }

    addBook(author, book) { // Método para agregar un libro con nombre y autor a la lista de Libos
        this.libros.push({nombre: book, autor: author});
    }

    getBookNames() {        // Método para obtener los nombres de los libros de la lista de Libros
        let bookNames = this.libros.map( (libro) => { return libro.nombre; })
        return bookNames;
    }
}

// Creamos el Usuario user1 con nombre Marcos y apellido Solis
const user1 = new Usuario('Marcos', 'Solis');

// Obtenemos nombre completo del Usuario user1
console.log('>> Obtenemos nombre completo del Usuario user1')
console.log('   Nombre completo de usuario: ', user1.getFullName());

// Revisamos la cantidad de mascotas en la lista Mascotas del user1
console.log('>> Revisamos la cantidad de mascotas en la lista Mascotas del user1')
console.log('   Cantidad de mascotas de ', user1.getFullName(), '-> ', user1.countMascotas());
// Agregamos mascotas a la lista Mascotas del Usuario user1
console.log('>> Agregamos mascotas a la lista Mascotas del Usuario user1')
user1.addMascota('Perro');
user1.addMascota('Gato');
user1.addMascota('Hamster');
// // Volvemos a revisamos la cantidad de mascotas en la lista Mascotas del user1
console.log('>> Volvemos a revisamos la cantidad de mascotas en la lista Mascotas del user1')
console.log('   Cantidad de mascotas de ', user1.getFullName(), '-> ', user1.countMascotas());

// Agregamos libros con autor a la lista Libros del user1
console.log('>> Agregamos libros con autor a la lista Libros del user1')
user1.addBook('George Orwell', '1984');
user1.addBook('Carmen Laforet', 'Nada');
user1.addBook('Víctor Hugo', 'Los Miserables');
// Obtenemos únicamente los nombres de los libros de la lista Libros del Usuario user1
console.log('>> Obtenemos únicamente los nombres de los libros de la lista Libros del Usuario user1')
console.log('   Libros de ', user1.getFullName(), '->', user1.getBookNames());

