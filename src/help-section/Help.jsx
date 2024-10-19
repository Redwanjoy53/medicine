import HelpCard from "./HelpCard";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";

export const Help = () => {
  return (
    <section className="container ">
      <div className=" card-layout-style ">
        <HelpCard
          title="Symptoms"
          description="Symptoms are physical or mental indicators of a condition or illness that help in diagnosis and treatment."
          imgSrc={Img1}
        />
        <HelpCard
          title="Recommendations"
          description="Local information provides residents with essential resources, services, and events relevant to their community."
          imgSrc={Img2}
        />
        <HelpCard
          title="Local information"
          description="Local information provides residents with essential resources, services, and events relevant to their community."
          imgSrc={Img3}
        />

        <div className="flex  flex-col justify-center  gap-4">
          <h1 className="text-3xl font-bold text-third">How it Helps people</h1>
          <p className="text-gray-400">
            Understanding symptoms helps people identify potential health issues
            early. <br />
            This awareness can empower to seek appropriate treatment and make
            informed decisions about health. <br />
            <span className="p-style">Learn More</span>
          </p>
          <button className="border-2 border-gray-400 px-3 py-2 rounded-md hover:bg-primary hover:text-white transform duration-300  mt-5">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};
