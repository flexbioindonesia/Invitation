"use client"
import { Inter, Pacifico, Allura } from 'next/font/google'
import {useForm, SubmitHandler } from 'react-hook-form'

const inter = Allura({ weight: ['400'], subsets: ['latin'] })

type dataForm = {
	Name: string;
	Message: string;
	New: string;
}

function Index({
	data, type
}: any) {
	const {watch, setFocus} = data;
	const form = useForm<dataForm>();
	const {watch : watchHere, register: registerHere, handleSubmit} = form;
	// const {bride_name, groom_name} = watch();
	if(type === 'preview'){
	}else{

	}

	const onSubmit: SubmitHandler<dataForm> = (data: any) => {
		const scriptURL = `https://script.google.com/macros/s/AKfycbxAu4knTpSnDYptPgpDB1eiTqX5F2Kle0SUugF5kngY7hg48JLalcSokge_zu_m6RgL/exec`
		var form_data = new FormData();
		for ( var key in data ) {
			form_data.append(key, data[key]);
		}
		fetch(scriptURL, { method: 'POST', body: form_data})
			.then(response => {
				console.log('Success!', response)
				})
			.catch(error => {
				console.log('Error!', error.message)
			})
	}

	return (
		<>
			<div className="bg-black/40 w-full h-[400px] flex flex-col items-center justify-center">
				<div className={`${inter.className} text-center text-xl text-white`}>
					{/* <p onClick={() => setFocus('bride_name')} className='cursor-pointer hover:shadow-lg'>{ bride_name ? bride_name : 'First Name'}</p>
					<p>&</p>
					<p onClick={() => setFocus('groom_name')} className='cursor-pointer hover:shadow-lg'>{ groom_name ? groom_name : 'Second Name'}</p> */}
				</div>
			</div>
			<div className='px-4 py-4 w-full h-[400px]'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input {...registerHere("Name")}  />
					<input {...registerHere("Message")}  />
					<input {...registerHere("New")}  />
					<button type='submit'>Submit</button>
				</form>
			</div>
		</>
	);
}

export default Index;