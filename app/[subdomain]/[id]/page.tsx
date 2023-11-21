const data: any = {
	dhani: {
		adanb: {
			title: 'A dan B'
		},
		zdanc: {
			title: 'Z dan C'
		}
	},
	angga: {
		jdank: {
			title: 'J dan K'
		}
	}
}

function Page({params}: any) {
	const dataInv = data[params.subdomain][params.id];
	if(dataInv === undefined){
		return (
			<>Not Found</>
		)
	}
	return (
		<>Page Client id {dataInv.title}</>
	);
}

export default Page;