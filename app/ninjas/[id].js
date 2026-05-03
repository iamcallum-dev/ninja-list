export const getStaticPaths = async () => {
	const res = await fetch("http://localhost:3000/api/ninjas");
	const data = await res.json();

	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

const Details = () => {
	return (
		<div>
			<h3>Details Page</h3>
		</div>
	);
};

export default Details;
