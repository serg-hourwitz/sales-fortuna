import Cards from './Cards';
import ArrowPrev from './ArrowPrev';
import ArrowNext from './ArrowNext';
import Indicators from './Indicators';

const Slider = () => {
  return (
    <div className='flex flex-col items-center gap-10 pb-11'>
      <div className="flex items-center gap-7">
        <ArrowPrev />
        <Cards />
        <ArrowNext />
      </div>
      <Indicators />
    </div>
  );
};

export default Slider;
