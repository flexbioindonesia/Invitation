function Page({params}: any) {
	const { id } = params;
	return (
		<>
			<div>
				<div className="w-full h-screen relative overflow-hidden">
					<ul className="cb-slideshow">
						<li>
							<span style={{
								backgroundImage: "url('https://images.unsplash.com/photo-1595356700395-6f14b5c1f33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
							}}>Image 01</span>
						</li>
						<li>
							<span style={{
								backgroundImage: "url('https://images.unsplash.com/photo-1591019052241-e4d95a5dc3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
								animationDelay: '6s'
							}}>Image 01</span>
						</li>
						<li>
							<span style={{
								backgroundImage: "url('https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
								animationDelay: '12s'
							}}>Image 01</span>
						</li>
						<li>
							<span style={{
								backgroundImage: "url('https://images.unsplash.com/photo-1517430554953-a5ba4678fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
								animationDelay: '18s'
							}}>Image 01</span>
						</li>
						<li>
							<span style={{
								backgroundImage: "url('https://images.unsplash.com/photo-1595356700395-6f14b5c1f33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
								animationDelay: '24s'
							}}>Image 01</span>
						</li>
						<li>
							<span style={{
								backgroundImage: "url('https://images.unsplash.com/photo-1583161178154-c362b3459d29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
								animationDelay: '30s'
							}}>Image 01</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="container mx-auto">
				ss
			</div>
		</>
	);
}

export default Page;