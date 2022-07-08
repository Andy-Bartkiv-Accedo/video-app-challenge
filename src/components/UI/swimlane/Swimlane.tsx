import cls from './Swimlane.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    bookmark: string,
    items: any[]
};

const Swimlane: React.FC<Props> = ({ bookmark, items }) => {

    const navigate = useNavigate();

    const [val, setVal] = useState<number>(0); 

    function handleClick(fwd: boolean = true): void {
        const newVal = (fwd) 
            ? (val < items.length - 5) ? val+1 : val 
            : (val > 0) ? val-1 : val;
        setVal(newVal);
    }

    const rotateCar = (val: number): string => 
        `translateX(${-val*17.5}vw)`;

  return (
    <div className={ cls.container }>

        <div className={ cls.bookmark }>{ bookmark }</div>

        <div style={{ display:'flex', gap:'5vw', height: '3vh' }}>
                <button onClick={ () => handleClick(false)}>{'< < <'}</button>
                <button onClick={ () => handleClick(true)}>{'> > >'}</button>
        </div>

        <div className={ cls.swimlane } style={{ transform: rotateCar(val) }}>
            { items.map((item) => 
                <div key={item.id} 
                    style={{ border:'1px solid red', width: '20vw' }}
                    onClick = { () => { navigate(`/details/${item.id}`) }}
                >
                        <img style={{width:'17.5vw', minWidth:'17.5vw'}} 
                            src={ `https://image.tmdb.org/t/p/original${item.background}` } alt={item.title} />
                </div>)
            }
        </div>

    </div>
  )
}

export default Swimlane;