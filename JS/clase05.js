//Array de Objetos
let trabajadores = [
    {
        nombre: 'Juan',
        cargo: 'Administrador',
        telefono: 123456789
    },
    {
        nombre: 'Pepe',
        cargo: 'Auxilar',
        telefono: 123456789 
    },
    {
        nombre: 'Laura',
        cargo: 'Contadora',
        telefono: 123456789
    },
    {
        nombre: 'Pablo',
        cargo: 'Abogado',
        telefono: 123456789
    }
];

let inversionistas = [
    {
        nombre: 'Juan',
        cargo: 'Administrador',
        telefono: 123456789
    },
    {
        nombre: 'Pepe',
        cargo: 'Auxilar',
        telefono: 123456789 
    },
    {
        nombre: 'Laura',
        cargo: 'Contadora',
        telefono: 123456789
    },
    {
        nombre: 'Pablo',
        cargo: 'Abogado',
        telefono: 123456789
    }
];

//Métodos de los Arrays
console.log(trabajadores);

//Agregar datos - objetos
trabajadores.push({
    nombre: 'María',
    cargo: 'Recursos Humanos',
    telefono: 123456789
});

console.log(trabajadores);

//Imprimos a los trabajadores en el html
let imprimir = document.getElementById('caja');

imprimir.innerHTML = `La nueva trabajadora de la empresa es: ${trabajadores[4].nombre} , su cargo es Gerente de ${trabajadores[4].cargo} y su teléfono de contacto para consultas es ${trabajadores[4].telefono}`;

//Agrago datos al inicio del array
trabajadores.unshift({
    nombre: 'Mario',
    cargo: 'Cajero',
    telefono: 123456789
});

console.log(trabajadores);

//Eliminamos objetos
trabajadores.splice(4);

trabajadores.splice(4, 1, {
    nombre: 'Pablo',
    cargo: 'Transporte',
    telefono: 123456789
});

console.log(trabajadores);

let empresa = trabajadores.concat(inversionistas);

console.log(`Los integrantes de la Empresa son: ${empresa}`);


let mayores = inversionistas.slice(2);

console.log(mayores);

