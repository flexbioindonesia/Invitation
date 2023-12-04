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
import { DataInv } from "@/app/partner/[subdomain]/partner-center/undangan/form";

const vollkorn = Vollkorn({ subsets: ['latin'] })
// import 'animate.css';
import "animate.css/animate.min.css";
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

function Index({type, data}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [audio, setAudio] = useState<any>()
  const [isPlay, setIsPlay] = useState<boolean>(true)
  const [isStart, setIsStart] = useState<boolean>(true)
  const [isDatang, setIsDatang] = useState<boolean>();

  // const data = form.watch()

  useEffect(() => {
    setAudio(new Audio( data.generalMusic || `https://res.cloudinary.com/dbjlrbvv4/video/upload/v1701336405/invite/pw_dan_zziim5.mp3`));
    setIsPlay(true);
  }, [data.generalMusic])

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
    if(type !== 'preview'){
      start();
      setTimeout(() => {
        setIsStart(false);
      }, 5000);
    }
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
    return <Sampul data={data} openInvite={setIsOpen} isOpen={isOpen} playAudio={() => buttonOpen()} />
  }

  return (
    <div className="flex h-screen relative">
      {
        type !== 'preview' && (
          <BigCover />
        )
      }
      <div className={`${vollkorn.className} relative w-full ${type !== 'preview' && 'lg:w-[30%]'} animate__animated animate__fadeIn h-screen overflow-y-auto`}>
        {
          type !== 'preview' && (
            <Music buttonAudioClick={buttonAudioClick} isStart={isStart} isPlay={isPlay} />
          )
        }
        <Header data={data} />
        {
          data.welcomeIsActive && (
            <Welcome data={data} />
          )
        }
        <BrideGroom data={data} />
        {
          data.quoteIsActive && (
            <Quote data={data} />
          )
        }
        <Events data={data} />
        {
          data.sotryIsActive && (
            <Story data={data} />
          )
        }
        <Gallery data={data} />
        {
          data.giftIsActive && (
            <Gifts data={data} />
          )
        }
        {
          data.commentsIsActive && (
            <Comments data={dataComments} color={'#D4AF37'} sendMessage={handleSendMessage} />
          )
        }
        {
          data.confirmationIsActive && (
            <Confirmation clicked={clickConfirmation} confirm={isDatang} />
          )
        }
        <Footer data={data} />
      </div>
    </div>
  );
}

export default Index;
