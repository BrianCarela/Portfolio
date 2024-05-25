import "./portfolio.css";

import IMG1 from "../../assets/SpaceMission.png";
import IMG2 from "../../assets/pokedex.png";
import IMG3 from "../../assets/Todo.png";
import IMG4 from "../../assets/Simon.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Space Mission",
      img: IMG1,
      description:
        "A website that hosts information about Rover and it's last mission to Mars. \n Hosted on AWS",
      technologies: "React.js | Axios | API | Router",
      link: "https://master.d2xpnjxqz7lqxv.amplifyapp.com/",
    },
    {
      id: 2,
      title: "Shiny Pokedex",
      img: IMG2,
      description:
        "Search for any Pokemon, and get a sprite of it and it's shiny version! \n Hosted on AWS",
      technologies: "React | Typescript | Redux.js | Axios | MUI",
      link: "https://main.d1f39cd726hpq9.amplifyapp.com/",
    },
    {
      id: 3,
      title: "Todo List",
      img: IMG3,
      description:
        "List some simple tasks that will remain saved in the browser",
      technologies: "React | Local Storage | Material UI",
      link: "https://todo-list-react-ecgz.onrender.com/",
    },
    {
      id: 4,
      title: "Simon Says",
      img: IMG4,
      description:
        "Classic memory game",
      technologies: "React.js | useState | useEffect",
      link: "https://simon-says-game-ewi8.onrender.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item sand-stripes" key={pro.id}>
            <div className="portfolio__item-image">
              <a href={pro.link} target="_blank"><img src={pro.img} alt={pro.title} /></a>
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
