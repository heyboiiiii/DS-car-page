import React from "react";
import { useState } from "react";

import logo from "./assets/DS_logo-removebg-preview.png";
import agencia_picture from "./assets/agencia_foto.jpeg";

import instagramIcon from "./assets/icons8-instagram-windows-11-color-32.png";
import tiktokIcon from "./assets/icons8-tiktok-ios-17-filled-32.png";
import facebookIcon from "./assets/icons8-facebook-32.png";
import youtubeIcon from "./assets/icons8-youtube-24.png";



export default function CarDealerLanding() {
  const cars = [
    {
      name: "Citroën C3 Aircross 1.6 Vti 115 Feel",
      desc: "",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_811669-MLA107467190674_032026-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-1690745761-citron-c3-aircross-16-vti-115-feel-_JM#polycard_client=search-desktop&search_layout=grid&position=1&type=item&tracking_id=9b861b03-372c-471c-9907-02d392aad73d"
    },
    {
      name: "Fiat Cronos 1.3 Gse Drive Pack Conectividad",
      desc: "",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_600292-MLA105972656611_012026-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-2807082556-fiat-cronos-13-gse-drive-pack-conectividad-_JM#polycard_client=search-desktop&search_layout=grid&position=2&type=item&tracking_id=9b861b03-372c-471c-9907-02d392aad73d"
    },
    {
      name: "Peugeot 308 1.6 Active",
      desc: "",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_843858-MLA94787102906_102025-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-2966467220-peugeot-308-16-active-_JM#polycard_client=search-desktop&search_layout=grid&position=3&type=item&tracking_id=9b861b03-372c-471c-9907-02d392aad73d"
    },
    {
      name: "Citroën C4 2.0 Sx",
      desc: "",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_944356-MLA109943690169_042026-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-3133807134-citron-c4-20-sx-_JM#polycard_client=search-desktop&search_layout=grid&position=4&type=item&tracking_id=9b861b03-372c-471c-9907-02d392aad73d"
    },
    {
      name: "Renault Duster 2.0 4x2 Privilege 138cv",
      desc: "",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_802589-MLA96759859406_112025-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-3040049480-renault-duster-20-4x2-privilege-138cv-_JM#polycard_client=search-desktop&search_layout=grid&position=5&type=item&tracking_id=9b861b03-372c-471c-9907-02d392aad73d"
    },
    {
      name: "Ford Fiesta Kinetic 1.6 Se",
      desc: "",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_933518-MLA97215337879_112025-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-3040013126-ford-fiesta-kinetic-16-se-_JM#polycard_client=search-desktop&search_layout=grid&position=6&type=item&tracking_id=9b861b03-372c-471c-9907-02d392aad73d"
    },
    {
      name: "Ford Ranger 3.2 Cd 4x2 Xlt Tdci 200cv",
      desc: "",
      img: "https://http2.mlstatic.com/D_Q_NP_729315-MLA91516435897_092025-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-2765357236-ford-ranger-32-cd-4x2-xlt-tdci-200cv-_JM#polycard_client=search-desktop&search_layout=grid&position=7&type=item&tracking_id=15acb29c-0db8-42e8-89a8-67254795bd48"
    },
    {
      name: "Ford Ecosport 1.5 Freestyle 123cv 4x2",
      desc: "",
      img: "https://http2.mlstatic.com/D_Q_NP_626352-MLA81902008489_012025-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-2827846722-ford-ecosport-15-freestyle-123cv-4x2-_JM#polycard_client=search-desktop&search_layout=grid&position=8&type=item&tracking_id=15acb29c-0db8-42e8-89a8-67254795bd48"
    },
    {
      name: "Chevrolet Spark 1.0 Lt",
      desc: "",
      img: "https://http2.mlstatic.com/D_Q_NP_667994-MLA93464162781_092025-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-1666948039-chevrolet-spark-10-lt-_JM#polycard_client=search-desktop&search_layout=grid&position=9&type=item&tracking_id=15acb29c-0db8-42e8-89a8-67254795bd48"
    },
    {
      name: "Fiat Uno 1.3 Fire Way",
      desc: "",
      img: "https://http2.mlstatic.com/D_Q_NP_858777-MLA106695753929_022026-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-1666819451-fiat-uno-13-fire-way-_JM#polycard_client=search-desktop&search_layout=grid&position=10&type=item&tracking_id=15acb29c-0db8-42e8-89a8-67254795bd48"
    },
    {
      name: "Fiat Uno 1.3 Fire Way",
      desc: "",
      img: "https://http2.mlstatic.com/D_Q_NP_838071-MLA91526567713_092025-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-2765448284-fiat-uno-13-fire-way-_JM#polycard_client=search-desktop&search_layout=grid&position=11&type=item&tracking_id=15acb29c-0db8-42e8-89a8-67254795bd48"
    }
    
  ];

  const [displayInventory,setDisplayInventory] = useState(false);

  const showInventory = () => {
    setDisplayInventory(true);
  }
  const hideInventory = () => {
    setDisplayInventory(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gray-200"><img src={logo} alt="Logo" /></div>
            
            <div>
              <span className="font-semibold text-lg">DS Vehículos</span>
              <span className="text-gray-500 text-sm block">Av. Centenario Uruguayo 83</span>
            </div>
            
          </div>
          <nav className="hidden md:flex gap-8 text-m">
            <a href="#begin" className="hover:text-black">Inicio</a>
            <a href="#inventory" className="hover:text-black">Inventario</a>
            <a href="#us" className="hover:text-black">Nosotros</a>
            <a href="#contact" className="hover:text-black">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id ="begin" className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ENCUENTRA EL AUTO <br /> DE TUS SUEÑOS
        </h1>
        <p className="text-gray-600 mb-12">
          Explora nuestro inventario de vehículos de alta calidad.
        </p>
        <a href="#inventory">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition">
          Ver Inventario
          </button>
        </a>
      </section>

      {/* Inventory */}
      <section id="inventory" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Nuestro Inventario Destacado
        </h2>

        <Inventory displayInventory={displayInventory} cars={cars} />

        <InventoryButton cars ={cars} displayInventory={displayInventory} showInventory={showInventory} hideInventory={hideInventory} />
    
        
      </section>

      {/* US */}
      <section id="us" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Nosotros
            </h2>
            <p className="text-gray-600 mb-6">
              Somos DS Vehículos...
              <br />
              <br />
              Buscamos brindar la mejor experiencia de compra de autos 0km y usados de calidad en Avellaneda y sus alrededores.
              <br />
              <br />
              📍Te esperamos en Av. Centenario Uruguayo 83(Avellaneda) para brindarte la Atención que te mereces !!! 
              <br />
              <br />
              👉🏼Consultanos por Amplia Financiación a tasa fija 
              <br />
              <br />
              ⚠️Evaluamos tu Usado para Permuta o Consignación via On Line
            </p>
            <a href="https://wa.me/5491169339029" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-xl">
                Contáctanos
              </button>
            </a>
          </div>

          <img
            src={agencia_picture}
            className="rounded-2xl shadow w-full"
          />
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="flex text-center justify-center items-center gap-4 text-gray-600 border-2 border-gray-300 rounded-xl p-6 max-w-md mx-auto">
            <p>+11 6933-9029 / Daniel
            </p>   
            <a href="https://wa.me/5491169339029" className="">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>  
            
            </a>
            
          </div>
          {/* Social media */}
          <div>
              <h3 className="text-lg font-semibold mt-8 mb-4">Seguinos en nuestras redes sociales</h3>
              <div className="flex justify-center gap-6 align-items-center">
                <div>
                  <a href="https://www.instagram.com/ds.vehiculos/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="w-22 h-22" />
                  </a>
                </div>
                <div>
                  <a href="https://www.tiktok.com/@ds.vehculos" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokIcon} alt="TikTok" className="w-22 h-22" />
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/daniel.soria.71" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-22 h-22" />
                  </a>
                </div>
                <div>
                  <a href="https://www.youtube.com/@ds.vehiculos" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>

      <a target="_blank" class="fixed right-5 bottom-5 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600" href="https://wa.me/5491169339029"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></a>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} DS Vehículos. Todos los derechos reservados.
      </footer>
    </div>
  );
}

function InventoryButton({cars,displayInventory,showInventory,hideInventory}){
  if(displayInventory){

    return(
      <div className="text-center mt-10">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition" onClick={hideInventory}>
          Ocultar Inventario
        </button>
      </div>
    );}
    else{
      if(cars.length > 6){
        return(
        <div className="text-center mt-10">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition" onClick={showInventory}>
            Ver Más
          </button>
        </div>
        );
      }else{
        return(null);
      }
      
    }
}

function Inventory({displayInventory,cars}){
  if(displayInventory){
  return(
    <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{car.desc}</p>
                <a href={car.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                    Ver Detalles
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>  
  );
  }else{
    if (cars.length > 3){
       return(
        <div className="grid md:grid-cols-3 gap-8">
          {cars.slice(0, 3).map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{car.desc}</p>
                <a href={car.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                    Ver Detalles
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div> 
      );
    }else{
      return(
         <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{car.desc}</p>
                <a href={car.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                    Ver Detalles
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>  
      );
    }
  }
}
