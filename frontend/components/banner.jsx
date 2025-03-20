import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import logo from "../public/assets/logo.png"

function Banner() {
  return (
    <div className='flex flex-col items-start'>
      <div>
        <img src={logo}></img>
      </div>
      <div className='max-w-lg'>
        <h1>
        <p>Excelência, segurança e resultados naturais em <span className='font-bold text-[#FD919C]'>cirurgia plástica.</span></p>
        </h1>
      </div>
      <div className='py-8 max-w-md text-xl'>
        <p>
        Referência na <span className="font-bold">realização</span> de cirurgias plásticas e <span className="font-bold">cursos avançados</span> para profissionais que desejam se especializar.
        </p>
      </div>



    </div>
  )
}

export default Banner
