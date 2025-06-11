type CardBottomProps = {
  src: string;
  alt: string;
  name: string;
  title: string;
};

const CardBottom = ({ src, alt, name, title }: CardBottomProps) => {
  return (
    <div className="flex items-start gap-4 pl-6 mb-5">
      <img src={src} alt={alt} />
      <div className="w-[230px]">
        <p className="font-bold text-2xl">{name}</p>
        <p className="font-medium text-xl">{title}</p>
      </div>
    </div>
  );
};

export default CardBottom;
