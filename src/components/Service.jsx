import design from "../images/design.png";
import code from "../images/code.png";
import consulting from "../images/consulting.png";

export const Service = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 pt-3 text-teal-600">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Since the beginning of my journey as a freelance developer, I've done
          remote work for <span className="text-teal-500">agencies</span>{" "}
          consulted for <span className="text-teal-500">startups</span> and
          collaborated with talanted people to create digital products for
          bussiness and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I offer from a wide range of services, including programming and
          teaching.
        </p>
      </div>
      <div className="lg:flex gap-10 dark:text-white">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-slate-800">
          <img
            src={design}
            alt="design"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs design theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className=" text-gray-800 py-1 dark:text-white">Photoshop</p>
          <p className=" text-gray-800 py-1 dark:text-white">Illustrator</p>
          <p className=" text-gray-800 py-1 dark:text-white">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-slate-800">
          <img
            src={consulting}
            alt="consulting"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Design Consulting</h3>
          <p className="py-2">
            Crafting beautiful designs that captivate your audience and drive
            meaningful connections
          </p>
          <h4 className="py-4 text-teal-600">Services Offered</h4>
          <p className=" text-gray-800 py-1 dark:text-white">
            Design Evaluation
          </p>
          <p className=" text-gray-800 py-1 dark:text-white">
            Design Strategy and Branding
          </p>
          <p className=" text-gray-800 py-1 dark:text-white">
            Design Tools and Technologies
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-slate-800">
          <img
            src={code}
            alt="code"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className="py-4 text-teal-600">Teach skill I use</h4>
          <p className=" text-gray-800 py-1 dark:text-white">React Js</p>
          <p className=" text-gray-800 py-1 dark:text-white">Node Js</p>
          <p className=" text-gray-800 py-1 dark:text-white">Databases</p>
        </div>
      </div>
    </section>
  );
};
