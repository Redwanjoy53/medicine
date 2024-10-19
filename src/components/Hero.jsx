import HeroImg from "../assets/hero.png";
export const Hero = () => {
  return (
    <section>
      <div className="container  min-h-[660px] bg-secondary rounded-2xl grid grid-cols-1 md:grid-cols-2  content-center items-center ">
        {/* hero text */}
        <div className=" flex flex-col gap-6 text-center md:text-left mt-10 justify-center items-center md:items-start">
          <h1 className="text-5xl font-bold text-third ">
            COVID-19 Risk
            <br />
            Assessment Tool
          </h1>
          <p className=" text-gray-400 md:w-3/4 text-lg ">
            A set of solutions designed to help quickly identify coronavirus
            symptoms and get reliable information regarding COVID-19 concerns.
          </p>
          <a
            href="./"
            className=" bg-primary text-white py-4 px-4 cursor-pointer rounded-lg hover:shadow-2xl hover:scale-125 transform duration-300 font-bold"
          >
            See how to use it
          </a>
        </div>
        {/* hero img */}
        <div className=" flex flex-col  mt-10   items-center ">
          <img src={HeroImg} alt="hero.img" className="w-[85%] md:w-full " />
        </div>
      </div>
    </section>
  );
};
