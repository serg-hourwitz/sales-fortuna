import { useEffect, useState } from 'react';
import ArrowPrev from './ArrowPrev';
import ArrowNext from './ArrowNext';
import Indicators from './Indicators';
import Card from './Cards';
import { cardsData } from './cardsData';


const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 950) setCardsPerView(1);
      else if (width < 1340) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(cardsData.length - cardsPerView + 1);


  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  const sliderWidth = cardsPerView * 380 + (cardsPerView - 1) * 16;

  return (
    <div className="flex flex-col items-center gap-10 pb-11">
      <div className="flex items-center gap-4 overflow-hidden flex-col md:flex-row">
        <ArrowPrev onClick={goPrev} />
        <div
          className="relative overflow-hidden"
          style={{ width: `${sliderWidth}px` }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (380 + 16)}px)`,
            }}
          >
            {cardsData.map((card, i) => (
              <div key={i} className="shrink-0 w-[380px] mx-2">
                <Card data={card} />
              </div>
            ))}
          </div>
        </div>

        <ArrowNext onClick={goNext} />
      </div>

      <Indicators
        count={totalSlides}
        activeIndex={activeIndex}
        onIndicatorClick={handleIndicatorClick}
      />
    </div>
  );
};

export default Slider;
