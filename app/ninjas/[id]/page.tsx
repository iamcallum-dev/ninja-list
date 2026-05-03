interface Address {
	city: string;
}

interface Ninja {
	id: number;
	name: string;
	email: string;
	website: string;
	address: Address;
}

const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const ninja: Ninja = await res.json();

	return (
		<div>
			<h1>{ninja.name}</h1>
			<p>{ninja.email}</p>
			<p>{ninja.website}</p>
			<p>{ninja.address.city}</p>
		</div>
	);
};

export default Details;
