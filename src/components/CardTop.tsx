import Icon from "./Icons/Icons";

type CardTopProps = {
  src: string;
  alt: string;
  text: string;
  param: string;
  style: string;
};

const CardTop = ({ src, alt, text, param, style }: CardTopProps) => {
  return (
    <div className="pl-6 pr-8 mb-12">
      <img src={src} alt={alt} className={param} />
      <p className={`text-xl text-secondary font-medium ${style}`}>{text}</p>
      <div className="flex justify-end">
      <Icon icon="quote" className="text-quotes !w-[60px] !h-[36px] pt-1" />
      </div>
    </div>
  );
};

export default CardTop;
