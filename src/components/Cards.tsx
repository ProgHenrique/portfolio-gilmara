import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-cards"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper";
import arvore from '../assets/images/arvore.jpeg'
import borboleta from '../assets/images/borboleta.jpeg'
import ceularanja from '../assets/images/ceularanja.jpeg'
import floresta from '../assets/images/floresta.jpeg'
import gato from '../assets/images/gato.jpeg'
import girassol2 from '../assets/images/girassol_com_borboleta.jpeg'
import girassol from '../assets/images/girassol.jpeg'
import nascerdosol from '../assets/images/nascerdosol.jpeg'
import nuvens from '../assets/images/nuvens.jpeg'
import pordosol from '../assets/images/pordosol.jpeg'
import gil from '../assets/images/rosto_encantador.jpeg'
import vinho from '../assets/images/vinho.jpeg'

export default function Cards () {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className= "w-72 h-[35rem]"
    >
      <SwiperSlide className="rounded-[18px]">
        <img src={arvore} alt="" className=" h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="rounded-[18px]">
        <img src={borboleta} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="rounded-[18px]">
        <img src={ceularanja} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="rounded-[18px]">
        <img src={floresta} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="rounded-[18px]">
        <img src={gato} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="rounded-[18px]">
        <img src={girassol2} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="rounded-[18px]">
        <img src={girassol} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="rounded-[18px]">
        <img src={nascerdosol} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="rounded-[18px]">
        <img src={nuvens} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-[18px]">
        <img src={pordosol} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-[18px]">
        <img src={gil} alt="" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center rounded-[18px]">
        <img src={vinho} alt="" className="w-full h-full object-cover" />
      </SwiperSlide> 
    </Swiper>
  )
}