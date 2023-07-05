import React from 'react';
import ReactDOM from "react-dom";
import FlipPage from 'react-flip-page';
import Button from "./Button";

interface Page {
  title: string;
  book: string;
  content: string;
  image: string;
}

const pages: Page [] = [
  { title: "ATRÁVES DA JANELA", 
    book: "https://www.spiritfanfiction.com/historia/atraves-da-janela-21205319",
    content: `Laura Vergara é uma jornalista que tem sua vida e rotina mudadas
    do dia para a noite após encontrar sua felicidade através da
    janela.`,
    image: "https://uploads.spiritfanfiction.com/fanfics/historias/202012/atraves-da-janela-21205319-091220201236.jpg"
  },
  { title: "UM AMOR DE DIÁRIO", content: "Anos após a morte de David,Laura retorna a sua casa e acaba encontrando algo que muda sua vida.", book: "https://www.spiritfanfiction.com/historia/um-amor-de-diario-21272388", image: "https://uploads.spiritfanfiction.com/fanfics/historias/202012/um-amor-de-diario-21272388-181220200611.jpg",},
  { title: "UM AMOR CIGANO", content: "Angel jamais imaginaria que um amor proibido e intenso ligaria sua alma a de outra pessoa...", book: "https://www.spiritfanfiction.com/historia/um-amor-cigano-21610857", image: "https://uploads.spiritfanfiction.com/fanfics/historias/202102/um-amor-cigano-21610857-020220211659.jpg"}
];


export default function FlippingPages() {
 return (
  <div className="flex justify-center items-center rounded-lg">
    <FlipPage
      className="rounded-lg"
      showSwipeHint={true}
      uncutPages
      orientation="horizontal"
    >
      {pages.map(page => (
        <div className="page p-3">
          <h3 className="bg-linear bg-clip-text text-transparent text-center mb-8 text-[1.625rem] font-bold ">{page.title}</h3>
          <div className="flex gap-2 mb-8">
            <img className="inline" src={page.image} width={150}/>
            <div>
              <p className="font-bold text-title-color">Sinopse :</p>
        
              <p className="mt-3">
                {page.content}
              </p>
            </div>
            
          </div>
      
          <Button link={page.book} value="Mostrar mais" />
        </div>
      ))}
    </FlipPage>
  </div>
  
 )
}
