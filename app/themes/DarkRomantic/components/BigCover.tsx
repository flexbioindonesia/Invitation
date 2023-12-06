import Image from "next/image";
import { Ephesis, Vollkorn, Loved_by_the_King } from 'next/font/google'
const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })

function BigCover({data}: any) {
  return (
    <div className={`h-screen lg:w-[70%] lg:block hidden relative`}>
      <Image
        src={data.footerImage}
        alt="Sampul"
        width={240}
        height={300}
        className={`w-[100%] h-[100%] object-cover`}
        priority
      />
      <div className="absolute py-4 z-[4] bottom-0 text-center w-full">
        <p className={`text-[52px] text-[#D4AF37] font-bold ${ephesis.className}`}>{data.headerBrideName} & {data.headerGroomName}</p>
      </div>
      <div className="bg-white blur-2xl w-full h-[100px] absolute bottom-[0px] z-[3]" />
    </div>
  );
}

export default BigCover;