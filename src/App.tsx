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
			<Nav />
			<Hero />
			<Services />
			<Strategy />
			<Team />
			<Projects />
			<Testimonials />
			<FAQS />
		</main>
		<Footer />
		</>
	)
}
export default App
