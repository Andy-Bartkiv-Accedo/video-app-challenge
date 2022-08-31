import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {

  const active:string = useLocation().pathname;
  
  return (
    <ul className='header-navbar'>
      <li className={(active === '/') ? 'active' : '' }><Link to={ '/' }>HOME</Link></li>
      <li className={(active === '/movies') ? 'active' : '' }><Link to={ '/movies' }>MOVIES</Link></li>
      <li className={(active === '/tv') ? 'active' : '' }><Link to={ '/tv' }>SERIES</Link></li>
    </ul>
    )
}

export default Navbar;