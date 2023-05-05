const colorearCarrito =() =>{

    carrito = JSON.parse(localStorage.getItem("chango")) || []
    modal.innerHTML=""
    modal.style.display="flex"
    const modalTop = document.createElement("div")
    modalTop.className = "modalTop"
    modalTop.innerHTML= `
    <h1 class="modalTitle">Carrito de compra</h1>
    
    `
    modal.append(modalTop)
    const cerrarModal = document.createElement("h1")
    cerrarModal.className ="fa-solid fa-xmark cerrar"
    
    cerrarModal.addEventListener("click", () =>{
        modal.style.display= "none"
    })
    modal.append(cerrarModal)
    
    
    carrito.forEach((product) => {
    
        const carritoContent = document.createElement("div")
        carritoContent.className= "modalContent"
        carritoContent.innerHTML= `
        <img src="${product.img}"></img>
        <h3>${product.marca}</h3>
        <p>${product.precio}</p>
        <p class="resta"> - </p>
        <p>Cantidad: ${product.cantidad}</p>
        <p class ="suma"> + </p>
        <p> total: ${product.cantidad * product.precio}
        `
        modal.append(carritoContent)
        let restar = carritoContent.querySelector(".resta")
        restar.addEventListener("click", () =>{
            if(product.cantidad !== 1){
                product.cantidad --

            }
            colorearCarrito()
            
        })

        let sumar = carritoContent.querySelector(".suma")
        sumar.addEventListener ("click", ()=> {
            product.cantidad++
        })
        let eliminar = document.createElement("span")
        eliminar.innerText="❌"
        eliminar.className="borrar"
        carritoContent.append(eliminar)
        
        eliminar.addEventListener("click", eliminarProducto) 
    })
    
    const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0)
    const totalBuying = document.createElement("div")
    totalBuying.className = "totalContent"
    totalBuying.innerHTML= `
    <h5> Total a pagar : $ ${total}</h5>
    `
    modal.append(totalBuying)
}

verCarrito.addEventListener("click", colorearCarrito)
//eliminando productos
 const eliminarProducto = () =>{
    const buscandoId = carrito.find((element) => element.id)
    carrito = carrito.filter((carritoId) =>{
        return carritoId !== buscandoId
    })
}
const carritoContador = () => {
    cantidadCarrito.style.display = "block"
    const carittoLength = carrito.length
    localStorage.setItem("numero", JSON.stringify(carittoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("numero"))
}

