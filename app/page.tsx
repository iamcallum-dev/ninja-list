import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1>Homepage</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			<Footer />
		</div>
	);
}
