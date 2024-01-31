import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import PizzaContext from "../context/PizzaContext"

const Home = () => {
    const { pizzas, añadirPizza } = useContext(PizzaContext)
    const navigate = useNavigate()
    const verMas = (pizzaId) => {
        const pizzaConsultada = pizzas.find(pizza => pizza.id == pizzaId)
        navigate(`/pizza/${pizzaConsultada.id}`)
    }

    return(
        <>
            <div className="pizza-fondo d-flex flex-column justify-content-center">
                <h1>¡Pizzería Mamma Mia!</h1>
                <p>¡Tenemos las mejores pizzas que podrás encontrar</p>
                <hr className="linea"/>
            </div>
            <div className="d-flex container mt-4">
                <div className="row gap-5">
                    {pizzas.map((pizza) => (
                        <div className="card col-md-4 mb-4" key={pizza.id} style={{width: '18rem'}}>
                            <div>
                                <img src={`${pizza.img}`} className="card-img-top" alt={`${pizza.name}`}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{`${pizza.name}`}</h5>
                                </div>
                            </div>
                            <div className="text-success">
                                <hr/>
                            </div>
                            <div >
                                <p>Ingredientes:</p>
                                <ul className="list-group-flush text-start">
                                    {pizza['ingredients'].map((ingrediente) => (
                                        <li key={`${ingrediente}`} className="list-group-item">{`🍕 ${ingrediente}`}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-success">
                                <hr/>
                            </div>
                            <h3>{`$ ${pizza.price}`}</h3>
                            <div className="d-flex justify-content-center gap-3">
                                <button type="button" className="btn btn-info" onClick={() => {verMas(pizza.id)}}>Ver más 👀</button>
                                <button type="button" className="btn btn-danger" onClick={() => {añadirPizza(pizza.id)}}>Añadir 🛒</button>
                            </div>
                        </div>         
                    ))}
                </div>
            </div>
        </>
    )
}
export default Home