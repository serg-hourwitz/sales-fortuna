import Icon from './Icons/Icons';

type ArrowPrevProps = {
  onClick: () => void;
};


const ArrowPrev = ({ onClick }: ArrowPrevProps) => {
  return (
    <div
      className="w-16 h-16 bg-white border border-borderArrow rounded-full cursor-pointer hover:bg-quotes transition-all duration-300 ease-in-out flex items-center justify-center group hover:-translate-x-2 md:hover:translate-x-2"
      onClick={onClick}
    >
      <Icon
        icon="prev"
        className="text-3xl text-arrow group-hover:text-white"
      />
    </div>
  );
};

export default ArrowPrev;
