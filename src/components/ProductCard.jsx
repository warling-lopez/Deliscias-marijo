import React, { useState } from "react";

function ProductCard({ name, caracteristicas, precio, url }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Tarjeta */}
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer md:w-auto w-[90%] h-80 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div className="h-70 w-full bg-rose-100 flex items-center justify-center">
          <div
            className="h-70 w-full bg-cover bg-center flex items-end justify-center"
            style={{ backgroundImage: `url(${url})` }}
          >
            <span className="text-rosa-200 bg-white w-full px-10 text-center text-xl font-serif italic">
              {name}
            </span>
          </div>
        </div>
        <div className=" text-center z-10 shadow-[5_5px_10px_rgba(0,0,0)] ">
          <h3 className="text-lg font-serif text-zinc-700">{precio}</h3>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <div className="bg-white rounded-xl p-6 max-w-md md:w-full w-[95%] relative shadow-2xl">
            <div
              className="h-70 w-full rounded-xl bg-cover bg-center flex items-end justify-center"
              style={{ backgroundImage: `url(${url})` }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 w-7 h-7  rounded-full bg-white shadow-[0_0px_5px_rgba(200,200,200)] flex items-center justify-center text-rose-500 text-xl font-bold hover:text-rose-700"
              >
                x
              </button>
            </div>

            <h2 className="text-2xl font-serif text-zinc-800 mb-2">{name}</h2>
            <p className="text-zinc-600 mb-4 font-medium">{precio}</p>
            <ul className="text-sm text-zinc-600 space-y-1 text-left list-disc list-inside">
              {caracteristicas.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a
              href={"/#"}
              className="mt-4 inline-block bg-pink-400 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-500 transition-all duration-300"
            >
              Hacer Pedido
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
