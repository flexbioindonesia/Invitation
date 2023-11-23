"use client"
import { useState } from "react";
import Sampul from './components/Sampul'
import styles from './styles.module.css'
import Image from "next/image";

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  if(!isOpen){
    return <Sampul openInvite={setIsOpen} />
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="w-full h-screen">
          <div className={styles.vContainer}>
            {/* <img className={`${styles.vOne} ${styles.imgHead}`} src={`${dataUser.meta?.background_image}`} alt="Balloons" /> */}
            <Image
              src="/image/maudi.webp"
              alt="Sampul"
              width={240}
              height={300}
              className={`${styles.vOne} ${styles.imgHead}`}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;