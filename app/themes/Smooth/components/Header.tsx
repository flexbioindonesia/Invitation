import Image from "next/image";
import styles from '../styles.module.css'
import { Ephesis } from 'next/font/google'

const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })

function Header({data}: any) {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="w-full flex-col h-screen flex items-center justify-center">
        <div className="absolute z-[2] w-[70%] h-[58%] flex items-center flex-col overflow-hidden">
          <Image
            src={data.headerBackground || "/image/penutup.jpg"}
            alt="Sampul"
            width={240}
            height={300}
            className={`w-[100%] h-[100%] object-cover`}
            priority
          />
          <div className="absolute py-4 z-[4] bottom-0 text-center">
            <p className="text-[12px] text-zinc-500 font-normal">Wedding Of</p>
            <p className={`text-[32px] text-[#D4AF37] font-bold ${ephesis.className}`}>{data.headerBrideName || 'Mala'}  &  {data.headerGroomName || 'Dhany'}</p>
            <p className="text-[14px] text-zinc-500 font-normal">{data.headerDate || '03.03.2023'}</p>
          </div>
          <div className="bg-white blur-2xl w-[350px] h-[300px] absolute bottom-[-200px] z-[3] right-[-48px]" />
        </div>
        <Image
          src="/image/background/frame-white-new.png"
          alt="Sampul"
          width={240}
          height={300}
          className={`w-full h-full z-[3]`}
          priority
        />
        <div className="absolute z-30 bottom-10">
          <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Putra%20and%20Mala&details&dates=20230304T100000/20230304T200000&location=https://goo.gl/maps/pX9Uq1kmJB6dWg7S6" className='px-6 py-3 rounded-2xl border-2 border-[#D4AF37] text-[#D4AF37] uppercase hover:bg-[#D4AF37] hover:text-white'>Simpan Tanggal</a>
        </div>
      </div>
    </div>
  );
}

export default Header;