import Logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 pt-20   space-x-16 ">
      <div className="flex flex-col gap-5 mb-8">
        <img src={Logo} alt="logo" className="w-36" />
        <p className="text-gray-400">
          © 2024 YourCompany. All rights reserved. | Privacy Policy | Terms of
          Service. Follow us on: Facebook | Twitter | Instagram.
        </p>
      </div>
      <div className="flex gap-4 text-4xl cursor-pointer items-center justify-evenly ">
        <a href="https://www.facebook.com/profile.php?id=100010959102198">
          <FaFacebook className=" icon-style" />
        </a>
        <a href="https://www.instagram.com/redwan_hossein/">
          <FaInstagram className=" icon-style" />
        </a>
        <a href="https://www.linkedin.com/in/redwan-hossen-7a6101235/">
          <FaLinkedin className=" icon-style" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
