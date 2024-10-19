import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";

const HelpBox = () => {
  return (
    <section className="container">
      <div className="card-layout-style ">
        <div className="md:flex flex-col gap-8 hidden">
          <h1 className="text-3xl font-bold text-third">How it Helps people</h1>
          <p className="text-gray-400 ">
            Understanding symptoms helps people identify potential health issues
            early. <br />
            This awareness can empower to seek appropriate treatment and make
            informed decisions about health. <br />
            <span className="p-style">Learn More</span>
          </p>
          <button className="border-2 border-gray-400 px-3 py-2 rounded-md hover:bg-primary hover:text-white transform duration-300 ">
            Get in touch
          </button>
        </div>
        <div className="card-style">
          <img src={Img4} alt="img" className="rounded-2xl" />
          <p className="mt-4">Coronavirus</p>
        </div>
        <div className="card-style ">
          <img src={Img5} alt="img" className="rounded-2xl" />
          <p className="mt-2">Diagnostic</p>
        </div>
        <div className="card-style">
          <img src={Img6} alt="img" className="rounded-2xl" />
          <p className="mt-2">Symptoms</p>
        </div>
      </div>
    </section>
  );
};

export default HelpBox;
