function Page({params}: any) {
	const { id } = params; 
	return (
		<>
			<div className="container mx-auto">
				<div className="bg-yellow-200 w-full h-[200px]">Box {id}</div>
			</div>
		</>
	);
}

export default Page;