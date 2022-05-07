import navIcon from '../pokeapi_256.png'

export const NavBar = () => {
    return (
        <nav>
            <div>
                <img alt='NavIcon' src={navIcon} className='navbar-img'></img>
            </div>
        </nav>
    )
}