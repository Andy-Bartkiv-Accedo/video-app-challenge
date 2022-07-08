import { useNavigate } from 'react-router-dom';

interface Props {
    list: any[]
};

const Random5Posters: React.FC<Props> = ({ list }) => {

    const navigate = useNavigate();

    const getNRandom = (array: any[], n: number): any[] =>
        array.sort(() => .5 - Math.random()).slice(0, n);

  return (
    <div style={{ width: '95vw', height: "100%", margin: '5vh auto',
            display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', gap: '1em' }}>
        {/* <button style={{ cursor:'pointer', padding:'.25em 5em'}}>
            Create Random 5 List
        </button> */}
        <div style={{ display:'flex', height: '100%', flexDirection: 'row', gap:'.5em', fontSize:'1.25em', cursor:'pointer' }}>
            { (list[0])
                ? getNRandom(list, 5).map((item) => 
                    <div key={item.id} 
                        style={{ border:'1px solid red', width: '20%' }}
                        onClick = { () => { navigate(`/details/${item.id}`) }}
                    >
                            <img style={{width:'17.56vw'}} 
                                src={ `https://image.tmdb.org/t/p/original${item.background}` } alt="Poster" />
                        {/* { item.id + '-' + item.type + ' - ' + item.title } */}
                    </div>)
                : 'no list'
            }
        </div>
    </div>
  )
}

export default Random5Posters