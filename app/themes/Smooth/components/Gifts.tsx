import Image from "next/image";
import { FaGift, FaCopy } from "react-icons/fa6";

function Gifts() {
  return (
    <div className={`relative px-4 py-6 bg-white`}>
      <div className="text-center">
        <p className="text-[#D4AF37] text-xl italic">Wedding Gift</p>
        <p className="text-zinc-400 pt-4">Kehadiran dan doa restu Bapak/Ibu/Sudara/i merupakan anugerah terindah bagi kami. Namun, apabila Bapak/Ibu/Saudara/i tidak dapat hadir dan hendak memberikan tanda kasih kepada kami, dapat menggunakan fitur di bawah ini.</p>
        <div className="px-5 flex items-center flex-col">
          <div className="w-full pt-6 pb-4 px-4 bg-white shadow-xl relative flex flex-col items-center mt-9 rounded-md text-zinc-500 border-[1px] border-[#D4AF37]">
            <div className="w-12 h-12 rounded-full shadow-sm flex justify-center items-center top-[-25px] absolute border-[1px] bg-white px-1 py-1 border-[#D4AF37]">
              {/* <FaDollarSign /> */}
              <Image
                src="/image/banks/bni.png"
                alt="Sampul"
                width={48}
                height={48}
                className={`w-[48px] h-[48px] object-contain`}
                priority
              />
            </div>
            <p>BNI</p>
            <p>1234567 a/n Dhany Dwi Putra</p>
            <button onClick={() => {navigator.clipboard.writeText(`1234567`)}} className="bg-[#D4AF37] rounded-md flex gap-1 text-white text-xs items-center justify-center px-2 py-1"><FaCopy />COPY</button>
          </div>
          <div className="w-full pt-6 pb-4 px-4 bg-white shadow-xl relative flex flex-col items-center mt-9 rounded-md text-zinc-500 border-[1px] border-[#D4AF37]">
            <div className="w-12 h-12 rounded-full shadow-sm flex justify-center items-center top-[-25px] absolute border-[1px] bg-white px-1 py-1 border-[#D4AF37]">
              {/* <FaDollarSign /> */}
              <Image
                src="/image/banks/mandiri.webp"
                alt="Sampul"
                width={48}
                height={48}
                className={`w-[48px] h-[48px] object-contain`}
                priority
              />
            </div>
            <p>MANDIRI</p>
            <p>1234567 a/n Dhany Dwi Putra</p>
            <button onClick={() => {navigator.clipboard.writeText(`1234567`)}} className="bg-[#D4AF37] rounded-md flex gap-1 text-white text-xs items-center justify-center px-2 py-1"><FaCopy />COPY</button>
          </div>
          <div className="w-full pt-6 pb-4 px-4 bg-white shadow-xl relative flex flex-col items-center mt-9 rounded-md text-zinc-500 border-[1px] border-[#D4AF37]">
            <div className="w-12 h-12 rounded-full shadow-sm flex justify-center items-center top-[-25px] absolute border-[1px] bg-white px-1 py-1 border-[#D4AF37]">
              <FaGift className="text-[#D4AF37]" />
            </div>
            <p>Pengiriman Kado</p>
            <p>Jl. cibogo bawah no XX Bandung</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gifts;