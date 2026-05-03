import Link from "next/link";
import type { Metadata } from "next";
import styles from "./Home.module.css";

export const metadata: Metadata = {
	title: "Ninja List | Home",
	keywords: ["ninjas"],
};

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Homepage</h1>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<p className={styles.text}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			</p>
			<Link className={styles.btn} href='/ninjas'>
				See Ninja Listing
			</Link>
		</div>
	);
}
