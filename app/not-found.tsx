import Link from "next/link";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);

	return (
		<div className='not-found'>
			<h1>Ooops...</h1>
			<h2>That page cannot be found.</h2>
			<Link legacyBehavior href='/'>
				<a>Homepage</a>
			</Link>
		</div>
	);
};

export default NotFound;
