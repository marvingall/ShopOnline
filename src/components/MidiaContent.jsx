"use client"
import cartImage from "@/assets/cart.png"
import Image from "next/image"
import { useState } from "react"

function MiddleContent({data = []}){
    const [cart, setCart] = useState([])

    function addToCart(item){
        setCart([...cart, item])

      }

    return <>
    <div className="flex pt-4 justify-end px-16 relative">
        <Image src={cartImage} alt="cart" width={30} height={30} />
        <p className="absolute bottom-0 p-1 bg-yellow-500
        text-white rounded-full h-6 w-6 flex justify-center items-center">{cart.length}</p>
      </div>
      <div className="flex bg-white text-black min-h-screen p-10
    max-w-screen flex-wrap
    justify-center items-center gap-4">
        {data.map((item, idx) => {
          return <div key={idx} className="flex-1 items-center flex flex-col min-w-56 max-w-56 p-5 border-2 rounded-2xl border-yellow-500 min-h-80 max-h-80 justify-between gap-2">
            <div className="max-h-40">
              <Image height={50} width={50} style={{
                width: "auto",
                height: "auto",
                objectFit: "contain"
              }} src={item.image} alt={item.title} />
            </div>
            <p className="text-center">{item.title.slice(0, 16)}...</p>
            <p>R$ {item.price}</p>
            <button className="min-w-full bg-yellow-500 rounded-md px-4 py-2 text-white">Comprar</button>
            <button onClick={() => addToCart(item)} className="min-w-full bg-white border-2 rounded-md px-4 py-2 text-yellow-500">Adicionar ao Carrinho</button>
          </div>
        })}
      </div>
      </>
}

export default MiddleContent