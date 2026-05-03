import styles from "../Ninjas.module.css";

interface Ninja {
	id: number;
	name: string;
	email: string;
}

const Ninjas = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const ninjas: Ninja[] = await res.json();

	return (
		<div>
			<h1>All Ninjas</h1>
			{ninjas.map((ninja) => (
				<div key={ninja.id}>
					<a className={styles.single}>
						<h3>{ninja.name}</h3>
					</a>
				</div>
			))}
		</div>
	);
};

export default Ninjas;
