import moment from "moment";
import Image from "next/image";
import { FaMapLocationDot } from "react-icons/fa6";

function Events({data}: any) {
  return (
    <div className="relative px-4 py-6 bg-gray-100">
        <div className="border-l-2 w-[100px] pl-4 border-zinc-500">
          <p className="text-zinc-600 text-[23px]">Wedding Event </p>
        </div>
        <div className="flex flex-col items-end py-7 relative">
          <Image
            src={data.eventFirstPhoto || "/image/penutup.jpg"}
            alt="Sampul"
            width={240}
            height={300}
            className={`w-[80%] h-[350px] object-cover rounded-tl-full z-10`}
            priority
          />
          <div className="absolute border-[#D4AF37] border-2 w-[80%] h-[350px] rounded-bl-full" />
          <p className="text-zinc-500 mt-4 text-[12px] uppercase">{data.eventFirstName || `Akad Nikah`}</p>
          <p className="text-zinc-600">{moment(data.eventFirstDate).format('dddd, D MMM Y') || `Jumat, 03 Maret 2023`}</p>
          <p className="text-zinc-400 mt-2 text-[12px] font-normal">{data.eventFirstLocation || `Laink Park, Kota Solok`}</p>
          <a href={data.eventFirstLink || "https://goo.gl/maps/pUbFTJCoCLPNnRZ66"} target="_blank" className="bg-[#D4AF37] rounded-md flex gap-1 text-white text-xs items-center justify-center px-2 py-1 mt-2"><FaMapLocationDot />BUKA DI MAP</a>
          <div className="bg-yellow-700/60 w-40 h-40 absolute rounded-full left-0 bottom-14" />
        </div>
        <div className="flex flex-col items-start py-4">
          <Image
            src={data.eventSecondPhoto || "/image/penutup.jpg"}
            alt="Sampul"
            width={240}
            height={300}
            className={`w-[80%] h-[350px] object-cover rounded-br-full z-10`}
            priority
          />
          <div className="absolute border-[#D4AF37] border-2 w-[80%] h-[350px] rounded-b-full" />
          <p className="text-zinc-500 mt-4 text-[12px] uppercase">{data.eventSecondName || `Resepsi`}</p>
          <p className="text-zinc-600">{moment(data.eventSecondDate).format('dddd, D MMM Y') || `Sabtu, 04 Maret 2023`}</p>
          <p className="text-zinc-400 mt-2 text-[12px] font-normal">{data.eventSecondLocation || `Gedung Kubung 13 Kota Solok`}</p>
          <a href={data.eventSecondLink || "https://goo.gl/maps/pX9Uq1kmJB6dWg7S6"} target="_blank" className="bg-[#D4AF37] rounded-md flex gap-1 text-white text-xs items-center justify-center px-2 py-1 mt-2"><FaMapLocationDot />BUKA DI MAP</a>
          <div className="bg-yellow-700/60 w-40 h-40 absolute rounded-full right-5 bottom-16" />
        </div>
      </div>
  );
}

export default Events;