import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import PizzaContext from "../context/PizzaContext"

const DetailPizza = () => {
    const { id } = useParams()
    const { pizzas, añadirPizza } = useContext(PizzaContext)
    const [ pizzaDetalle, setPizzaDetalle ] = useState([])

    useEffect(() => {
        const pizzaConsultada = pizzas.filter(pizza => pizza.id == id)
        setPizzaDetalle(pizzaConsultada)
    },[id, pizzas])

    console.log(pizzaDetalle)

    return(
        <div className="card m-3">
            {pizzaDetalle.length > 0 ? (
                <div className="d-flex border-1 text-start">
                    <div>
                        <img src={`${pizzaDetalle[0].img}`} alt={`${pizzaDetalle[0].name}`}></img>
                    </div>
                    <div className="col-md-8 ms-5 w-50">
                        <div >
                            <h5 className="card-title">{`${pizzaDetalle[0].name}`}</h5>
                            <p className="card-text">{`${pizzaDetalle[0].desc}`}</p>
                        </div>
                        <br/>
                        <div>
                            <p>Ingredientes</p>
                            <ul className="list-group-flush text-start">
                                {pizzaDetalle[0].ingredients.map((ingrediente) => (
                                    <li key={`${ingrediente}`} className="list-group-item">{`🍕 ${ingrediente}`}</li>
                                ))}
                            </ul>
                            <div>
                                <h3>Precio: {`$${pizzaDetalle[0].price}`}</h3>
                                <button type="button" className="btn btn-danger" onClick={() => {añadirPizza(pizzaDetalle[0].id)}}>Añadir 🛒</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<p>No se encontró la pizza solicitada :c</p>
            )}
        </div>
    )
}

export default DetailPizza