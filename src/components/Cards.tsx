import CardTop from './CardTop';
import CardBottom from './CardBottom';

const Cards = () => {
  return (
    <div className='w-[1172px] flex items-center justify-between'>
      <div className="bg-white border border-borderCard rounded-lg w-[380px]">
        <CardTop
          src="./logos/serene.png"
          alt="logo1"
          text="Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction."
          param="-ml-[7px] mt-[49px]"
          style="mt-5"
        />
        <CardBottom
          src="./portraits/morgan.jpg"
          alt="portrait1"
          name="Ethan Morgan"
          title="Founder and CEO, Serene Living Products"
        />
      </div>

      <div className="bg-white border border-borderCard rounded-lg w-[380px]">
        <CardTop
          src="./logos/starlight.png"
          alt="logo2"
          text="Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle."
          param="-ml-[4px] mt-[76px]"
          style="mt-10"
        />
        <CardBottom
          src="./portraits/hayes.jpg"
          alt="portrait1"
          name="Olivia Hayes"
          title="Owner, Starlight Creations"
        />
      </div>

      <div className="bg-white border border-borderCard rounded-lg w-[380px]">
        <CardTop
          src="./logos/opulent.png"
          alt="logo3"
          text="Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth."
          param="-ml-[18px] mt-[77px]"
          style="mt-5"
        />
        <CardBottom
          src="./portraits/reed.jpg"
          alt="portrait3"
          name="Alexander Reed"
          title="Co-Founder, Opulent Living Group"
        />
      </div>
    </div>
  );
};

export default Cards;
