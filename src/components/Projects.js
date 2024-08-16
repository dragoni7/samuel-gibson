import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Projects() {
  const uniProjects = [
    {
      title: "Bolt Preload Analysis",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      description:
        "Python application for generating a prediction for when a particular bolt will require maintenance due to preload loss. Driven by data collected during physical tests requested by client. Part of the multi-disciplinary Boeing Scholars program and WSU Business Plan Competition.",
      url: "https://github.com/dragoni7/Bolt-Preload-Analysis",
    },
    {
      title: "Bullet Hell Game",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      description:
        "A bullet hell 2D shooter game created with the Monogame framework. Developed in a team with the intention of demonstrating understanding of multiple software design patterns and model view controller architecture.",
      url: "https://github.com/dragoni7/DesignPatternShooter",
    },
    {
      title: "Steam Reviews Frequent Words",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      description:
        "Python program for discovering frequent negative and positive words from Steam store reviews. Utilizes several data mining methodologies to reduce, clean, and preprocess a review dataset.",
      url: "https://github.com/dragoni7/Steam-Reviews-Frequent-Words",
    },
    {
      title: "Checkstyle Halstead Plugin",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      description:
        "Plugin for Eclipse Checkstyle that adds checks for Halstead metrics and more.",
      url: "https://github.com/dragoni7/CheckStyle-Plugin-Project",
    },
    {
      title: "Graph Theorists Sketchpad",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      description:
        "A WinForms sketchpad application enabling the drawing of different types of graphs and display of graph information.",
      url: "https://github.com/dragoni7/Graph-Theorists-Sketchpad",
    },
  ];

  const personalProjects = [
    {
      title: "BanWho?",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      description:
        "Full-Stack data analytic web app designed for players of the video game League of Legends utilizing data from the public API of Riot Games. Hosted on Azure, utilizing Quartz background jobs to retrieve, filter and aggregate API data into an Azure database.",
      url: "https://banwho.info/",
    },
    {
      title: "Dino Konpeito",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      description:
        "A simple game about a dinosaur collecting falling konpeitos. Developed with the .NET Godot engine in collaboration with an artist.",
      url: "https://github.com/dragoni7/DinoKonpeito",
    },
    {
      title: "Artist Gallery Site",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      description:
        "Volunteer web development work for artist client. Utilizes Azure static web app hosting, Azure functions, and the Azure data api builder to provide data upload and retrieval from database and blob storage.",
      url: "",
    },
    {
      title: "Video Game Mods",
      language:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      description:
        "Various mods developed for games such as Minecraft. Uploaded on Curseforge with over 800k user downloads.",
      url: "https://github.com/stars/dragoni7/lists/game-mods-and-projects",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">University Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {uniProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {personalProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
