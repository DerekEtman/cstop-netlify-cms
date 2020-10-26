import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/cStopFullColor.png";

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
		console.log("Hi");
		return (
			<div
				data-collapse="medium"
				data-animation="default"
				data-duration="400"
				role="banner"
				className="navigation w-nav"
			>
				<div className="navigation-wrap">
					<a
						href="index.html"
						aria-current="page"
						className="logo-link w-nav-brand w--current"
					>
						<img
							src={logo}
							width="108"
							data-w-id="18638a64-158e-82a5-ef35-2151b27a4e28"
							sizes="(max-width: 479px) 100vw, 108px"
							// 	srcset="
							//   images/cStopFullColor-p-500.png 500w,
							//   images/cStopFullColor.png       784w
							// "
							alt="cStop"
							className="logo-image"
						/>
					</a>

					<div
						className={`menu navbar-burger burger ${this.state.navBarActiveClass}`}
						data-target="navMenu"
						onClick={() => this.toggleHamburger()}
					>
            
						<nav role="navigation" className="navigation-items w-nav-menu">
							<Link
								to="/"
								aria-current="page"
								className="navigation-item w-nav-link w--current"
							>
								Home
							</Link>
							<Link to="/products" className="navigation-item w-nav-link">
								Services
							</Link>
							<Link to="/protocols" className="navigation-item w-nav-link">
								Protocols
							</Link>
							<Link to="/about" className="navigation-item w-nav-link">
								about
							</Link>
							<Link to="/contact" className="navigation-item w-nav-link">
								Contact
							</Link>
						</nav>
						<div className="menu-button w-nav-button">
							<img
								src="images/menu-icon_1menu-icon.png"
								width="22"
								alt=""
								className="menu-icon"
							/>
						</div>
					</div>
					<a
						id="navQuoteButton"
						href="mailto:mail@business.com?subject=You&#x27;ve%20got%20mail!"
						className="button cc-contact-us w-inline-block"
					>
						<div className="text-block">Request a Quote</div>
					</a>
				</div>
			</div>
		);
	}

	/* Original NavBar
	render() { 
		return (
			<nav
				data-collapse="medium"
				data-animation="default"
				data-duration="400"
				role="banner"
				class="navigation w-nav"
			>
				<div className="container">
					<div className="navigation-wrap">
						<Link
							to="/"
							className="logo-link w-nav-brand w--current"
							title="Logo"
							aria-current="page"
						>
							<img
								src={logo}
								alt="CStop"
								style={{ width: "108px" }}
								data-w-id="18638a64-158e-82a5-ef35-2151b27a4e28"
								sizes="(max-width: 479px) 100vw, 108px"
								class="logo-image"
							/>
						</Link>
					
					
					<div
						id="navMenu"
						className={`navbar-menu ${this.state.navBarActiveClass}, menu `}
					>
						<nav role="navigation" class="navigation-items w-nav-menu">
							<div className="navbar-start has-text-centered">
								<Link className="navigation-item w-nav-link navbar-item" to="/">
									Home
								</Link>
								<Link className="navigation-item w-nav-link navbar-item" to="/products">
									Services
								</Link>
								<Link className="navigation-item w-nav-link navbar-item" to="/blog">
									Protocols
								</Link>
								<Link className="navigation-item w-nav-link navbar-item" to="/about">
									About
								</Link>
								<Link
									className="navigation-item w-nav-link navbar-item"
									to="/contact"
								>
									Contact
								</Link>
							</div>
						</nav>

						<div class="menu-button w-nav-button">
							<img
              src="../img/menu-icon_1menu-icon.png"
								// src="../menu-icon_1menu-icon.png"
								width="22"
								alt=""
								class="menu-icon"
							/>
						</div>
						<a
							id="navQuoteButton"
							href=""
							class="button cc-contact-us w-inline-block"
						>
							<div class="text-block">Request a Quote</div>
						</a>
					</div>
				</div>
        </div>
			</nav>
		);
  } */
};

export default Navbar;
