import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";

const Testimonials = () => {
  return (
    <section className=" bg-secondary min-h-[600px] py-16 ">
      <div className="text-center ">
        <h1 className="text-4xl font-bold text-third  ">
          Why you can trust this tools
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-16 text-center gap-16 px-16">
        <div className="flex flex-col justify-center items-center  gap-5 ">
          <img src={Icon1} alt="img" className="w-[150px]" />
          <h1 className="text-3xl font-bold ">Based on reliable sources</h1>
          <p className="md:w-3/5">
            We want our tool to be safe and reliable, so its logic is based on
            the official global information provided by the WHO.
          </p>
          <p className="text-gray-400 md:w-3/5">
            Enhance your preliminary diagnosis and triage with pediatric
            content. <br />
            <span className="p-style"> Learn more</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  gap-5">
          <img src={Icon2} alt="img" className="w-[190px]" />
          <h1 className="text-3xl font-bold">Based on reliable sources</h1>
          <p className="md:w-3/5">
            We want our tool to be safe and reliable, so its logic is based on
            the official global information provided by the WHO.
          </p>
          <p className="text-gray-400 md:w-3/5">
            Enhance your preliminary diagnosis and triage with pediatric
            content. <br />
            <span className="p-style"> Learn more</span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
