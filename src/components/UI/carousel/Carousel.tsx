import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import cls from './Carousel.module.css';
import Item from './Item';
import Button from './Button';
import Dots from './Dots';

interface Props {
    items: MediaItem[]
};
const rotateFn: string = 'rotateY'; // rotateX for different rotation axis

const Carousel: React.FC<Props> = ({ items }) => {

    const navigate = useNavigate();
    
    const [val, setVal] = useState<number>(Math.floor(Math.random() * items.length)); // position of carousel HEAD element

    // calculating Carousel Radius based on each Cell Size and Cell Q-ty = items.length
    const cellSize: number = useWindowDimensions().width * 0.8;
    const radius: number = useMemo(() => 
        Math.round(( cellSize / 2) / Math.tan( Math.PI / items.length ))
    , [cellSize, items.length]);
    // perspective distance
    const perspective: number = useMemo(() =>
        2 * radius * Math.cos( Math.PI / items.length )
    , [radius, items.length]);
            // console.log(perspective/radius)
    // 3D positioning each individual cell
    const cellsStyle: string[] = useMemo(() =>
        items.map((item, index) => 
            `${rotateFn}(${index*360/items.length}deg) translateZ(${radius}px)`)
    , [radius, items]);

    // carousel rotation animation
    const rotateCar = useCallback((val: number): string => 
        `translateZ(${-radius}px) ${rotateFn}(${(val/items.length*-360)}deg)`
    , [radius, items.length]);

    // normalize Head Position (to be in range: from 0 to item.length-1) 
    const normHeadPosition = useCallback((val: number): number =>
        (val >= 0)
            ? val % items.length
            : (items.length + val % items.length ) % items.length
    , [items.length]);

    // Arrows click Carousel rotation click handle
    const handleArrowClick = useCallback((dir: "left" | "right"): void => {
        setVal(oldVal => 
            (dir==="right") ? oldVal+1 : oldVal-1);
    }, [])

    // Dot click Carousel rotation click handle
    const handleDotClick = useCallback((index: number): void => {
        setVal(oldVal => 
            index + items.length * Math.floor(oldVal/items.length));
    }, [items.length]);

    return (
        <div className={ cls.container }>
            
            {/* Rotate left button */}
            <Button direction='left' onClick={ handleArrowClick }/>

            {/* CAROUSEL */}
            <div className={ cls.scene } style={{ perspective: `${perspective}px` }}>
                <div className={ cls.carousel } style={{ transform: rotateCar(val) }}>
                    { items.map((item, index) =>
                        <Item key={ item.id }
                            title={ item.title }
                            transform={ cellsStyle[index] }
                            opacity={ (index === normHeadPosition(val)) ? '1' : '.25' }
                            imgUrl={ `https://image.tmdb.org/t/p/original${item.background}` }
                            onClick ={ () => { navigate(`/details/${item.id}`)} }
                        />
                    )}
                </div>
                
            </div>

            {/* Rotate right button */}
            <Button direction='right' onClick={ handleArrowClick }/>


            {/* Navigation Dots at the bottom */}
            <Dots 
                items= { items }
                headPosition={ normHeadPosition(val) }
                onClick={ handleDotClick }
            />

        </div>
    )
}

export default Carousel;