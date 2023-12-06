import Image from "next/image";
import { FaGift, FaCopy } from "react-icons/fa6";
import { DS_BANK } from "@/app/partner/[subdomain]/partner-center/undangan/form";

function Gifts({data}: any) {
  let groomBankData = DS_BANK.filter(v => v.id === data.giftBankGroom)[0] || ''
  let brideBankData = DS_BANK.filter(v => v.id === data.giftBankBride)[0] || ''
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
                src={`/image/banks${brideBankData.image}`}
                alt="B"
                width={48}
                height={48}
                className={`w-[48px] h-[48px] object-contain`}
                priority
              />
            </div>
            <p>{data.giftBankBride}</p>
            <p>{data.giftRekBride} a/n {data.giftRekNameBride}</p>
            <button onClick={() => {navigator.clipboard.writeText(data.giftRekBride)}} className="bg-[#D4AF37] rounded-md flex gap-1 text-white text-xs items-center justify-center px-2 py-1"><FaCopy />COPY</button>
          </div>
          {
            data.giftRekGroom !== '' && (
              <div className="w-full pt-6 pb-4 px-4 bg-white shadow-xl relative flex flex-col items-center mt-9 rounded-md text-zinc-500 border-[1px] border-[#D4AF37]">
                <div className="w-12 h-12 rounded-full shadow-sm flex justify-center items-center top-[-25px] absolute border-[1px] bg-white px-1 py-1 border-[#D4AF37]">
                  {/* <FaDollarSign /> */}
                  <Image
                    src={`/image/banks${groomBankData.image}`}
                    alt="B"
                    width={48}
                    height={48}
                    className={`w-[48px] h-[48px] object-contain`}
                    priority
                  />
                </div>
                <p>{data.giftBankGroom}</p>
                <p>{data.giftRekGroom} a/n {data.giftRekNameGroom}</p>
                <button onClick={() => {navigator.clipboard.writeText(data.giftRekGroom)}} className="bg-[#D4AF37] rounded-md flex gap-1 text-white text-xs items-center justify-center px-2 py-1"><FaCopy />COPY</button>
              </div>
            )
          }
          {
            data.giftAddress && (
              <div className="w-full pt-6 pb-4 px-4 bg-white shadow-xl relative flex flex-col items-center mt-9 rounded-md text-zinc-500 border-[1px] border-[#D4AF37]">
                <div className="w-12 h-12 rounded-full shadow-sm flex justify-center items-center top-[-25px] absolute border-[1px] bg-white px-1 py-1 border-[#D4AF37]">
                  <FaGift className="text-[#D4AF37]" />
                </div>
                <p>Pengiriman Kado</p>
                <p>{data.giftAddress}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Gifts;