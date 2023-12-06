import Image from 'next/image';
import styles from '../styles.module.css'
import { Ephesis, Vollkorn, Cinzel } from 'next/font/google'
import 'animate.css';

const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })
const vollkorn = Vollkorn({ subsets: ['latin'] })
const cinzel = Cinzel({ subsets: ['latin'], weight: "variable" })

function Sampul({openInvite, isOpen, playAudio, data}: any) {
  return (
    <>
      <div className={`${vollkorn.className} w-full h-screen relative`} style={{background: `url(${data.coverBackground}) no-repeat center`, backgroundSize:'cover'}}>
        <div className="bg-gradient-to-t from-black/75 to-black/20 absolute top-0 left-0 right-0 bottom-0" />
        <div className='h-screen flex flex-col items-center justify-between gap-3 z-10 relative py-16'>
          <div className='flex flex-col justify-center items-center'>
            <p className={`text-[16px] text-white`}>Wedding Of</p>
            <p className={`${cinzel.className} text-[30px] text-white font-light`}>{data.coverBrideName} <span>&</span> {data.coverGroomName}</p>
          </div>
          <div className='text-center py-4'>
            <p className={`text-[12px] text-white/75 font-normal`}>Kepada Yth.</p>
            <p className={`text-[18px] text-white font-semibold`}>Guest Name</p>
            <button onClick={() => {openInvite(true); playAudio();}} className='text-white px-6 py-3 mt-3 rounded-2xl border-[1px] border-white'>OPEN INVITATION</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sampul;