import { useContext } from 'react';
import { MediaContext } from '../context';
import Random5List from './Random5List';

const Series = () => {

  const mediaLibrary: any[] = useContext(MediaContext);
  
  return (
    <div className="carousel">

      <Random5List list={ mediaLibrary.filter(item => item.type === 'tv') }/>

    </div>
  )
}

export default Series