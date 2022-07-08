import cls from './Swimlane.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
    bookmark: string,
    items: any[]
};

const Swimlane: React.FC<Props> = ({ bookmark, items }) => {

    const navigate = useNavigate();

    // position of swimlane HEAD element
    const [val, setVal] = useState<number>(0); 

    // Scroll button click handle
    const handleClick = (fwd: boolean = true): void => {
        const newVal = (fwd) 
            ? (val < items.length - 5) ? val+1 : val 
            : (val > 0) ? val-1 : val;
        setVal(newVal);
    };

    // Button element for scroll buttons
    const renderButton = (fwd: boolean): JSX.Element => (
        <div className={ cls.btn } 
            style={{ right: (fwd) ? '0' : 'auto', left: (!fwd) ? '0' : 'auto' }} 
            onClick={ () => handleClick(fwd) }
        >
            { (fwd) ? <FaChevronRight/> : <FaChevronLeft/> }
        </div>
    );

    // Swimlane shifting animation
    const shiftSwimlane = (val: number): string => 
        `translateX(${-val*18}vw)`;

  return (
    <div className={ cls.container }>

        <div className={ cls.bookmark }>{ bookmark }</div>

        {/* Scroll left button */}
        { (val > 0) && renderButton(false) }

        {/* Swimlane */}
        <div className={ cls.swimlane } style={{ transform: shiftSwimlane(val) }}>
            { items.map((item, index) => 
                <div key={item.id} className={ cls.swimlane_item }
                    style={{ opacity: (index >= val && index <= val+4) ? '1' : '.25' }}
                    onClick = { () => { navigate(`/details/${item.id}`) }}
                >
                    <img src={ `https://image.tmdb.org/t/p/original${item.background}` } alt={ `Title: ${item.title}` } />
                </div>)
            }
        </div>

        {/* Scroll right button */}
        { (val < items.length - 5) && renderButton(true) }

    </div>
  )
}

export default Swimlane;