/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Gallery as CompGallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Ephesis, Vollkorn, Loved_by_the_King } from 'next/font/google'
import styles from '../styles.module.css'

const ephesis = Ephesis({ weight: ['400'], subsets: ['latin'] })

const images = [
  {
    src: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310249/invite/uc_yu2euo.jpg",
    original: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310249/invite/uc_yu2euo.jpg",
    width: 240,
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310270/invite/uc_rxoxxe.jpg",
    original: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310270/invite/uc_rxoxxe.jpg",
    width: 240,
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310283/invite/uc_olrb3m.jpg",
    original: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310283/invite/uc_olrb3m.jpg",
    width: 240,
    height: 320,
  },
  {
    src: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310302/invite/28897124891_98c4fdd82b_b_k9rhso.jpg",
    original: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310302/invite/28897124891_98c4fdd82b_b_k9rhso.jpg",
    width: 240,
    height: 212,
  },
  {
    src: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310249/invite/uc_yu2euo.jpg",
    original: "https://res.cloudinary.com/dbjlrbvv4/image/upload/v1701310249/invite/uc_yu2euo.jpg",
    width: 240,
    height: 320,
  },
];

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

function Gallery() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);

  return (
    <div className={`${styles.galleryBackground} pt-7 pb-10`}>
      <p className={`text-[32px] text-[#D4AF37] font-bold mb-4 text-center ${ephesis.className}`}>Gallery</p>
      <section className={styles.photos}>
        {
          images.map((itm, idx) => (
            <img key={idx} onClick={() => handleClick(idx)} src={itm.src} alt="image" />
          ))
        }
      </section>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Gallery;