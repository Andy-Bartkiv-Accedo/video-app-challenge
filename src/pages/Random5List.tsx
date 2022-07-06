import { useNavigate } from 'react-router-dom'; 

interface Props {
    list: any[]
};

const Random5List: React.FC<Props> = ({ list }) => {

    const navigate = useNavigate();

    const getNRandom = (array: any[], n: number): any[] =>
        array.sort(() => .5 - Math.random()).slice(0, n);

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
                    <div key={item.id} 
                        onClick = { () => { navigate(`/details/${item.id}`) }}
                    >
                        { item.id + '-' + item.type + ' - ' + item.title }
                    </div>)
                : 'no list'
            }
        </div>
    </div>
  )
}

export default Random5List