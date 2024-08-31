import './App.css'



import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Strategy } from './components/Strategy';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { FAQS } from './components/FAQS';
import { Footer } from './components/Footer';

function App() {
	return (
		<>
		<main>
			{/* <nav>
				<div className="container nav-container">
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<span className="btn-nav" id="btn-menu">Menu</span>
					<ul>
						<li><a href="/">Demos</a></li>
						<li><a href="/">Pags</a></li>
						<li><a href="/">Projects</a></li>
						<li><a href="/">Blog</a></li>
						<li><a href="/">Blocks</a></li>
						<li><a href="/">Documentation</a></li>
						<span className="btn-nav" id="btn-close">Close</span>
					</ul>
				</div>
			</nav> */}
			<Nav />
			{/* <section className="hero">
				<div className="container hero-container">
					<div className="left">
						<h1>A digital agency specializing on <span> mobile design</span></h1>
						<p>We are an award winning design agency that
							strongly believes in the power of creative ideas.
						</p>
						<a className="btn-primary" href="">Get Started</a>
					</div>
					<div className="right">
						<img src={heroImage} alt="Hero image" />
					</div>
				</div>
			</section> */}
			<Hero />
			{/* <section className="services">
				<div className="container">
					<h2>The service we offer is specifically designed to meet your needs.</h2>
					<div className="services-list">
						<ServiceItem 
							image = {serviceImage} 
							title = "Web Design"
							description = "Description"
						/>
					</div>
				</div>
			</section> */}
			<Services />
			{/* <section className="strategy">
				<div className="container strategy-container">
					<div className="left">
						<h2>Here are 3 working steps to organize our projects.</h2>
						<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
							Etiam porta sem malesuada magna mollis euismod. 
							Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.
						</p>
						<p>
							Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. 
							Aenean lacinia bibendum nulla sed consectetur.
						</p>
						<a className="btn-primary" href="">Learn More</a>
					</div>
					<div className="right">
						<div className="strategy-cards-container">
							<div className="strategy-card first">
								<div className="order">01</div>
								<div className="info">
									<h3>Collect ideas</h3>
									<p>Nulla vitae elit libero pharetra dapibus.</p>
								</div>
							</div>
							<div className="strategy-card second">
								<div className="order">01</div>
								<div className="info">
									<h3>Collect ideas</h3>
									<p>Nulla vitae elit libero pharetra dapibus.</p>
								</div>
							</div>
							<div className="strategy-card third">
								<div className="order">01</div>
								<div className="info">
									<h3>Collect ideas</h3>
									<p>Nulla vitae elit libero pharetra dapibus.</p>
								</div>
							</div>
						</div>                 
					</div>
				</div>
			</section> */}
			<Strategy />
			{/* <section className="team">
				<div className="container team-container">
					<div className="info">
						<h2>We are proud of our design team</h2>
						<p>Just sit back and relax while we take care of your business needs for you.</p>
					</div>
					<div className="team-statistics">
						<div className="team-statistics-item">
							<div className="image">
								<img src={checkIcon} alt="" />
							</div>
							<h3>1000+</h3>
							<p>Commpleted projects</p>
						</div>
						<div className="team-statistics-item">
							<div className="image">
								<img src={userIcon} alt="" />
							</div>
							<h3>50k</h3>
							<p>Happy customers</p>
						</div>
						<div className="team-statistics-item">
							<div className="image">
								<img src={trophyIcon} alt=""	/>
							</div>
							<h3>20k</h3>
							<p>Awards won</p>
						</div>
					</div>
					<div className="team-list">
						<div className="team-item">
							<img src="src/assets/images/team/te4.jpg" alt="" />
							<h3>Coriss Ambady</h3>
							<p>Financial Analyst</p>
							<p>Fermentum massa justo sit amet risus morbi leo. </p>
							<div className="social-networks">
								<div className="social-item">
									<a href="">
										<img src="" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className="team-item">
							<img src="src/assets/images/team/te4.jpg" alt="" />
							<h3>Coriss Ambady</h3>
							<p>Financial Analyst</p>
							<p>Fermentum massa justo sit amet risus morbi leo. </p>
							<div className="social-networks">
								<div className="social-item">
									<a href="">
										<img src="" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className="team-item">
							<img src="src/assets/images/team/te4.jpg" alt="" />
							<h3>Coriss Ambady</h3>
							<p>Financial Analyst</p>
							<p>Fermentum massa justo sit amet risus morbi leo. </p>
							<div className="social-networks">
								<div className="social-item">
									<a href="">
										<img src="" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className="team-item">
							<img src="src/assets/images/team/te4.jpg" alt="" />
							<h3>Coriss Ambady</h3>
							<p>Financial Analyst</p>
							<p>Fermentum massa justo sit amet risus morbi leo. </p>
							<div className="social-networks">
								<div className="social-item">
									<a href="">
										<img src="" alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<Team />
			{/* <section className="projects">
				<h2>Check out some of our awesome projects with creative ideas and great design. </h2>
				<div className="container projects-container">
					<div className="project">
						<img src="src/assets/images/projects/project1.jpg" alt="" />
						<h3>nombre del proyecto</h3>
						<p>categoria</p>
					</div>
					<div className="project">
						<img src="src/assets/images/projects/project2.jpg" alt="" />
						<h3>nombre del proyecto</h3>
						<p>categoria</p>
					</div> 
				</div>
			</section> */}
			<Projects />
			{/* <section className="testimonials">
				<div className="container">
					<h2>Don't take our word for it. See what customers are saying about us.</h2>
					<div className="testimonials-list">
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div>
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div> 
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div> 
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div> 
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div> 
						<div className="testimonials-item">
							<p>
								“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
								Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”
							</p>
							<div className="testimonials-author">
								<div className="image">
									<img src="src/assets/images/team/te1.jpg" alt="" />
								</div>
								<div className="bio">
									<h3>Coriss Ambady</h3>
									<p>Financial Analyst</p>
								</div>
							</div>
						</div>           
					</div>
				</div>
			</section> */}
			<Testimonials />
			{/* <section className="faqs">
				<div className="container faqs-container">
					<div className="left">
						<h2>If you don't see an answer to your question, you can send us an email from our contact form.</h2>
						<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
							Nullam quis risus eget urna mollis ornare.
						</p>
						<a className="btn-primary" href="">All FAQ</a>
					</div>
					<div className="right">
						<div className="faqs-list">
							<div className="faqs-item">
								<details>
									<summary>How do I get my subscription receipt?</summary>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Ex atque facilis expedita perspiciatis dolores sint eos voluptas officia quaerat. 
										Nemo, totam! Eos voluptatum nihil recusandae similique perspiciatis unde autem doloribus quae ipsa. 
									</p>
								</details>
							</div>
							<div className="faqs-item">
								<details>
									<summary>Are there any discounts for people in need?</summary>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Ex atque facilis expedita perspiciatis dolores sint eos voluptas officia quaerat. 
										Nemo, totam! Eos voluptatum nihil recusandae similique perspiciatis unde autem doloribus quae ipsa. 
									</p>
								</details>
							</div>
							<div className="faqs-item">
								<details>
									<summary>Do you offer a free trial edit?</summary>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Ex atque facilis expedita perspiciatis dolores sint eos voluptas officia quaerat. 
										Nemo, totam! Eos voluptatum nihil recusandae similique perspiciatis unde autem doloribus quae ipsa. 
									</p>
								</details>
							</div>
							<div className="faqs-item">
								<details>
									<summary>How do I reset my Account password?</summary>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Ex atque facilis expedita perspiciatis dolores sint eos voluptas officia quaerat. 
										Nemo, totam! Eos voluptatum nihil recusandae similique perspiciatis unde autem doloribus quae ipsa. 
									</p>
								</details>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<FAQS />
		</main>

		{/* <footer>
			<div className="container footer-container">
				<h2>Join our community by using our services and grow your business.</h2>
				<a href="" className="btn-primary">Try it for free</a>
			</div>
		</footer> */}
		<Footer />
		</>
	)
}

export default App
