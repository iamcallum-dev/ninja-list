const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	return (
		<div>
			<h3>Details Page</h3>
		</div>
	);
};

export default Details;
