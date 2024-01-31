import { NavLink } from "react-router-dom"
import TotalCarrito from "./TotalCart"

const NavBar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-info ps-5 pe-5">
                <div className="container justify-content-start">
                    <NavLink className={setActiveClass} to='/'>🍕 Pizzeria Mamma Mía</NavLink>
                </div>
                <div className="container-fluid justify-content-end gap-3">
                    <NavLink className= {setActiveClass} to='/carrito'>
                        <TotalCarrito />
                    </NavLink>
                </div>
            </nav>
        </>
    )
}


export default NavBar