import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			<Link legacyBehavior href='/ninjas'>
				<a>See Ninja Listing</a>
			</Link>
		</div>
	);
}
