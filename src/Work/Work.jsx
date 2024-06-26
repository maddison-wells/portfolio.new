import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Work.module.scss";
import fakeOs from "../assets/fakeOS.png";
import google1 from "../assets/google-books.png";
import snake from "../assets/snake.png";
import lego1 from "../assets/lego-store.png";
import Masonry from "react-masonry-css";
import todo from "../assets/to-do.png";
import recipeimg from "../assets/madsrecipe.png";

const Work = () => {
  const [breakpointCols, setBreakpointCols] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 545) {
        setBreakpointCols(1);
      } else if (window.innerWidth < 850) {
        setBreakpointCols(2);
      } else {
        setBreakpointCols(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.work}>
      <Masonry
        breakpointCols={breakpointCols}
        className={styles.grid}
        columnClassName={styles.grid_column}
      >
        <Card
          title="Personal Recipe Journal"
          img={recipeimg}
          description="First true passion project I've built! An online recipe journal that has a ReactJS frontend and Java/Springboot backend. User can add, favourite and update content"
          link="https://github.com/maddison-wells/recipebook"
          backgroundColor="rgb(201,175,187)"
        />
        <Card
          title="To-Do App"
          img={todo}
          description="A fullstack to-do app built using Java and Springboot on the backend and React.ts on the front. Allows users to add, update and delete tasks as needed"
          link="https://github.com/maddison-wells/to-do-frontend"
          backgroundColor="rgb(170,220,236)"
        />
        <Card
          title="FakeOS"
          img={fakeOs}
          description="A HTML and JavaScript project mimicking the iOS operating system, providing users with a simulated iPhone interface and applications, such as Magic-8 ball, notes and stopwatch"
          link="https://fake-os.netlify.app/"
          backgroundColor="rgb(254,238,179)"
        />

        <Card
          title="Google Books Search Engine"
          img={google1}
          description="A ReactJS search engine powered by the Google Books API, offering a platform to explore and discover books online with detailed information fetched directly from the API."
          link="https://mw-google-books-search.netlify.app/"
          backgroundColor="rgb(244,201,180)"
        />

        <Card
          title="Classic Snake Game"
          img={snake}
          description="Classic version of Snake, built using Java"
          link="https://github.com/maddison-wells/snake"
          backgroundColor="rgb(217, 112, 74)"
        />
        <Card
          title="Lego E-Commerce Store"
          img={lego1}
          description="Built with React JS, this e-commerce platform offers product browsing, searching, and cart functionality. Fetching information directly from Firestore."
          link="https://github.com/maddison-wells/legostore"
          backgroundColor="rgb(255,167,167)"
        />
      </Masonry>
    </div>
  );
};

export default Work;
