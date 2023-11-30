"use client"

import { useEffect, useState } from "react";
import { Vollkorn } from 'next/font/google'
import 'react-vertical-timeline-component/style.min.css';

import Sampul from './components/Sampul'
import Comments from './components/Comments';
import Welcome from './components/Welcome';
import Gallery from "./components/Gallery";
import Header from './components/Header';
import BrideGroom from "./components/BrideGroom";
import Quote from "./components/Quote";
import Events from "./components/Events";
import Story from "./components/Story";
import Gifts from "./components/Gifts";
import BigCover from "./components/BigCover";
import Music from "./components/Music";

const vollkorn = Vollkorn({ subsets: ['latin'] })
import 'animate.css';
import Confirmation from "./components/Confirmation";
import Footer from "./components/Footer";

const dataComments = [
  {
    name: 'dhani',
    comment: 'Testing Comment',
    date: '2023-03-03 18:00'
  },
  {
    name: 'dhani2',
    comment: 'Testing Comment2',
    date: '2023-03-03 18:00'
  },
  {
    name: 'dhani3',
    comment: 'Testing Comment3',
    date: '2023-03-03 18:00'
  },
  {
    name: 'dhani3',
    comment: 'Testing Comment3',
    date: '2023-03-03 18:00'
  },
  {
    name: 'dhani3',
    comment: 'Testing Comment3',
    date: '2023-03-03 18:00'
  },
  {
    name: 'dhani3',
    comment: 'Testing Comment3',
    date: '2023-03-03 18:00'
  },
  {
    name: 'dhani3',
    comment: 'Testing Comment3',
    date: '2023-03-03 18:00'
  },
]

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [audio, setAudio] = useState<any>()
  const [isPlay, setIsPlay] = useState<boolean>(true)
  const [isStart, setIsStart] = useState<boolean>(true)
  const [isDatang, setIsDatang] = useState<boolean>();

  useEffect(() => {
    setAudio(new Audio(`https://res.cloudinary.com/dbjlrbvv4/video/upload/v1701336405/invite/pw_dan_zziim5.mp3`));
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

  const handleSendMessage = (e: any) => {
    e.preventDefault()
    let message = e.target.message.value;
    console.log(message)
  }

  const clickConfirmation = (e: any) => {
    // console.log(e.target.checked)
    setIsDatang(e.target.checked)
  }

  if(!isOpen){
    return <Sampul openInvite={setIsOpen} isOpen={isOpen} playAudio={() => buttonOpen()} />
  }

  return (
    <div className="flex h-screen">
      <BigCover />
      <div className={`${vollkorn.className} w-full lg:w-[30%] animate__animated animate__fadeIn h-screen overflow-y-auto`}>
        <Music buttonAudioClick={buttonAudioClick} isStart={isStart} isPlay={isPlay} />
        <Header />
        <Welcome />
        <BrideGroom />
        <Quote />
        <Events />
        <Story />
        <Gallery />
        <Gifts />
        <Comments data={dataComments} color={'#D4AF37'} sendMessage={handleSendMessage} />
        <Confirmation clicked={clickConfirmation} confirm={isDatang} />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
