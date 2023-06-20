import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web5 from "../images/web5.png";
import web6 from "../images/web6.png";

const Portfolio = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 pt-3 text-teal-600">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Welcome to my web development portfolio! Here, you'll find a curated
          collection of my projects that showcase my expertise in creating
          engaging and user-friendly websites. From sleek corporate sites to
          vibrant e-commerce platforms, each project reflects my dedication to
          delivering exceptional web experiences.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Let's collaborate and bring your digital vision to life!
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <img
            src={web1}
            alt="web1"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web2}
            alt="web2"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web3}
            alt="web3"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web4}
            alt="web4"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web5}
            alt="web5"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            src={web6}
            alt="web6"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
