import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { decrement, increment, incrementByAmount } from '../redux/counterSlice';

const Navbar: React.FC = () => {

  const active:string = useLocation().pathname;
  
  const count:number = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <ul className='header-navbar'>
      <li className={(active === '/') ? 'active' : '' }><Link to={ '/' }>HOME</Link></li>
      <li className={(active === '/movies') ? 'active' : '' }><Link to={ '/movies' }>MOVIES</Link></li>
      <li className={(active === '/tv') ? 'active' : '' }><Link to={ '/tv' }>SERIES</Link></li>
      <br></br>
      <button onClick={() => dispatch(decrement())}>---</button>
      <li>{ count }</li>
      <button onClick={() => dispatch(increment())}>+++</button>
      <button onClick={() => dispatch(incrementByAmount(100) )}>+100+</button>

    </ul>
    )
}

export default Navbar;