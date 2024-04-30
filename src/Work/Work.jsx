import React from "react";
import Card from "../Card/Card";
import styles from "./Work.module.scss";
import fakeOs from "../assets/fakeOS.png";
import google1 from "../assets/google-books.png";
import snake from "../assets/snake.png";
import lego1 from "../assets/lego-store.png";
import Masonry from "react-masonry-css";
import todo from "../assets/to-do.png";

const Work = () => {
  return (
    <div className={styles.work}>
      <Masonry
        breakpointCols={3}
        className={styles.grid}
        columnClassName={styles.grid_column}
      >
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
          link="https://github.com/maddison-wells/google-books"
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
          title="Lego E-Commerce Store
"
          img={lego1}
          description="Built with React JS, this e-commerce platform offers product browsing, searching, and cart functionality. Fetching information directly from Firestore."
          link="https://github.com/maddison-wells/legostore"
          backgroundColor="rgb(255,167,167)"
        />
        <Card
          title="To-Do App"
          img={todo}
          description="A fullstack to-do app built using Java and Springboot on the backend and React.ts on the front. Allows users to add, update and delete tasks as needed"
          link="https://github.com/maddison-wells/to-do-frontend"
          backgroundColor="rgb(201,175,187)"
        />
      </Masonry>
    </div>
  );
};

export default Work;
