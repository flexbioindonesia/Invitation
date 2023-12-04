"use client"
import { Ephesis } from 'next/font/google'
import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';

const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })
function Welcome({data}: any) {
  return (
    <div className="relative">
      <div className="bg-white/70 blur-xl w-full h-[60px] absolute top-[-31px] z-[3]" />
      <div className="bg-white px-5 py-6 text-center">
          <p className={`text-[32px] text-[#D4AF37] font-bold mb-4 ${ephesis.className}`}>Welcome</p>
          <p className="text-zinc-600">{data.welcomeText || 'Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.'}</p>
          {/* <Timer deadline="December, 31, 2023" /> */}
          <Timer deadline={new Date(data.welcomeDate).toString()} />
      </div>
      <div className="bg-white/70 blur-xl w-full h-[60px] absolute bottom-[-31px] z-[3]" />
    </div>
  );
}

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="timer flex justify-center items-center gap-3 py-6">
      {Object.entries({
        Hari: time / DAY,
        Jam: (time / HOUR) % 24,
        Menit: (time / MINUTE) % 60,
        Detik: (time / SECOND) % 60
      }).map(([label, value]) => (
        <div key={label} className="col-4">
          <div className="box flex flex-col">
            <p className='text-zinc-700 text-[30px]'>{`${Math.floor(value)}`.padStart(2, "0")}</p>
            <span className="text-zinc-700 text-[18px]">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Welcome;
