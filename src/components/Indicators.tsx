type IndicatorsProps = {
  count: number;
  activeIndex: number;
  onIndicatorClick: (index: number) => void;
};

const Indicators = ({
  count,
  activeIndex,
  onIndicatorClick,
}: IndicatorsProps) => {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onIndicatorClick(idx)}
          className={`w-3 h-3 rounded-full transition-colors duration-300
            ${idx === activeIndex ? 'bg-dotBlack' : 'bg-dotLight'}
            focus:outline-none`}
        />
      ))}
    </div>
  );
};

export default Indicators;
