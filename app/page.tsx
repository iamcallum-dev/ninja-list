import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1>Homepage</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			{/* legacyBehaviour is needed however, it is deprecated and will be removed in the future. 
      get a messsage in the console saying we can use codemod to update the code/upgrade the components */}
			<Link legacyBehavior href='/ninjas'>
				<a>See Ninja Listing</a>
			</Link>
			<Footer />
		</div>
	);
}
