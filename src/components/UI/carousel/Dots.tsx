import cls from './Carousel.module.css';

interface Props {
    items: MediaItem[],
    headPosition: number,
    onClick: (index:number) => void
};

const Dots: React.FC<Props> = ({ items, headPosition, onClick }) => {

    return (
        <div className={ cls.dot_bar }>
        { items.map((item, index) =>
            <span key={index}
                onClick = { () => onClick(index) } 
                className={ (index === headPosition) 
                    ? `${cls.dot} ${cls.current_dot}`
                    : `${cls.dot}` }>
            </span>
        )}
    </div>
    )
};

export default Dots;