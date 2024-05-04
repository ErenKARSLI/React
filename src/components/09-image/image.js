import React from 'react'
import japan from "/MY-Repos/React/Instruction/react-js/public/assets/img/japan.png"

const Image = () => {
  return (
    <div>
        {/* Extenrnel url veya CDN */}
        <img scr="https://fotolifeakademi.com/uploads/2020/04/manzara-fotografciligi-1-724x394.webp"/>

        {/*  Statik yontemde goruntulaer public klasoru icinde olmali */}
        <img scr="/public/assets/img/japan.webp" alt="" width="300" />
        {/* import yontemi */}
        <img scr={japan} width="300"/>

    </div>
  )
}

export default Image