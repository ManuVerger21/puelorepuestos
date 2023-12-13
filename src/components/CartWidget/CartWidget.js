import { Link } from 'react-router-dom'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return (
        <div>
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={cart} alt='Logo carro'/>
        </Link>
        </div>

    )
}

export default CartWidget