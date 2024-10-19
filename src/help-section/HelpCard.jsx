import propTypes from "prop-types";
const HelpCard = ({ title, description, imgSrc }) => {
  return (
    <div className=" border-2 border-gray-300 rounded-xl hover:scale-105 hover:shadow-xl hover:drop-shadow-xl transform duration-300  gap-5 p- h-96  mt-4 flex flex-col justify-center items-center text-center">
      <div className=" bg-secondary relative w-[100px] h-[100px]  rounded-full flex justify-center items-center">
        <img src={imgSrc} className="w-[55px] h-[55px]  " />
      </div>
      <h1 className="text-xl font-bold content-normal">{title}</h1>
      <p className=" text-gray-400 px-4 mt-4">{description}</p>
    </div>
  );
};

export default HelpCard;
HelpCard.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  imgSrc: propTypes.elementType.isRequired,
};
