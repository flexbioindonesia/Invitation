"use client"
import { useState } from "react";
import Sampul from './components/Sampul'
import styles from './styles.module.css'
import Image from "next/image";
import { Ephesis, Vollkorn, Loved_by_the_King } from 'next/font/google'

const vollkorn = Vollkorn({ subsets: ['latin'] })
const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })
const loved_by_the_King = Loved_by_the_King({ weight: ['400'], subsets: ['latin'] })

function Index() {
  const [isOpen, setIsOpen] = useState(true);

  if(!isOpen){
    return <Sampul openInvite={setIsOpen} />
  }

  return (
    <>
      <div className={`${vollkorn.className} container mx-auto`}>
        <div className="w-full h-screen relative overflow-hidden">
          <div className="w-full flex-col h-screen flex items-center justify-center">
            <div className="absolute z-[2] w-[70%] h-[58%] flex items-center flex-col overflow-hidden">
              <Image
                src="/image/penutup.jpg"
                alt="Sampul"
                width={240}
                height={300}
                className={`w-[100%] h-[100%] object-cover`}
                priority
              />
              <div className="absolute py-4 z-[4] bottom-0 text-center">
                <p className="text-[12px] text-zinc-500 font-normal">Wedding Of</p>
                <p className={`text-[32px] text-[#D4AF37] font-bold ${ephesis.className}`}>Mala  &  Dhany</p>
                <p className="text-[14px] text-zinc-500 font-normal">03.03.2023</p>
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
            {/* <div className="bg-white blur-xl w-full h-[100px] absolute bottom-[-90px] z-[3]" /> */}
            {/* <div className="bg-white blur-3xl w-[350px] h-[300px] absolute top-[-200px] z-[3] left-[-48px]" /> */}
          </div>
        </div>
        <div className="relative">
          <div className="bg-white/70 blur-xl w-full h-[60px] absolute top-[-31px] z-[3]" />
          <div className={`${styles.bridgeWord} w-full py-12 px-6 relative overflow-hidden text-center`}>
            <p className={`text-[32px] text-[#D4AF37] font-bold mb-4 ${ephesis.className}`}>M <span className="text-[16px]">&</span> D</p>
            {/* <div className="bg-white blur-xl w-full h-[100px] absolute top-[-80px] z-[3]" /> */}
            <div className="bg-white blur-xl w-full h-[100px] absolute bottom-[-80px] z-[3]" />
            <p className="text-zinc-600">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.</p>
            <p className="text-[#D4AF37] mt-9 italic">{`"Q.S Ar-Rum : 21"`}</p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden flex items-center flex-col">
          <div className="w-[65%] border-[3px] h-[230px] rounded-b-full border-[#D4AF37] mt-[-10px] flex items-center justify-center">
            <p className="text-zinc-500">THE BRIDE</p>
          </div>
          <div className="flex w-full justify-center flex-col items-center mt-[-80px] mb-14">
            <Image
              src="/image/penutup.jpg"
              alt="Sampul"
              width={240}
              height={300}
              className={`w-[65%] h-[350px] object-cover rounded-t-full`}
              priority
            />
            <p className="text-[#D4AF37] mt-4 text-[14px] uppercase">dr. Komala Rachmani Nahar S.Ked</p>
            <p className="text-zinc-400 mt-2 text-[12px] w-[70%] text-center font-normal">{`Anak Pertama dari Bp. Adrian Nahar dan Ibu Marliana (alm)`}</p>
          </div>
          <div className="w-[65%] border-[3px] h-[250px] rounded-full border-[#D4AF37] mt-[-10px] flex items-center justify-center">
            <p className="text-zinc-500">THE GROOM</p>
          </div>
          <div className="flex w-full justify-center flex-col items-center mt-[-80px] mb-14">
            <Image
              src="/image/penutup.jpg"
              alt="Sampul"
              width={240}
              height={300}
              className={`w-[65%] h-[350px] object-cover rounded-t-full`}
              priority
            />
            <p className="text-[#D4AF37] mt-4 text-[14px] uppercase">Dhani Dwi Putra S.Kom, M.Kom</p>
            <p className="text-zinc-400 mt-2 text-[12px] w-[70%] text-center font-normal">{`Anak Kedua dari Bp. Ajizar dan Ibu Desmayarti`}</p>
          </div>
        </div>
        <div className="relative px-4 py-6 bg-gray-100">
          <div className="border-l-2 w-[100px] pl-4 border-zinc-500">
            <p className="text-zinc-500 text-[23px]">Wedding Event </p>
          </div>
          <div className="flex flex-col items-end py-7">
            <Image
              src="/image/penutup.jpg"
              alt="Sampul"
              width={240}
              height={300}
              className={`w-[80%] h-[350px] object-cover rounded-tl-full`}
              priority
            />
            <div className="absolute border-[#D4AF37] border-2 w-[80%] h-[350px] rounded-bl-full" />
            <p className="text-zinc-500 mt-4 text-[12px] uppercase">Akad Nikah</p>
            <p className="text-zinc-500">Jumat, 03 Maret 2023</p>
            <p className="text-zinc-400 mt-2 text-[12px] font-normal">Laink Park, Kota Solok</p>
          </div>
          <div className="flex flex-col items-start py-4">
            <Image
              src="/image/penutup.jpg"
              alt="Sampul"
              width={240}
              height={300}
              className={`w-[80%] h-[350px] object-cover rounded-br-full`}
              priority
            />
            <div className="absolute border-[#D4AF37] border-2 w-[80%] h-[350px] rounded-b-full" />
            <p className="text-zinc-500 mt-4 text-[12px] uppercase">Resepsi</p>
            <p className="text-zinc-500">Sabtu, 04 Maret 2023</p>
            <p className="text-zinc-400 mt-2 text-[12px] font-normal">Gedung Kubung 13 Kota Solok</p>
          </div>
        </div>
        <div className={`relative w-full h-[300px]`}>
          
        </div>
      </div>
    </>
  );
}

export default Index;