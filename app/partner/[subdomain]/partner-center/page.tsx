"use client"
import {useForm} from 'react-hook-form'

type dataView = {
	bride_name: string;
	groom_name: string;
}

import CasualWe from '../../../themes/CasualWe'
function Page() {
	const form = useForm<dataView>();

	const {watch, register} = form;
	return (
		<div className='flex w-full h-screen'>
			<div className='w-[300px] bg-slate-500'>Side</div>
			<div className='flex items-center w-full'>
				<div className='w-full h-screen bg-red-200 px-5 py-5'>
					<form className='flex flex-col'>
						<label>Name 1</label>
						<input {...register("bride_name")} />
						<label>Name 2</label>
						<input {...register("groom_name")} />
					</form>
				</div>
				<div className='w-[500px] h-screen overflow-y-auto'>
					<CasualWe data={form} type={'preview'} />
				</div>
			</div>
		</div>
	);
}

export default Page;