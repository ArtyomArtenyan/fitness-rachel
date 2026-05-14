import Navbar from './components/Navbar';
import About from './sections/About';
import Hero, { HeroStats, HeroTestimonial } from './sections/Hero';
import Process from './sections/Process';
import Programs from './sections/Programs';
import Services from './sections/Services';

const App = () => {
	return (
		<main className='bg-[#121212]'>
			<div className='bg-[url(./assets/images/dw9FDUcCUVRV9StGpW0X4yNrXWo.png)] bg-cover bg-right bg-no-repeat min-h-screen flex flex-col justify-end'>
				<Navbar />
				<Hero />
			</div>
			<HeroStats />
			<HeroTestimonial />
			<About />
			<Services />
			<Process />
			<Programs />
		</main>
	);
};

export default App;
