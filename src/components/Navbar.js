import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: "",
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: "is-active",
					  })
					: this.setState({
							navBarActiveClass: "",
					  });
			}
		);
	};

	render() {
		return (
			<div
				data-collapse="medium"
				data-animation="default"
				data-duration="400"
				role="banner"
				class="navigation w-nav"
			>
				<div class="navigation-wrap">
					<a
						href="index.html"
						aria-current="page"
						class="logo-link w-nav-brand w--current"
					>
						<img
							src="images/cStopFullColor.png"
							width="108"
							data-w-id="18638a64-158e-82a5-ef35-2151b27a4e28"
							sizes="(max-width: 479px) 100vw, 108px"
							srcset="images/cStopFullColor-p-500.png 500w, images/cStopFullColor.png 784w"
							alt=""
							class="logo-image"
						/>
					</a>
					<div class="menu">
						<nav role="navigation" class="navigation-items w-nav-menu">
							<a
								href="index.html"
								aria-current="page"
								class="navigation-item w-nav-link w--current"
							>
								Home
							</a>
							<a href="about.html" class="navigation-item w-nav-link">
								Services
							</a>
							<a href="projects.html" class="navigation-item w-nav-link">
								Protocols
							</a>
							<a href="team.html" class="navigation-item w-nav-link">
								about
							</a>
							<a href="contact.html" class="navigation-item w-nav-link">
								Contact
							</a>
						</nav>
						<div class="menu-button w-nav-button">
							<img
								src="images/menu-icon_1menu-icon.png"
								width="22"
								alt=""
								class="menu-icon"
							/>
						</div>
					</div>
					<a
						id="navQuoteButton"
						href="mailto:mail@business.com?subject=You&#x27;ve%20got%20mail!"
						class="button cc-contact-us w-inline-block"
					>
						<div class="text-block">Request a Quote</div>
					</a>
				</div>
			</div>
		);
	}
};

export default Navbar;
