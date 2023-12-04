import Image from "next/image";
import { Ephesis } from 'next/font/google'

const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })

function Footer({data}: any) {
  return (
    <div className="bg-white">
      <div className="relative flex items-center justify-center flex-col w-full h-[400px] rounded-t-full">
        <Image
          src={data.footerImage || "/image/penutup.jpg"}
          alt="Sampul"
          width={240}
          height={300}
          className={`w-[100%] h-[100%] object-cover rounded-t-full`}
          priority
        />
        <div className="bg-gradient-to-t from-black/75 to-black/5 absolute top-0 left-0 right-0 bottom-0 rounded-t-full" />
        <div className="absolute z-[5] text-center">
          <p className={`text-white text-[15px]`}>See You on Our Big Day</p>
          <p className={`text-white text-[40px] ${ephesis.className}`}>{data.headerBrideName || 'Mala'}  &  {data.headerGroomName || 'Dhany'}</p>
        </div>
        {/* <div className="bg-white/90 blur-xl w-full h-[100px] absolute bottom-0 z-[3]" /> */}
      </div>
    </div>
  );
}

export default Footer;