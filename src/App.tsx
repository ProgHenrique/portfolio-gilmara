import { useState } from 'react'
import { ArrowUp, Camera, List, Newspaper, PencilLine, User, X } from '@phosphor-icons/react'
import Button from "./components/Button"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination} from "swiper";
import Cards from "./components/Cards";
import patinho from './assets/images/patinho.gif'
import { TypeAnimation } from "react-type-animation";
import FlippingPages from "./components/Page-flip";


function App() {
  // Open and close menu
  const [show, setShow] = useState<boolean>(false)

  // menu item, hides the menu
  const links = document.querySelectorAll('nav ul li a');
  for (const link of links) {
    link.addEventListener('click', function () {
      setShow(false);
    })
  }

  // When scroll
  const [scroll, setScroll] = useState<boolean>(false)

  function whenScroll () {
    const header = document.getElementById('header') as HTMLHeadElement;
    const navHeight = header.offsetHeight
    if (window.scrollY >= navHeight) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  // Back to top
  const [backToTop, setBackToTop] = useState<boolean>(false)

  function toBackTop () {
    if (window.scrollY >= 560) {
      setBackToTop(true)
    } else {
      setBackToTop(false)
    }
  }

  // Scroll functions
  window.addEventListener('scroll', ()=> {
    whenScroll()
    toBackTop()
  })
  

  return (
    <>
    {/* Icons gradient */}
      <svg width={0} height={0}>
        <linearGradient id='menu' x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#814ACF" offset="0%" />
          <stop stopColor="#6917B5" offset="100%" />
        </linearGradient>
      </svg>
      <div className="max-w-3xl w-full mx-auto relative">
        <header id="header" className={`border-b border-border-color max-w-3xl w-full bg-body-color flex mb-8 fixed top-0 left-1/2 z-50 -translate-x-1/2 ${scroll ? 'shadow-header': ''}`}>
          <nav className="mx-6 h-18 flex items-center justify-between w-full">
            <img src="raposa.svg" width="42" />

            <a className="absolute left-2/4 -translate-x-2/4 text-title-color font-bold text-logo" href=""> do<span className="bg-linear bg-clip-text text-transparent">Carmo</span>.</a>

            {/* Menu items */}
            <div className={`${show ? 'opacity-100 visible bg-body-color h-screen w-full fixed top-0 left-0 grid place-content-center':'opacity-0 invisible -top-80'}`}>
              <ul className={show ? 'grid gap-16': 'hidden'}>
                <li className="text-center"><a href="#home" className="title text-title-color text-title font-bold relative hover:bg-linear-li hover:bg-clip-text hover:text-transparent after:content-[''] after:w-0% after:h-0.5 after:bg-linear-li after:absolute after:left-0 after:-bottom-6 after:transition-width after:delay-200 hover:after:w-full">Início</a></li>
                <li className="text-center"><a href="#about" className="title text-title-color text-title font-bold relative hover:bg-linear-li hover:bg-clip-text hover:text-transparent after:content-[''] after:w-0% after:h-0.5 after:bg-linear-li after:absolute after:left-0 after:-bottom-6 after:transition-width after:delay-200 hover:after:w-full">Sobre</a></li>
                <li className="text-center"><a href="#journalism" className="title text-title-color text-title font-bold relative hover:bg-linear-li hover:bg-clip-text hover:text-transparent after:content-[''] after:w-0% after:h-0.5 after:bg-linear-li after:absolute after:left-0 after:-bottom-6 after:transition-width after:delay-200 hover:after:w-full">Jornalismo</a></li>
                <li className="text-center"><a href="#photograph" className="title text-title-color text-title font-bold relative hover:bg-linear-li hover:bg-clip-text hover:text-transparent after:content-[''] after:w-0% after:h-0.5 after:bg-linear-li after:absolute after:left-0 after:-bottom-6 after:transition-width after:delay-200 hover:after:w-full">Fotografia</a></li>
                <li className="text-center"><a href="#writer" className="title text-title-color text-title font-bold relative hover:bg-linear-li hover:bg-clip-text hover:text-transparent after:content-[''] after:w-0% after:h-0.5 after:bg-linear-li after:absolute after:left-0 after:-bottom-6 after:transition-width after:delay-200 hover:after:w-full">Escritora</a></li>
              </ul>
            </div>
            {/* MENU */}
            <a onClick={()=> setShow(true)} className="cursor-pointer"><List style={{fill: "url(#menu)"}} size={24}/></a>
            <a onClick={()=> setShow(false)} className={`select-none absolute right-6 cursor-pointer transition-all ${show ? 'visible opacity-100 top-6 delay-200': 'invisible opacity-0 -top-6'}`}><X style={{fill: "url(#menu)"}} size={24}/></a>
          </nav>
        </header>
        <main className="mt-[6.5rem]">
          <section id="home" className="py-20">
            <div className="mx-6">
              <div className="title w-full bg-gradient-to-tr from-base-color to-base-color-new py-[2px]">
                <div className="h-full w-full bg-body-color font-bold text-center">
                  <h1 className="text-[2rem] text-title-color">Gilmara do Carmo</h1>
                  <TypeAnimation
                    id="type_writer"
                    className="text-[1.75rem] text-transparent bg-clip-text bg-linear after:text-transparent after:bg-clip-text after:bg-linear after:content-['|'] after:animate-cursor"
                    sequence={['Jornalista', 700, 'Fotógrafa', 700, 'Escritora', 700,]}
                    speed={{type: 'keyStrokeDelayInMs', value: 100}}
                    repeat={Infinity}
                    cursor={false}
                  />
                  
                </div> 
              </div>  
              <div className="instagram">
                <Button 
                  link="https://www.instagram.com/docarmogilmara/" 
                  logo={true}
                  value="Instagram"
                />
              </div>
            </div>
          </section>

          <div className="h-px bg-divider"></div>

          <section id="about" className="py-20">
            <div className="mx-6">
              <div className="text">
                <h2 className="flex gap-2 items-center text-title-color text-[1.5rem] font-bold"><User style={{fill: "url(#menu)"}} size={24} weight="bold"/>Sobre mim</h2>
                <p className="mt-6">
                  A vida me fez curiosa e eu cursei <span className="bg-linear bg-clip-text text-transparent">Jornalismo</span>.
                </p>

                <p className="mt-6">
                  Amante da <span className="bg-linear bg-clip-text text-transparent">Fotografia</span>. As belezas do mundo sempre me chamaram
                  atenção, então resolvi registrar cada momento, por trás de uma
                  lente.
                </p>

                <p className="mt-6">
                  Minha paixão por leitura me tornou uma <span className="bg-linear bg-clip-text text-transparent">Escritora</span>. Com três livros
                  publicados, nome do livro aqui, aqui e aqui, posso dizer que meu
                  eu garotinha sente muito orgulho aonde nosso hobby chegou.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-divider-2"></div>

          <section id="journalism" className="py-20">
            <div className="mx-6 flex flex-col gap-6">
              <div className="text">
                <h2 className="flex gap-2 items-center text-title-color text-[1.5rem] font-bold" > <Newspaper style={{fill: "url(#menu)"}} size={24} weight="bold"/> Jornalismo</h2>
              </div>
              <Swiper
                className="swiper"
                pagination={{
                  dynamicBullets: true,
                  
                }}
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView="auto"
                
                direction="horizontal"
                style={{
                  "--swiper-pagination-color": "#6917B5",
                  "--swiper-pagination-bottom": "0px",
                  width: "100%", padding: "1rem 0.75rem", height: "100%",}}
              >
                <SwiperSlide className="text-center shadow-header rounded-lg flex flex-col gap-2 p-2 w-72 h-auto">  
                  <strong className="text-center text-title-color">Projeto Paiá</strong>
                  <p className="">Laboratório de pesquisa e inovação jornalistica em contexto de desertos de notícias</p> 
                </SwiperSlide>
                <SwiperSlide className="text-center shadow-header rounded-lg flex flex-col gap-2 p-2 w-72 h-auto">
                  <strong className="text-center text-title-color">Rondon Notícias</strong>
                  <p className="">Voluntária no jornal da universidade que leva informação  para a cidade.</p>
                </SwiperSlide>
              </Swiper>

            </div>
          </section>

          <div className="h-px bg-divider"></div>

          <section id="photograph" className="py-20">
            <div className="flex flex-col gap-8 overflow-hidden">
              <div className="text">
                <h2 className="mx-6 flex gap-2 items-center text-title-color text-[1.5rem] font-bold" > <Camera style={{fill: "url(#menu)"}} size={24} weight="bold"/> Fotografia</h2>
              </div>
              <div className="flex items-center justify-center cards"></div>
              {/**Galery Cards */}
              <Cards />
            </div>
          </section>

          <div className="h-px bg-divider-2"></div>

          <section id="writer" className="py-20">
            <div className="mx-6 flex flex-col gap-6">
              <div className="text">
              <h2 className="flex gap-2 items-center text-title-color text-[1.5rem] font-bold" > <PencilLine style={{fill: "url(#menu)"}} size={24} weight="bold"/> Escritora</h2>
              </div> 

              <div className="books">
                <FlippingPages />
              </div>
              
            </div>
          </section>
        </main>

        <footer className="py-20 bg-linear">
          <div className="mx-6 flex justify-between">
            <div className="brand">
              <a className="inline-block mb-6 text-text-color-light font-bold text-logo" href="#home"> do<span className="bg-logo-footer bg-clip-text text-transparent">Carmo</span>.</a>

              <p className="text-text-color-light mb-3">©2023 doCarmo.</p>
              <p className="text-text-color-light mb-3">Todos os direitos reservados.</p>
            </div>
            <div>
              <img className="w-24" src={patinho} />
            </div>
          </div>
        </footer>

        {/* Back to top */}
        <a href="#top" className={`bg-base-color bg-linear-li text-text-color-light fixed right-4 bottom-4 p-2 rounded-full text-[1.5rem] leading-[0] duration-300 ${backToTop ? 'visible opacity-100 translate-y-0':'invisible opacity-0 duration-300 translate-y-full'} `}><ArrowUp size={24} weight="bold"/></a>
      </div>
      
    </>
    
  )
}

export default App

