type CardTopProps = {
  src: string;
  alt: string;
  text: string;
  param: string;
  style: string;
};

const CardTop = ({ src, alt, text, param, style }: CardTopProps) => {
  return (
    <div className="pl-6 pr-8">
      <img src={src} alt={alt} className={param} />
      <p className={`text-xl text-secondary font-medium ${style}`}>{text}</p>
      <p className="text-8xl text-quotes text-end font-options">"</p>
    </div>
  );
};

export default CardTop;
