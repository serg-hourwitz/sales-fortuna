import CardTop from './CardTop';
import CardBottom from './CardBottom';

type CardProps = {
  data: {
    logo: string;
    altLogo: string;
    text: string;
    logoClass: string;
    textClass: string;
    portrait: string;
    altPortrait: string;
    name: string;
    title: string;
  };
};

const Card = ({ data }: CardProps) => {
  return (
    <div className="bg-white border rounded-lg w-[100%] lg:w-[380px]">
      <CardTop
        src={data.logo}
        alt={data.altLogo}
        text={data.text}
        param={data.logoClass}
        style={data.textClass}
      />
      <CardBottom
        src={data.portrait}
        alt={data.altPortrait}
        name={data.name}
        title={data.title}
      />
    </div>
  );
};

export default Card;
