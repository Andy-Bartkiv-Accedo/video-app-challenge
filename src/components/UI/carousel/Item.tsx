import cls from './Carousel.module.css';

interface Props {
    transform: string,
    opacity: string,
    imgUrl: string,
    title: string,
    onClick: () => void,
};

const Item: React.FC<Props> = ({ transform, opacity, onClick, imgUrl, title}) => {
    return (
        <div
            className={ cls.carousel_cell }
            style = {{ transform, opacity }}
            onClick = { onClick }
        >
            {/* Each item image */}
            <img src={ imgUrl } alt={ `Title: ${title}` } />
        </div>
    )
};

export default Item;