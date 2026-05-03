import styles from "../Ninjas.module.css";
import Link from "next/link";

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
				<Link key={ninja.id} href={`/ninjas/${ninja.id}`} className={styles.single}>

                    <h3>{ninja.name}</h3>

                </Link>
			))}
        </div>
    );
};

export default Ninjas;
