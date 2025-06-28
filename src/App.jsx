import React from 'react';
import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
// --- Iconos SVG para una mejor visualización sin dependencias externas ---
const CakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2" />
    <path d="M12 2v2" />
    <path d="M12 7v2" />
    <path d="M12 12v2" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .8-.4 1.5-.9 2.2-1.1 1.4-2.6 2.3-4.2 2.7-1 .2-2.1.3-3.2.3h-1c-3.1 0-5.7-1.3-7.4-3.4-2.4-2.9-3.1-6.6-2.4-9.6C3.9 6.3 5.7 5 7.7 4.4c1.1-.3 2.3-.3 3.4 0 .8.2 1.5.6 2.1 1-.2-.9-.1-1.8.2-2.6.4-1 .9-1.8 1.6-2.5 1-.9 2.2-1.5 3.5-1.7.9-.1 1.8 0 2.6.3s1.5.8 2 1.4c.1-2 .9-3.6 2.4-4.5" /></svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);




// --- Componente de Cabecera ---


// --- Componente Principal ---
export default function App() {
  const customCakes = ["Pastel de Rosas y Vainilla", "Tarta de Frutos Rojos", "Pastel de Macarons", "Pastel de Bodas Clásico"];
  const macarons = ["Macarons de Frambuesa", "Cupcakes de Celebración"];

  return (
    <div className="bg-cream-50 font-sans text-zinc-700 min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Lato:wght@300;400;700&display=swap');
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Lato', sans-serif; }
          body { background-color: #FDF8F5; } /* Color crema pastel */
        `}
      </style>
      
      <Header />

      <main>
        {/* --- Sección Héroe --- */}
        <section className="text-center py-20 px-6 bg-rose-50/50">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-7xl font-serif text-zinc-800 leading-tight">Delicia en cada bocado</h2>
            <p className="mt-4 max-w-2xl mx-auto text-zinc-600">
              Elaboramos artesanalmente los pasteles y postres más exquisitos con ingredientes de la más alta calidad.
            </p>
            <div className="mt-8 flex justify-center items-center space-x-4">
              <button className="bg-pink-400 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-500 transition-all duration-300 shadow-lg transform hover:scale-105">
                ORDENAR AHORA
              </button>
              <button className="border-2 border-pink-400 text-pink-400 font-bold py-3 px-8 rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300">
                Ver Menú
              </button>
            </div>
          </div>
        </section>
        
        {/* --- Sección de Pasteles Personalizados --- */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif text-zinc-800">Pasteles Personalizados</h3>
              <p className="mt-2 text-zinc-500 max-w-xl mx-auto">Desde celebraciones íntimas hasta grandes eventos, creamos el pastel perfecto para tu ocasión especial.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {customCakes.map(cake => <ProductCard key={cake} name={cake} />)}
            </div>
          </div>
        </section>

        {/* --- Sección de Colección de Temporada --- */}
        <section className="py-24 px-6 bg-rose-50/50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {macarons.map(macaron => <ProductCard key={macaron} name={macaron} />)}
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="bg-white p-10 rounded-lg shadow-xl text-center border-t-4 border-pink-300 max-w-md">
                            <h4 className="text-3xl font-serif text-pink-500">Colección de Temporada</h4>
                            <p className="text-6xl font-bold text-zinc-800 my-4">20% OFF</p>
                            <p className="text-zinc-500 mb-6">Disfruta de un dulce descuento en nuestros postres y macarons seleccionados.</p>
                             <button className="bg-zinc-800 text-white font-bold py-3 px-10 rounded-full hover:bg-zinc-900 transition-all duration-300 shadow-lg">
                                Ordenar Hoy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      {/* --- Pie de Página --- */}
      <footer className="bg-white mt-12 py-10 px-6">
        <div className="container mx-auto text-center text-zinc-500">
            <div className="flex justify-center items-center mb-6">
               <CakeIcon />
            </div>
            <p className="font-serif text-xl text-pink-400 mb-4">Pâtisserie Chic & Stylish</p>
            <p className="text-sm mb-6">Creando momentos dulces desde 2024.</p>
            <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-pink-500 transition-colors"><InstagramIcon /></a>
                <a href="#" className="hover:text-pink-500 transition-colors"><TwitterIcon /></a>
                <a href="#" className="hover:text-pink-500 transition-colors"><FacebookIcon /></a>
            </div>
        </div>
      </footer>
    </div>
  );
}
