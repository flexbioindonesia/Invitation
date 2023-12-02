"use client"
import {useForm} from 'react-hook-form'
import Sidebar from './components/Sidebar'

import CloudinaryUploadWidget from "./CloudinaryUploadWidge";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";


export type dataView = {
	bride_name: string;
	groom_name: string;
}
import Preview from './components/Preview';
import { useState } from 'react';
function Page() {
	const form = useForm<dataView>();
	const {watch, register} = form;


	const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("dbjlrbvv4");
  // Replace with your own upload preset
  const [uploadPreset] = useState("nk4aesw5");

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);

	return (
		<div className='flex w-full h-screen'>
			<div className='w-[300px] hidden lg:overflow-y-auto lg:block'>
				<Sidebar />
			</div>
			<div className='flex items-center w-full flex-col lg:flex-row'>
				<div className='w-full lg:h-screen px-5 py-5 lg:overflow-y-auto'>
					<div className='h-[800px]'>
						<form className='flex flex-col'>
							<label>Name 1</label>
							<input {...register("bride_name")} />
							<label>Name 2</label>
							<input {...register("groom_name")} />
						</form>
						<CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
					</div>
				</div>
				<div className='lg:w-[500px] lg:h-screen lg:overflow-y-auto w-full'>
					<Preview form={form} />
				</div>
			</div>
		</div>
	);
}

export default Page;