import "./portfolio.css";

import IMG1 from "../../assets/SpaceMission.png";
import IMG2 from "../../assets/ShinyPokemon.png";
import IMG3 from "../../assets/Todo.png";
import IMG4 from "../../assets/Raise.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Space Mission",
      img: IMG1,
      description:
        "A website that hosts information about Rover and it's last mission to Mars",
      technologies: "React.js | Axios | API | Router",
      link: "https://mars-space-mission.onrender.com/",
    },
    {
      id: 2,
      title: "Shiny Pokemon App",
      img: IMG2,
      description:
        "Search for any Pokemon, and get an image of it's shiny version!",
      technologies: "React | React Native | Hooks | Axios",
      link: "https://shiny-pokemon-app.onrender.com/",
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
      title: "Raise",
      img: IMG4,
      description:
        "Get started with free educational courses to mastery the foundations of startup equity as an African business.",
      technologies: "Remix | React.js | Webflow | jQuery",
      link: "https://www.raise.africa/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
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
