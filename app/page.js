"use client";
import Image from 'next/image';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

export default function Home() {

  useEffect( () => {

    const smoothScroll = (e) =>{
        if(e.target.tagName === 'A' && e.target.hash != ''){
            e.preventDefault();
            const targetID = e.target.hash.substring(1);
            const targetElement = document.getElementById(targetID);
            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                    behavior: 'smooth'
                });
            }
        }
    };
    document.querySelector('nav').addEventListener('click', smoothScroll);
    
    return () => {
        document.querySelector('nav').removeEventListener('click', smoothScroll);
    };
    
  }, []); 

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if(contact){
      contact.scrollIntoView({behavior: 'smooth'});
    }

  };

  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <header>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap" rel="stylesheet"></link>
      <link href="./normalize.css" rel="stylesheet"></link>
      <link href="./patterns.css" rel="stylesheet"></link>
      <Navbar />
    </header> 

    <main>
      <section id="home" className='grid justify-items-center items-center  text-3xl grid-cols-2'>
        <div className='grid justify-items-center'>
          <p>Hola! Soy <a id="nameDev">Axel Espinosa</a></p> 
          <p className='text-2xl'>Desarrollador de Software</p>
          <button id="contactButton" onClick={scrollToContact}><a>Contáctame</a></button>
        </div>
        <div>
          <Image 
            src="/user.png"
            width={400}
            height={400}
            alt=""
          />
        </div>
      </section>
      <section id="about">
        <h1 id="title">Sobre de mí</h1>
        <p>Estudiante de ingeniería en computación con una pasión desbordante por la tecnología y una curiosidad insaciable por explorar este vasto mundo digital. Mi camino en el rubro me ha llevado por un apasionante viaje a través de las complejidades de la computación.</p>
        <h1>Habilidades</h1>
      </section>
      <section id="projects">
        <h1 id="title">Proyectos</h1>
      </section>
      <section id="contact">
        <h1 id="title">Contacto</h1>
        <div>

        </div>
      </section>
    </main>
  <style jsx>{`
    
    *{
      font-family: 'Satoshi', sans-serif;
    }
    section{
      padding: 60px 20px;
      min-height: 100vh;
    }
    #title{
      font-size: 1.75rem;
    } 
    #nameDev{
      font-size: 2rem;
      color: #7aa2f7;
    }
    #contactButton{
      margin-top: 3rem;
      display: flex;
      align-items: center;
      border: 2px solid;
      color: #a9b1d6;
      border-radius: 1rem;
    }
    button a{
      font-size: 1.20rem;
      margin: 3px;
    }
    #contactButton:hover{
      color: white;
    }
  `}
  </style>
  </div>
);
}
