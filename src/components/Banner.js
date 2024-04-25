import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../assets/files/SamuelGibsonResume.pdf'

function Banner() {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my page</span>
                        <h1>Hi, I'm Sam Gibson</h1>
                        <h2>Software Engineer</h2>
                        <div className="vl">
                            <p>
                            Washington State University Graduate of 2023
                            <br/>
                            BA in Software Engineering.
                            <br/>
                            Boeing Scholars and WSU Business Plan Competition participant of 2022-2023.
                            </p>

                            <p>
                            As a software engineer, I am passionate about creating quality products throughout all stages of development and designing well architectured codebases.
                            <br />
                            In my free time, I enjoy modding video games, game development, learning new tech stacks, and keeping up with the latest technologies.
                            </p>

                            <a href={resume} target="_blank" type="application/pdf">Resume</a>
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="vlr">
                            <h2>Contact</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <div className="contact">
                                        <p>
                                            sdgibson18@outlook.com
                                            &ensp;
                                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact">
                                        <p>
                                            360-454-8190
                                            &ensp;
                                            <FontAwesomeIcon icon="fa-solid fa-mobile" />
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner