import cls from './Carousel.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
    direction: 'left' | 'right',
    onClick: (dir: 'left' | 'right') => void
};

const Button: React.FC<Props> = ({ direction, onClick }) => {
    
    return (
        <div className={ cls.btn } 
            onClick={ () => onClick(direction) }
            style={{ 
                right: (direction==='right') ? '0' : 'auto', 
                left: (direction==='left') ? '0' : 'auto' 
            }} 
        >
            { (direction==='right') ? <FaChevronRight/> : <FaChevronLeft/> }
        </div>
    )
};

export default Button;