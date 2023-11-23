import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <h3>Puelo Repuestos</h3>
            </Link>
            <div>
                <NavLink to={`/category/Mecanicos`} className='Option'>
                    Mecánicos
                </NavLink>
                <NavLink to={`/category/Electricos`} className='Option'>
                    Eléctricos
                </NavLink>
                <NavLink to={`/category/Accesorios`} className='Option'>
                    Accesorios
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
