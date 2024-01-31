import { useContext } from "react"
import PizzaContext from "../context/PizzaContext"

const TotalCarrito = () => {
    const { carrito } = useContext(PizzaContext)
    const total = carrito.reduce((acumulador, item) => acumulador + item.precio*item.cantidad, 0);

    return(
        <span className="text-primary">🛒 ${total}</span>
    )
}

export default TotalCarrito