import logoImg from "../assets/logo.png";
export const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      link: "./products",
      title: "Products",
    },
    {
      id: 2,
      link: "./stories",
      title: "Custom Stories",
    },
    {
      id: 3,
      link: "./about",
      title: "About",
    },
    {
      id: 4,
      link: "./blogs",
      title: "Blogs",
    },
  ];
  return (
    <>
      <div className="container flex justify-between items-center py-6 ">
        {/* logo icon */}
        <div className=" content-center">
          <img src={logoImg} alt="logo" className="w-40 " />
        </div>
        {/* menu items */}
        <div className="hidden md:block">
          <ul className="flex gap-8 text-lg font-sans justify-center ">
            {menuItems.map((menu) => {
              return (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="hover:text-primary transform duration-200"
                  >
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="border-2 border-gray-400 px-3 py-2 rounded-md hover:bg-primary hover:text-white transform duration-300 ">
          Get in touch
        </button>
      </div>
    </>
  );
};
