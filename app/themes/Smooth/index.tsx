"use client"
import { useEffect, useState } from "react";
import Sampul from './components/Sampul'
import styles from './styles.module.css'
import Image from "next/image";
import { Ephesis, Vollkorn, Loved_by_the_King } from 'next/font/google'
import 'react-vertical-timeline-component/style.min.css';
import { calcTimeDelta } from "react-countdown";

import Gallery from "./components/Gallery";
import { FaPeopleRobbery, FaPeoplePulling, FaDollarSign, FaGift, FaCopy, FaMapLocationDot, FaCirclePlay, FaCirclePause } from "react-icons/fa6";


const vollkorn = Vollkorn({ subsets: ['latin'] })
const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })
const loved_by_the_King = Loved_by_the_King({ weight: ['400'], subsets: ['latin'] })
import 'animate.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import { AiFillCalendar } from "react-icons/ai";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [audio, setAudio] = useState<any>()
  const [isPlay, setIsPlay] = useState<boolean>(true)
  const [isStart, setIsStart] = useState<boolean>(true)
  useEffect(() => {
    // let audio = new Audio("https://docs.google.com/uc?export=download&id=1E2tMddzfL_UqgFirQ0HGZddv60RQDcSE");
    setAudio(new Audio(`https://docs.google.com/uc?export=download&id=1E2tMddzfL_UqgFirQ0HGZddv60RQDcSE`));
    setIsPlay(true);
  }, [])

  const start = () => {
    audio.play()
  }
  const pause = () => {
    audio.pause()
  }

  const buttonAudioClick = () => {
    if(isPlay){
      pause();
      setIsPlay(false);
    }else{
      start();
      setIsPlay(true);
    }
  }
  
  const buttonOpen = () => {
    start();
    setTimeout(() => {
      setIsStart(false);
    }, 5000);
  }

  if(!isOpen){
    return <Sampul openInvite={setIsOpen} isOpen={isOpen} playAudio={() => buttonOpen()} />
  }
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
    <div className="flex h-screen">
      <div className={`h-screen lg:w-[70%] lg:block hidden relative`}>
        <Image
          src="/image/penutup.jpg"
          alt="Sampul"
          width={240}
          height={300}
          className={`w-[100%] h-[100%] object-cover`}
          priority
        />
        <div className="absolute py-4 z-[4] bottom-0 text-center w-full">
          <p className={`text-[52px] text-[#D4AF37] font-bold ${ephesis.className}`}>Mala  &  Dhany</p>
        </div>
        <div className="bg-white blur-2xl w-full h-[100px] absolute bottom-[0px] z-[3]" />
      </div>
      <div className={`${vollkorn.className} w-full lg:w-[30%] animate__animated animate__fadeIn h-screen overflow-y-auto`}>
        <div className={`${styles.transitionAbs} player-mp3 fixed z-40 bottom-4 right-4 ${isStart && 'left-4'}`}>
          <button onClick={buttonAudioClick} className={`bg-black/20 rounded-full backdrop-blur-lg flex w-full items-center justify-center px-1 py-1`}>
            <div className="flex items-center justify-center">
              <div className={`${styles.ldsDualRng} ${!isPlay && 'opacity-0'}`} />
              {
                isPlay ? (
                  <FaCirclePause size={20} className={'absolute text-white'} />
                ) : (
                  <FaCirclePlay size={20} className={'absolute text-white'} />
                )
              }
            </div>
            {isStart && <p className="text-sm text-white ml-3">Memutar Lagu Pee Wee Gaskin Dan</p>}
          </button>
        </div>
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
            <div className="absolute z-30 bottom-10">
              <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Putra%20and%20Mala&details&dates=20230304T100000/20230304T200000&location=https://goo.gl/maps/pX9Uq1kmJB6dWg7S6" className='px-6 py-3 rounded-2xl border-2 border-[#D4AF37] text-[#D4AF37] uppercase hover:bg-[#D4AF37] hover:text-white'>Simpan Tanggal</a>
            </div>
            {/* <div className="bg-white blur-xl w-full h-[100px] absolute bottom-[-90px] z-[3]" /> */}
            {/* <div className="bg-white blur-3xl w-[350px] h-[300px] absolute top-[-200px] z-[3] left-[-48px]" /> */}
          </div>
        </div>
        <div className="relative">
          <div className="bg-white/70 blur-xl w-full h-[60px] absolute top-[-31px] z-[3]" />
          <div className="bg-white px-5 py-6 text-center">
              <p className={`text-[32px] text-[#D4AF37] font-bold mb-4 ${ephesis.className}`}>Welcome</p>
              <p className="text-zinc-600">Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.</p>
              {rendererTime(Date.parse('12-03-2023'))}
          </div>
          <div className="bg-white/70 blur-xl w-full h-[60px] absolute bottom-[-31px] z-[3]" />
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
        <div className="relative">
          <div className={`${styles.bridgeWord} w-full py-12 px-6 relative overflow-hidden text-center`}>
            <p className={`text-[32px] text-[#D4AF37] font-bold mb-4 ${ephesis.className}`}>M <span className="text-[16px]">&</span> D</p>
            {/* <div className="bg-white blur-xl w-full h-[100px] absolute top-[-80px] z-[3]" /> */}
            <div className="bg-white blur-xl w-full h-[100px] absolute bottom-[-80px] z-[3]" />
            <p className="text-zinc-600">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.</p>
            <p className="text-[#D4AF37] mt-9 italic">{`"Q.S Ar-Rum : 21"`}</p>
          </div>
          <div className="bg-white/70 blur-xl w-full h-[60px] absolute top-[-31px] z-[3]" />
        </div>
        <div className="relative px-4 py-6 bg-gray-100">
          <div className="border-l-2 w-[100px] pl-4 border-zinc-500">
            <p className="text-zinc-600 text-[23px]">Wedding Event </p>
          </div>
          <div className="flex flex-col items-end py-7 relative">
            <Image
              src="/image/penutup.jpg"
              alt="Sampul"
              width={240}
              height={300}
              className={`w-[80%] h-[350px] object-cover rounded-tl-full z-10`}
              priority
            />
            <div className="absolute border-[#D4AF37] border-2 w-[80%] h-[350px] rounded-bl-full" />
            <p className="text-zinc-500 mt-4 text-[12px] uppercase">Akad Nikah</p>
            <p className="text-zinc-600">Jumat, 03 Maret 2023</p>
            <p className="text-zinc-400 mt-2 text-[12px] font-normal">Laink Park, Kota Solok</p>
            <a href="https://goo.gl/maps/pUbFTJCoCLPNnRZ66" target="_blank" className="bg-[#D4AF37] rounded-md flex gap-1 text-white text-xs items-center justify-center px-2 py-1 mt-2"><FaMapLocationDot />BUKA DI MAP</a>
            <div className="bg-yellow-700/60 w-40 h-40 absolute rounded-full left-0 bottom-14" />
          </div>
          <div className="flex flex-col items-start py-4">
            <Image
              src="/image/penutup.jpg"
              alt="Sampul"
              width={240}
              height={300}
              className={`w-[80%] h-[350px] object-cover rounded-br-full z-10`}
              priority
            />
            <div className="absolute border-[#D4AF37] border-2 w-[80%] h-[350px] rounded-b-full" />
            <p className="text-zinc-500 mt-4 text-[12px] uppercase">Resepsi</p>
            <p className="text-zinc-600">Sabtu, 04 Maret 2023</p>
            <p className="text-zinc-400 mt-2 text-[12px] font-normal">Gedung Kubung 13 Kota Solok</p>
            <a href="https://goo.gl/maps/pX9Uq1kmJB6dWg7S6" target="_blank" className="bg-[#D4AF37] rounded-md flex gap-1 text-white text-xs items-center justify-center px-2 py-1 mt-2"><FaMapLocationDot />BUKA DI MAP</a>
            <div className="bg-yellow-700/60 w-40 h-40 absolute rounded-full right-5 bottom-16" />
          </div>
        </div>
        <div className="relative px-4 py-6">
          <div className="shadow-sm rounded-xl overflow-hidden">
            <video className="w-[100%] h-[200px] object-cover shadow-2xl rounded-xl" autoPlay={false} muted={true} controls={true} loop={true} src="/video_contoh.mp4"></video>
            {/* <video className="w-[100%] h-[200px] object-cover shadow-2xl rounded-xl" autoPlay={false} muted={true} controls={true} loop={true} src="https://drive.google.com/uc?export=download&id=11VTRTTkD1axra5zQ7T2pBvKaDsOz8HF0"></video> */}
          </div>
          <div className="text-center">
            <p className="text-[#D4AF37] text-xl mt-9 italic">Our Story</p>
            <p className="text-zinc-400 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas fugiat quam iste suscipit at doloremque necessitatibus. Ipsum totam, cum velit sunt molestias ad sapiente dolor, ratione vel corporis eius.</p>
            <div className="py-6">
              <VerticalTimeline lineColor="#D4AF37" animate={true} layout="1-column">
                <VerticalTimelineElement
                  visible={true}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(161 98 7 / 0.6)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(161 98 7 / 0.6)' }}
                  date="2021"
                  iconStyle={{ background: 'rgb(161 98 7)', color: '#fff' }}
                  icon={<FaPeopleRobbery />}
                >
                  <h3 className="vertical-timeline-element-title">Bertemu</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio ipsum, sit mollitia deserunt dolore ab quas vitae. Exercitationem eaque tempora nihil quaerat ipsa impedit harum non nam officiis modi?
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible={true}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(161 98 7 / 0.6)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(161 98 7 / 0.6)' }}
                  date="2023"
                  iconStyle={{ background: 'rgb(161 98 7)', color: '#fff' }}
                  icon={<FaPeoplePulling />}
                >
                  <h3 className="vertical-timeline-element-title">Menikah</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio ipsum, sit mollitia deserunt dolore ab quas vitae. Exercitationem eaque tempora nihil quaerat ipsa impedit harum non nam officiis modi?
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
        <div>
          <Gallery />
        </div>
        <div className={`relative px-4 py-6`}>
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
      </div>
    </div>
  );
}

export default Index;
