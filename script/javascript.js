let shopContent = document.getElementById("main")
let verCarrito = document.getElementById("changuito")
let modal= document.getElementById("modalContainer")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito"))|| []

const getproductos = async () => {
const response = await fetch("data.json")
const data = await response.json()
data.forEach((producto) =>{
    let contenido =document.createElement("div")
    contenido.className="card"
    contenido.innerHTML=`
    <img src="${producto.imagen}"></img>
    <h3>${producto.marca}</h3>
    <h4>TIPO :${producto.tipo}</h4>
    <p>$ ${producto.precio}</p>
    `
    shopContent.append(contenido)

    let comprar = document.createElement("button")
    comprar.innerText = "Agregar al carrito"
    comprar.className="comprar"
    
    
    contenido.append(comprar)
    
    comprar.addEventListener("click", () =>{
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id)
    if(repeat){
        carrito.map((prod) =>{
            if(prod.id === producto.id){
                prod.cantidad++
            }
        })
    }else{
        carrito.push({
            id: producto.id,
            img: producto.imagen,
            marca: producto.marca,
            precio: producto.precio,
            cantidad: producto.cantidad
        })
    }
        localStorage.setItem("chango", JSON.stringify(carrito))
        carritoContador()
    });

});
}
getproductos()
//Creando catalogo
