import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    
                        <div className="skill-bx">
                            <h2>
                                Languages I've Used
                            </h2>
                            <Carousel responsive={responsive} infinite={true} autoPlay={false} className="skill-carousel">
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                            </Carousel>
                        </div>

                        <div className="skill-bx">
                            <h2>
                                Frameworks I've Used
                            </h2>
                            <Carousel responsive={responsive} infinite={true} autoPlay={false} className="skill-carousel">
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/junit/junit-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/blazor/blazor-original.svg"} alt="SkillImage" />
                                </div>
                            </Carousel>
                        </div>

                        <div className="skill-bx">
                            <h2>
                                Tools & Platforms I've Used
                            </h2>
                            <Carousel responsive={responsive} infinite={true} autoPlay={false} className="skill-carousel">
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/godot/godot-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/gradle/gradle-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/neo4j/neo4j-original-wordmark.svg"} alt="SkillImage" />
                                </div>
                                <div className="skill-item">
                                    <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg"} alt="SkillImage" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills