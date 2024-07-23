function CardYellow({ icon, title, text }) {
  return (
    <div className="bg-yellow flex flex-col items-center justify-evenly shadow-lg text-opacity-25 rounded p-5 md:px-10 h-[330px] w-[310px] ">
      <img src={icon} alt="" className="h-[46px] w-[52px]" />
      <h5 className="font-bold text-2xl capitalize leading-7 text-black-900">
        {title}
      </h5>
      <p className="font-normal text-center text-xl leading-6">{text}</p>
    </div>
  );
}
export default CardYellow;
