"use client";

import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			window.location.replace("/");
		}, 3000);
		return () => clearTimeout(timer);
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
