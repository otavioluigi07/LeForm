import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import logo from "../public/assets/logo.png"
import mulher from "../public/assets/mulher.png"

function Banner() {
  return (
<div className="flex flex-col sm:flex-row items-center w-full">
  <div className="flex flex-col items-start sm:w-1/2">
    <div>
      <img src={logo} alt="Logo" />
    </div>
    <div className="max-w-lg">
      <h1>
        <p>
          Excelência, segurança e resultados naturais em{" "}
          <span className="font-bold text-[#FD919C]">cirurgia plástica.</span>
        </p>
      </h1>
    </div>
    <div className="py-8 max-w-md text-xl">
      <p>
        Referência na <span className="font-bold">realização</span> de cirurgias
        plásticas e <span className="font-bold">cursos avançados</span> para
        profissionais que desejam se especializar.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="!bg-[#FD919C] text-white px-10 py-2 rounded">
        Quero ser parceiro
      </button>
      <button className="!bg-transparent !border-[#FD919C] border-2 text-[#FD919C] px-10 py-2 rounded">
        Quero ser paciente
      </button>
    </div>
  </div>
  <div className="sm:w-1/2 flex justify-end mt-8 sm:mt-0">
    <img
      src={mulher}
      className="w-full max-w-md sm:max-w-lg object-contain"
      alt="Mulher"
    />
  </div>
</div>

    

  )
}

export default Banner
