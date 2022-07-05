import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const active = useLocation().pathname;

  return (
    <ul className='header-navbar'>
      <li className={(active === '/') ? 'active' : '' }><Link to={ '/' }>HOME</Link></li>
      <li className={(active === '/details/123') ? 'active' : '' }><Link to={ '/details/123' }>MOVIES</Link></li>
      <li className={(active === '/details/123') ? 'active' : '' }><Link to={ '/details/123' }>SERIES</Link></li>
    </ul>
    )
}

export default Navbar;