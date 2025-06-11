import { useState } from 'react';
import ArrowPrev from './ArrowPrev';
import ArrowNext from './ArrowNext';
import Indicators from './Indicators';
import Card from './Cards'; // це буде окремий компонент 1 картки

const cardsData = [
  {
    id: 1,
    logo: './logos/serene.png',
    altLogo: 'logo1',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
    logoClass: '-ml-[7px] mt-[49px]',
    textClass: 'mt-5',
    portrait: './portraits/morgan.jpg',
    altPortrait: 'portrait1',
    name: 'Ethan Morgan',
    title: 'Founder and CEO, Serene Living Products',
  },
  {
    id: 2,
    logo: './logos/starlight.png',
    altLogo: 'logo2',
    text: 'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
    logoClass: '-ml-[4px] mt-[76px]',
    textClass: 'mt-10',
    portrait: './portraits/hayes.jpg',
    altPortrait: 'portrait2',
    name: 'Olivia Hayes',
    title: 'Owner, Starlight Creations',
  },
  {
    id: 3,
    logo: './logos/opulent.png',
    altLogo: 'logo3',
    text: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
    logoClass: '-ml-[18px] mt-[77px]',
    textClass: 'mt-5',
    portrait: './portraits/reed.jpg',
    altPortrait: 'portrait3',
    name: 'Alexander Reed',
    title: 'Co-Founder, Opulent Living Group',
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardsData.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center gap-10 pb-11">
      <div className="flex items-center gap-7 overflow-hidden">
        <ArrowPrev onClick={goPrev} />
        <div className="relative w-[1140px] overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 1140}px)` }}
          >
            {cardsData.map((card) => (
              <div key={card.id} className="flex gap-4 w-[1140px] shrink-0">
                {/* тут відображаємо 3 картки одночасно */}
                {cardsData.map((c) => (
                  <Card key={c.id} data={c} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <ArrowNext onClick={goNext} />
      </div>

      <Indicators
        count={cardsData.length}
        activeIndex={activeIndex}
        onIndicatorClick={handleIndicatorClick}
      />
    </div>
  );
};

export default Slider;
