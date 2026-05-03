import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			<Link href='/ninjas'>See Ninja Listing</Link>
		</div>
	);
}