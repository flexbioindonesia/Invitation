import { Ephesis } from 'next/font/google'
import { calcTimeDelta } from "react-countdown";
const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })

function Welcome() {
  const rendererTime = (date: any) => {
    const {total, days, hours, minutes, seconds, milliseconds, completed} = calcTimeDelta(date)
    return(
      <div className="py-2 flex gap-2 justify-center items-center">
        <div className="flex flex-col">
          <p className="text-zinc-700 text-[30px]">{days}</p>
          <p className="text-zinc-700 text-[18px]">Hari</p>
        </div>
        <div>
          <p>.</p>
        </div>
        <div className="flex flex-col">
          <p className="text-zinc-700 text-[30px]">{hours}</p>
          <p className="text-zinc-700 text-[18px]">Jam</p>
        </div>
        <div>
          <p>.</p>
        </div>
        <div className="flex flex-col">
          <p className="text-zinc-700 text-[30px]">{minutes}</p>
          <p className="text-zinc-700 text-[18px]">Menit</p>
        </div>
      </div>
    )
  };
  return (
    <div className="relative">
      <div className="bg-white/70 blur-xl w-full h-[60px] absolute top-[-31px] z-[3]" />
      <div className="bg-white px-5 py-6 text-center">
          <p className={`text-[32px] text-[#D4AF37] font-bold mb-4 ${ephesis.className}`}>Welcome</p>
          <p className="text-zinc-600">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.</p>
          {rendererTime(Date.parse('12-03-2023'))}
      </div>
      <div className="bg-white/70 blur-xl w-full h-[60px] absolute bottom-[-31px] z-[3]" />
    </div>
  );
}

export default Welcome;