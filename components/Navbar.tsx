import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image src='/logo.png' alt='logo' width={128} height={77} />
				<h1>Ninja List</h1>
			</div>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<Link href='/ninjas'>Ninja Listing</Link>
		</nav>
	);
};

export default Navbar;
