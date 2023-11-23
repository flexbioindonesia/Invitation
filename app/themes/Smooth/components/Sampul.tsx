import Image from 'next/image';
import styles from '../styles.module.css'
import { Ephesis, Vollkorn } from 'next/font/google'

const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })
const vollkorn = Vollkorn({ subsets: ['latin'] })

function Sampul({openInvite}: any) {
  return (
    <>
      <div className={`${styles.sampulBackground} ${vollkorn.className} w-full h-screen`}>
        <div className='h-screen flex flex-col items-center justify-center gap-3'>
          <p className={`${ephesis.className} text-[30px] text-zinc-600`}>Wedding Of</p>
          <div className='relative w-[70%] h-[50%] flex border-[2px] px-4 py-4 border-[#FFD700]'>
            <p className='bg-gray-100 absolute top-3 left-[-16px] [writing-mode:vertical-lr] rotate-180 text-[20px] text-zinc-600 font-bold uppercase'>Maudi Ayunda</p>
            <Image
              src="/image/maudi.webp"
              alt="Sampul"
              width={240}
              height={300}
              className='w-full h-full object-cover mix-blend-multiply z-10'
              priority
            />
            <p className='bg-gray-100 absolute bottom-3 right-[-16px] [writing-mode:vertical-lr] text-[20px] text-zinc-600 font-bold uppercase'>Maudi Ayunda</p>
          </div>
          <div className='text-center py-4'>
            <p className={`text-[14px] text-zinc-500 font-normal`}>dear</p>
            <p className={`text-[18px] text-zinc-600 font-semibold`}>Guest Name</p>
          </div>
          <button onClick={() => openInvite(true)} className='text-zinc-600 px-6 py-3 rounded-2xl border-2 border-[#FFD700]'>OPEN INVITATION</button>
        </div>
      </div>
    </>
  );
}

export default Sampul;