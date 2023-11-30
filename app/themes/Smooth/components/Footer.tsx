import Image from "next/image";
import { Ephesis } from 'next/font/google'

const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })

function Footer() {
  return (
    <div className="relative flex items-center flex-col">
      <Image
        src="/image/penutup.jpg"
        alt="Sampul"
        width={240}
        height={300}
        className={`w-[100%] h-[100%] object-cover rounded-t-2xl`}
        priority
      />
      <p className={`text-[#D4AF37] absolute bottom-3 z-[5] text-[30px] ${ephesis.className}`}>See You on Our Big Day</p>
      <div className="bg-white/90 blur-xl w-full h-[100px] absolute bottom-0 z-[3]" />
    </div>
  );
}

export default Footer;