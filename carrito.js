// vars

const carrito = []
const domCarrito = document.getElementById('carrito');
const domTotal = document.getElementById('total');
const domBotonVaciar = document.getElementById('boton-vaciar');
const box = document.getElementById('box')


// event delefation
box.addEventListener('click', (e) => {agregarAlCarrito(e.target.id)}
)

const agregarAlCarrito = (productoId) => {
    
    const product = variedades.find(product => product.id == productoId)
    carrito.push(product)
    console.log(carrito)
}


let boton = document.getElementsByClassName('btn')
    boton.addEventListener("click", funcionClick)
 
let funcionClick = (agregarAlCarrito) => {
    domCarrito.innerHTML = agregarAlCarrito};