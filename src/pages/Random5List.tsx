import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { getPopular } from "../service/tmdb-api";
import carousel_001 from "../static/placeholders/carousel_001.png";

interface Props {
    list: any[]
};

const Random5List: React.FC<Props> = ({list}) => {

    const navigate = useNavigate();

    // const [list, setList] = useState<any[]>([]);

    const [posterPath, setPosterPath] = useState(carousel_001);

    
    const getNRandom = (array: any[], n: number): any[] =>
        array.sort(() => .5 - Math.random()).slice(0, n);
    
    useEffect( () => {
        if (list[0]) 
            setPosterPath(`https://image.tmdb.org/t/p/original${list[0].background}`) // poster
    }, [list]);

  return (
    <div style={{ width: '80vw', margin: '5vh auto', 
            display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', gap: '1em' }}>
        <button style={{ cursor:'pointer', padding:'.25em 5em'}}>
            Create Random 5 List
        </button>
        <div style={{ display:'flex', flexDirection: 'column', gap:'.5em', fontSize:'1.25em', cursor:'pointer' }}>
            { (list[0])
                ? getNRandom(list, 5).map((item) => 
                    <div key={item.id} onClick = { () => navigate('/details/123') }>
                        { item.id + '-' + item.type + ' - ' + item.title }
                    </div>)
                : 'no list'
            }
        </div>
        <img style={{ width:'40vw', height: 'auto'}} src={posterPath} alt="" />
    </div>
  )
}

export default Random5List