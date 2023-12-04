import styles from '../styles.module.css'
import { Ephesis } from 'next/font/google'

const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })

function Quote({data}: any) {
  return (
    <div className="relative">
      <div className={`${styles.bridgeWord} w-full py-12 px-6 relative overflow-hidden text-center`}>
        <p className={`text-[32px] text-[#D4AF37] font-bold mb-4 ${ephesis.className}`}>{data.quoteInitial || 'M & D'}</p>
        {/* <p className={`text-[32px] text-[#D4AF37] font-bold mb-4 ${ephesis.className}`}>M <span className="text-[16px]">&</span> D</p> */}
        {/* <div className="bg-white blur-xl w-full h-[100px] absolute top-[-80px] z-[3]" /> */}
        <div className="bg-white blur-xl w-full h-[100px] absolute bottom-[-80px] z-[3]" />
        <p className="text-zinc-600">{data.quoteText || `Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.`}</p>
        <p className="text-[#D4AF37] mt-9 italic">{data.quoteSource || `"Q.S Ar-Rum : 21"`}</p>
      </div>
      <div className="bg-white/70 blur-xl w-full h-[60px] absolute top-[-31px] z-[3]" />
    </div>
  );
}

export default Quote;