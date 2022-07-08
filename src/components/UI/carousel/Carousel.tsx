import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './Carousel.module.css';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import carousel_001 from '../../../static/placeholders/carousel_001.png';


interface Props {
    items: any[]
};

const Carousel: React.FC<Props> = ({ items }) => {

    const { height, width } = useWindowDimensions();
    console.log(height, width);

    const navigate = useNavigate();

    // init starting index for carousel
    const dig: number = Math.floor(Math.random() * 0)
    const [val, setVal] = useState<number>(dig); 
    const rotateFn: string = 'rotateY'; // rotateX for different rotation axis
    const cellCount: number = items.length;
    const cellSize = width * 0.8;
    const radius = Math.round(( cellSize / 2) / Math.tan( Math.PI / cellCount ));
    // Styling each individual cell
    const cellsStyle = items.map((item, index) => ({ 
        background: `hsla(${index*360/cellCount}, 100%, 50%, 0.25)`,
        transform: `${rotateFn}(${index*360/cellCount}deg) translateZ(${radius}px)`,
        })
    );

    console.log(cellCount, radius)


    function handleClick(fwd: boolean = true): void {
        const newVal = (fwd) ? val+1 : val-1;
        setVal(newVal);
    }

    const rotateCar = (val: number): string => 
        `translateZ(${-radius}px) ${rotateFn}(${(val/cellCount*-360)}deg)`;

    const visibleCells: number[] = [(dig === 0) ? cellCount-1 : dig-1, dig, (dig===cellCount-1) ? 0 : dig+1];
    console.log(visibleCells, cellCount)

    return (
        <div className={ cls.container }>
            <div style={{ display:'flex', gap:'5vw', height: '3vh' }}>
                <button onClick={ () => handleClick(false)}>{'< < <'}</button>
                <button onClick={ () => handleClick(true)}>{'> > >'}</button>
            </div>


            <div className={ cls.scene }>
                <div className={ cls.carousel }
                        style={{ transform: rotateCar(val) }}
                    >
                    { items.map((item, index) => 
                        <div key={item.id} 
                            className={ cls.carousel_cell }
                            style = {{ 
                                // border:'1px solid red',
                                // background: cellsStyle[index].background,
                                // background: `url(${carousel_001})`,
                                background: '#135',
                                transform: cellsStyle[index].transform,
                                // visibility: (visibleCells.includes(item)) ? 'visible' : 'hidden',
                                // color: (false && index === dig) ? '#282c34' : '#00808099',
                            }}
                            onClick = { () => { navigate(`/details/${item.id}`) }}
                        >                                
                                <img style={{width:'50%', height:'20vw', opacity: '1'}} 
                                    src={ `https://image.tmdb.org/t/p/original${item.background}` } alt={item.title} />
                        </div>)
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Carousel;