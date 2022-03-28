import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div>
                <h3>Ecommerce</h3>
            </div>
            <div>
                <button>Celulares</button>
                <button>Tablet</button>
                <button>Notebook</button>
            </div>
            <div>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default NavBar