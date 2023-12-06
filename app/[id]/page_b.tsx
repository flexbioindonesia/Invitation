"use client"
import GetTheme from '../components/GetTheme';

function Page({params, form, type}: any) {
	if(type !== 'preview'){
		const { id } = params;
	}
	const data = form.watch();
	return (
		<>
			<GetTheme data={data} type={type} theme={data.generalTheme || 'Smooth'} />
		</>
	);
}

export default Page;