// constructor de productos

class productos {
    constructor (sabor, unidades, tacc, precio){
        this.sabor = sabor;
        this.unidades = unidades;
        this.tacc = tacc;
        this.precio = precio;
    }
}

// array de productos

const listaProductos = []

listaProductos.push (new productos("Lenteja", "x4 unidades", "Sin Tacc", 300))
listaProductos.push (new productos("Aduki", "x4 unidades", "Sin Tacc", 325))
listaProductos.push (new productos("Burgol", "x4 unidades", "Contiene Tacc", 350))
listaProductos.push (new productos("Falafel", "x12 unidades", "Contiene Tacc", 400))




//funcion ordenar por precio
function ordenar(){
    listaProductos.sort(function (a, b) {
            if (a.precio > b.precio) {
            return 1;
            }
            if (a.precio < b.precio) {
            return -1;
            }
            return 0;
        });
        console.log("Productos ordenados por precio de menor a mayor: \n\n");
    listaProductos.forEach(element => {
        console.log(
        element.sabor + "\n" + 
        element.unidades + "\n" + 
        element.tacc + "\n" + 
        element.precio + "\n\n");
    })
    }


// funcion crear sabor
function crearSabor(){
let crear = 0
while (crear < 1) {
    let crearPack = new productos (
        prompt("Elige el sabor de tu pack \n Opciones: Yamani, Mung, Portobello"),
        prompt("Elige cuantas unidades. (ejemplo 'x4 unidades'"),
        "Sin Tacc",
        Number(350)
        )
    listaProductos.push(crearPack)    
    
    console.log (listaProductos)
    crear++
}}



//bienvenido
alert("Bienvenido a HUMO Burgers \n Hamburguesas veganas \n Abrir consola y continuar" )

//elegir opciones
let continuar = prompt("Elija una letra para continuar \n a. Ver sabores \n b. Ordenar por precio \n c. Crea un nuevo sabor")

switch (continuar) {
    case "a":
        console.log(listaProductos);
        break;
    case "b":
        ordenar();
        break;
    case "c":
        crearSabor();
        break;
    

}





//intento d crear pack


// let crear = 0
// while (crear < 1) {
//     let crearPack = 
//     prompt("Elige el primer sabor de tu pack \n Opciones: Lenteja, Aduki, Burgol, Yamani");
    
//     prompt("Elige el segundo sabor de tu pack \n Opciones: Lenteja, Aduki, Burgol, Yamani");
    
//     prompt("Elige el tercer sabor de tu pack \n Opciones: Lenteja, Aduki, Burgol, Yamani");
    
//     prompt("Elige el ultimo sabor de tu pack \n Opciones: Lenteja, Aduki, Burgol, Yamani");
//     crear++
//     alert(crearPack);
// }




//con o sin tacc
// let tacc;
// if (crearPack = burgol) {
//     let contieneTacc
    
// } else {
//     let sinTacc
    
// }


// let packCreado = new productos(
//     crearPack, 
//     "x4 unidades",
//     "Contiene tacc",
//     400
// )
// listaProductos.push(packCreado)

// console.log (listaProductos)


// productos.sort(function (a, b) {
//     if (a.precio > b.precio) {
//     return 1;
//     }
//     if (a.precio < b.precio) {
//     return -1;
//     }
//     return 0;
// });
// console.log("Los elementos ordenados segun su precio, quedan asi: \n\n");
// productos.forEach(element => {
//     console.log(
//     "- ID del producto: " + element.id + "\n" + 
//     "- Nombre del producto: " + element.prod + "\n" + 
//     "- Marca del producto: " + element.marca + "\n" + 
//     "- Precio del producto: $" + element.precio + "\n\n");
// });
// break;