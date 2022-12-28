import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
				<p className="tech-icons-name">HTML</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
				<p className="tech-icons-name">CSS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJsBadge />
				<p className="tech-icons-name">JavaScript</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
				<p className="tech-icons-name">Node JS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
				<p className="tech-icons-name">React</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedux />
				<p className="tech-icons-name">Redux</p>
			</Col>
		</Row>
	);
}

export default Techstack;
