import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import profile from "../images/profile.png";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between items-center">
        <h1 className="text-xl text-gray-900 dark:text-white">Devarkar</h1>
        <ul className="flex items-center">
          <li>
            <div onClick={toggleDarkMode} className="cursor-pointer">
              {isDarkMode ? (
                <BsSunFill className="text-2xl text-white" />
              ) : (
                <BsFillMoonStarsFill className="text-2xl text-gray-900" />
              )}
            </div>
          </li>
          <li>
            <a
              href="https://react-icons.github.io/react-icons/icons?name=bs"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl max-w-lg mx-auto">
          Htoo Arkar Lin
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Developer and coffee lover.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white">
          Freelancer providing services for website and software development
          needs.
          <span className="md:block">
            Join me down below and let's get cracking!
          </span>
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a
          href="https://github.com/arkarWebDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.facebook.com/arkarWebDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.youtube.com/channel/UCGF6qMTaldt2ev4Q-ahu1Jw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube />
        </a>
      </div>
      <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-80 md:w-80">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
};

export default Header;
