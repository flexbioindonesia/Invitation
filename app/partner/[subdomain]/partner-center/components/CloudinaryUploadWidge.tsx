import { createContext, useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import Image from "next/image";
declare const window: any;
// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext({});

function CloudinaryUploadWidget({ id, setValue, getValues, mode, type, disabled }: any) {
  const [loaded, setLoaded] = useState(false);

  // const [publicId, setPublicId] = useState("");
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
    uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    multiple: mode === 'single' ? false : true,  //restrict upload to a single file
    folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    clientAllowedFormats: type === 'mp3' ? ['mp3'] : type, //restrict uploading to image files only
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

  // const myImage = cld.image(publicId);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      let fileArray: any[] = [];
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            if(mode === 'single'){
              setValue(id, result.info.url)
            }else{
              window.fileArray = (window.fileArray || []);
              fileArray.push(result.info.url);
              console.log(fileArray);
              setValue(id, fileArray)
            }
            // setPublicId(result.info.public_id);
          }
        }
      );
      myWidget.open();
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id={`upload_widget_${id}`}
        disabled={disabled}
        className="bg-blue-500 px-4 py-4 text-white rounded-sm"
        onClick={disabled ? () => {} : initializeCloudinaryWidget}
      >
        {`${getValues(id) ? 'Ganti' : `Upload`}`}
      </button>
      {
        type === 'images' && mode === 'single' && getValues(id) && (
          <div className="mt-4">
            <div className="flex">
              <Image
                src={getValues(id)}
                alt="Photos"
                width={120}
                height={120}
                className='w-[120px] h-[120px] object-cover rounded-md shadow-md'
                priority
              />
            </div>
          </div>
        )
      }
      {
        type === 'images' && mode === 'multiple' && getValues(id) && (
          <div className="mt-4">
            <div className="flex">
              {
                getValues(id)?.map((itm: any, i: any) => (
                  <Image
                    key={i}
                    src={itm}
                    alt="Photos"
                    width={120}
                    height={120}
                    className='w-[120px] h-[120px] object-cover rounded-md shadow-md'
                    priority
                  />
                ))
              }
            </div>
          </div>
        )
      }
      {
        type === 'mp3' && mode === 'single' && getValues(id) && (
          <div className="mt-4">
            <div className="flex">
              <audio controls autoPlay={false}>
                <source src={getValues(id)} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        )
      }
      {/* {
        mode === 'single' ?
          getValues(id) && (
            <div className="mt-4">
              <div className="flex">
                <Image
                  src={getValues(id)}
                  alt="Photos"
                  width={120}
                  height={120}
                  className='w-[120px] h-[120px] object-cover rounded-md shadow-md'
                  priority
                />
              </div>
            </div>
          ) :
          getValues(id) && (
            <div className="mt-4">
              <div className="flex">
                {
                  getValues(id).map((itm: any, i: any) => (
                    <Image
                      key={i}
                      src={itm}
                      alt="Photos"
                      width={120}
                      height={120}
                      className='w-[120px] h-[120px] object-cover rounded-md shadow-md'
                      priority
                    />
                  ))
                }
              </div>
            </div>
          )
      } */}
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
