import { useContext } from "react"
import PizzaContext from "../context/PizzaContext"

const Carrito = () => {
    const { carrito, updateCarrito } = useContext(PizzaContext)

    const quitar = (id) => {
        const auxiliar = [...carrito]
        const indicePizzaAQuitar = carrito.findIndex((itemCarrito) => id === itemCarrito.id)
        if(auxiliar[indicePizzaAQuitar].cantidad <= 0){
            auxiliar.splice(indicePizzaAQuitar,1)
            //updateCarrito(auxiliar)
        }else{
            auxiliar[indicePizzaAQuitar].cantidad -= 1
        }
        updateCarrito(auxiliar)
    }

    const agregar = (id) => {
        const auxiliar = [...carrito]
        const indicePizzaAQuitar = carrito.findIndex((itemCarrito) => id === itemCarrito.id)
        auxiliar[indicePizzaAQuitar].cantidad += 1
        updateCarrito(auxiliar)
    }

    const total = carrito.reduce((acumulador, item) => acumulador + item.precio*item.cantidad, 0);

    return(
        <>
            <h3 className="text-start m-5 mb-0">Detales del Pedido</h3>
            <div className="carrito ms-5 me-5 bg-light-subtle">
                {carrito.length > 0 ? (
                    carrito.map((itemCarrito) => (
                        <div className="d-flex align-items-center justify-content-between" key={itemCarrito.id}>
                            <div className="text-start">  
                                <p className="m-3"><span><img src={`${itemCarrito.img}`} alt={`${itemCarrito.name}`} className="img-carrito me-3"></img></span>{`${itemCarrito.nombre}`}</p>
                            </div>
                            <div>
                                <span className="m-3 text-success">{`$ ${itemCarrito.precio*itemCarrito.cantidad}`}</span>
                                <button className="btn btn-danger m-3" onClick={() => {quitar(itemCarrito.id)}}>-</button>
                                <span>{`${itemCarrito.cantidad}`}</span>
                                <button className="btn btn-primary m-3" onClick={() => {agregar(itemCarrito.id)}}>+</button>
                            </div>
                        </div>
                    ))
                ) : <p>El carrito esta vacío</p>}
            </div>
            <div className="text-start ms-5">
                <h2>{`Total: $${total}`}</h2>
                <button className="btn btn-success m-3">Pagar</button>
            </div>
        </>
    )
}
export default Carrito