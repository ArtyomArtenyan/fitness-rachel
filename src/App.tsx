import Navbar from './components/Navbar';
import Hero from './sections/Hero';

const App = () => {
	return (
		<main className='bg-[#121212]'>
			<div className='bg-[url(./assets/images/dw9FDUcCUVRV9StGpW0X4yNrXWo.png)] bg-cover bg-right bg-no-repeat min-h-screen flex flex-col justify-end'>
				<Navbar />
				<Hero />
			</div>
		</main>
	);
};

export default App;
