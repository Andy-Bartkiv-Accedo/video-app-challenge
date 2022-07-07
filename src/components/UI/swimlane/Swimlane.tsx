import cls from './Swimlane.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
    bookmark: string,
    list: any[]
};

const Random5Posters: React.FC<Props> = ({ bookmark, list }) => {

    const navigate = useNavigate();

    const getNRandom = (array: any[], n: number): any[] =>
        array.sort(() => .5 - Math.random()).slice(0, n);

  return (
    <div className={ cls.container }>

        <div className={ cls.bookmark }>{ bookmark }</div>

        <div className={ cls.swimlane }>
            { (list[0])
                ? getNRandom(list, 5).map((item) => 
                    <div key={item.id} 
                        style={{ border:'1px solid red', width: '20vw' }}
                        onClick = { () => { navigate(`/details/${item.id}`) }}
                    >
                            <img style={{width:'17.5vw', minWidth:'17.5vw'}} 
                                src={ `https://image.tmdb.org/t/p/original${item.background}` } alt={item.title} />
                        {/* { item.id + '-' + item.type + ' - ' + item.title } */}
                    </div>)
                : 'no list'
                }
        </div>

    </div>
  )
}

export default Random5Posters