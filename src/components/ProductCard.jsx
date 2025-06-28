import React from 'react'

function ProductCard({name}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    {/* Placeholder para la imagen del producto con fondo rosa pastel */}
    <div className="h-56 w-full bg-rose-100 flex items-center justify-center">
       <span className="text-rose-400 font-serif italic text-lg">{name}</span>
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-serif text-zinc-700">{name}</h3>
    </div>
  </div>
  )
}

export default ProductCard