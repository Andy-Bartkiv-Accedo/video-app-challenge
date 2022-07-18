import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './Carousel.module.css';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Item from './Item';

interface Props {
    items: any[]
};

const Carousel: React.FC<Props> = ({ items }) => {

    const navigate = useNavigate();
    
    const dig: number = Math.floor(Math.random() * items.length) // init starting index for carousel
    const [val, setVal] = useState<number>(dig); // position of carousel HEAD element
    const rotateFn: string = 'rotateY'; // rotateX for different rotation axis
    const cellCount: number = items.length; // number of cells in carousel
    const { height, width } = useWindowDimensions();
    const cellSize: number = width * 0.8;
    const radius: number = Math.round(( cellSize / 2) / Math.tan( Math.PI / cellCount ));

    // 3D positioning each individual cell
    const cellsStyle = items.map((item, index) => ({ 
        transform: `${rotateFn}(${index*360/cellCount}deg) translateZ(${radius}px)`,
    }));

    // Scroll button click handle
    function handleClick(fwd: boolean = true): void {
        const newVal = (fwd) ? val+1 : val-1;
        setVal(newVal);
    }

    // carousel rotation animation
    const rotateCar = (val: number): string => 
        `translateZ(${-radius}px) ${rotateFn}(${(val/cellCount*-360)}deg)`;

    const normalizeHead = (val: number): number =>
        (val >= 0)
            ? val % cellCount
            : (cellCount + val % cellCount ) % cellCount;

    // Button element for scroll buttons
    const renderButton = (fwd: boolean): JSX.Element => (
        <div className={ cls.btn } 
            style={{ right: (fwd) ? '0' : 'auto', left: (!fwd) ? '0' : 'auto' }} 
            onClick={ () => handleClick(fwd) }
        >
            { (fwd) ? <FaChevronRight/> : <FaChevronLeft/> }
        </div>
        );

    return (
        <div className={ cls.container }>
            
            {/* Rotate left button */}
            { renderButton(false) }
            
            {/* CAROUSEL */}
            <div className={ cls.scene } style={{ perspective: `${radius*1.732}px` }}>
                <div className={ cls.carousel } style={{ transform: rotateCar(val) }}>
                    { items.map((item, index) =>
                        <Item key={ item.id }
                            title={ item.title }
                            transform={ cellsStyle[index].transform }
                            opacity={ (index === normalizeHead(val)) ? '1' : '.25' }
                            imgUrl={ `https://image.tmdb.org/t/p/original${item.background}` }
                            onClick = {() => { navigate(`/details/${item.id}`)} }
                        />
                    )}
                </div>
                
            </div>

            {/* Rotate right button */}
            { renderButton(true) }
            
            {/* Navigation Dots at the bottom */}
            <div className={ cls.dot_bar }>
                { items.map((item, index) =>
                    <span key={index}
                        onClick = { () => 
                            setVal(index + cellCount * Math.floor(val/cellCount)) } 
                        className={ (index === normalizeHead(val)) 
                            ? `${cls.dot} ${cls.current_dot}`
                            : `${cls.dot}` }>
                    </span>
                )}
            </div>

        </div>
    )
}

export default Carousel;