"use client"
import styles from '../styles.module.css'
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
function Music({buttonAudioClick, isStart, isPlay}: any) {
  return (
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
        {isStart && <p className="text-sm text-white ml-3">Memutar Lagu ...</p>}
      </button>
    </div>
  );
}

export default Music;