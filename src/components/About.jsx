const About = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 pt-3 text-teal-600">About me</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Welcome to my portfolio website! I'm a skilled MERN{" "}
          <span className="text-teal-500">
            (MongoDB, Express.js, React.js, Node.js)
          </span>{" "}
          stack developer with a passion for creating dynamic and immersive web
          applications. With expertise in each component of the MERN stack, I am
          dedicated to delivering high-quality and robust solutions that cater
          to the unique needs of my clients.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Thank you for visiting my website, and I look forward to collaborating
          with you to create cutting-edge web applications that leave a lasting
          impact.
        </p>
      </div>
    </section>
  );
};

export default About;
