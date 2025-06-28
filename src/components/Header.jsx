import React from "react";

function Header() {
  return (
    <header className="bg-[#6ad3d8] flex items-center h-17 px-6 md:px-12 shadow-md sticky top-0 z-50 rounded-b-3xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold tracking-wider text-zinc-600">
          <a href="#" className="hover:text-pink-500 transition-colors">
            INICIO
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            MENÚ
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            PASTELES
          </a>
        </div>
        <div className="relative flex justify-center items-center w-25 h-25 top-5  shadow-xl rounded-full">
            <img src="/logoPasteles.jpeg" className=" relative rounded-full w-20 " alt="Logo" />
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold tracking-wider text-zinc-600">
          <a href="#" className="hover:text-pink-500 transition-colors">
            POSTRES
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            OFERTAS
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            CONTACTO
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-zinc-600 hover:text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
