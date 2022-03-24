import './NavBar.css'

const NavBar = (props) => {
    console.log(props.children)
    return(
        <nav className="NavBar">
            <h2>{props.name}</h2>
            <button>boton1</button>
        </nav>
    )
}

export default NavBar