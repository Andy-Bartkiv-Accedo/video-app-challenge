import cls from './Carousel.module.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
    direction: "left" | "right",
    onClick: () => void
};

const Button: React.FC<Props> = ({ direction, onClick }) => {
    
    // Button element for scroll buttons
    const renderButton = (fwd: boolean): JSX.Element => (
        <div className={ cls.btn } 
            style={{ right: (fwd) ? '0' : 'auto', left: (!fwd) ? '0' : 'auto' }} 
            onClick={ onClick }
        >
            { (fwd) ? <FaChevronRight/> : <FaChevronLeft/> }
        </div>
        );
    return (
        <>
        { (direction === 'left') ? renderButton(false) : renderButton(true) }
        </>
    )
};

export default Button;