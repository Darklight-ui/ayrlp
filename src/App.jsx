/** @format */
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import OurWorkingProcess from "./components/OurWorkingProcess";
import AboutUs from "./components/AboutUs";
import Count from "./components/Count";
import OurServices from "./components/OurServices";
import PreTestimonials from "./components/PreTestimonials";
import Testimonials from "./components/Testimonials";
import OurContacts from "./components/OurContacts";
import Footer from "./components/Footer";
const App = () => {
	return (
		<>
			<Navbar />
			<Hero
				title='Have You Been Scammed Online? Let’s Recover Your Money Now!'
				tagline='If you’ve lost money to scammers then our expert recovery team can help you get your money back!'
			/>
			<OurWorkingProcess />
			<AboutUs />
			<Count />
			<OurServices />
			<PreTestimonials />
			<Testimonials />
			<OurContacts />
			<Footer />
		</>
	);
};

export default App;
