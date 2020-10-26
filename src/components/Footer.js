import { Link } from "gatsby";
import React from "react";
import logo from "../img/cStopFullColor.png";
import linkedin from "../img/LinkedIn_logo_initials.png";
import facebook from "../img/social/facebook.svg";

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer has-background-black has-text-white-ter">
				<div className="section">
					<div className="container">
						<div className="footer-wrap">
							<div className="div-block-3">
								<a className="image-5" href="https://www.linkedin.com/company/c-stop/">
									<img
										src={linkedin}
										loading="lazy"
										alt="Link to CStop Linked in"
										
									/>
								</a>
								<a className="image-4 footerelement" href="https://www.facebook.com/C-Stop-Health-Safety-Services-105283481304458/">
									<img src={facebook} loading="lazy" alt="Link to CStop Facebook" />
								</a>
								<Link to="/" className="webflow-link w-inline-block">
									<img src={logo} width="100" alt="" className="webflow-logo-tiny" />
									<div className="paragraph-tiny">Copyright C-Stop 2020</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;