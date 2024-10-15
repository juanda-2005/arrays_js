// 1. Qué son los Arrays
// 1.1
function procesarPedido(pedido) {
    const nombreCliente = pedido.shift(); 
    pedido.unshift("bebida"); 
    pedido.push(nombreCliente); 
}

// 2. Iteración de Arrays en Javascript
// 2.1
function sumarPares(numeros) {
    let suma = 0;
    for (let num of numeros) { 
        if (num % 2 === 0) { 
            suma += num; 
        }
    }
    return suma; 
}

// 3. Buscar en Arrays
// 3.1
function palabrasTerminanConA(palabras) {
    return palabras.every(palabra => palabra.endsWith("a")); 
}

const palabras = ['casa', 'silla', 'mesa'];
console.log(palabrasTerminanConA(palabras)); 

// 4. Transformar Arrays
// 4.1
function buscaPalabras(words, word) {
    const index = words.indexOf(word); 
    return index !== -1 ? words.slice(index + 1) : []; 
}

const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')); 

// 5. Matrices
// 5.1
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) { 
        for (let j = 0; j < matrix[i].length; j++) { 
            if (matrix[i][j] === "JavaScript") {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
];

const position = findJavaScript(matrix);
console.log(position); 

// 6. Algoritmos con Arrays
// 6.1
function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i; 
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i; 
        }
    }
    return [minIndex, maxIndex];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); 

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
