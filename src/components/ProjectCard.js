import { Row, Col, NavLink } from "react-bootstrap";

function ProjectCard({title, language, description, url}) {

    return (
        <Col sm={6} md={4}>
            <div className="proj-txt">
                <div className="proj-title">
                    <Row>
                        <Col md={10} xs={10}>
                        <h4>
                            <NavLink href={url} target="_blank">
                                <a>
                                {title}
                                </a>
                            </NavLink>
                        </h4>
                        </Col>
                        <Col md={2} xs={2} className="align-items-center">
                            <img src={language} alt="img" />
                        </Col>
                    </Row>
                </div>
                <br />
                <span> {description} </span>
                <br />
            </div>
        </Col>
    )
}

export default ProjectCard