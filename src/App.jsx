import { useContext } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import { Service } from "./components/Service";

import { ThemeContext } from "./ThemeContext";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <Header />
        <About />
        <Service />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}

export default App;
