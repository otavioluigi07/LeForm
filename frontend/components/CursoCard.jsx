import React from 'react';

const CursoCard = ({ title, doctor, price, lessons }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="h-48 bg-gray-100"></div>
      <div className="p-4">
        {/* Título e Doutor */}
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">{title}</h3>
        <p className="text-gray-600 mb-4">{doctor}</p>

        {/* Preço e Aulas */}
        <div className="mb-4">
          <p className="text-[#1A1A1A] font-bold text-lg">R$ {price}</p>
          <p className="text-[#FF879B] text-sm">{lessons} aulas</p>
        </div>

        {/* Botão */}
        <button className="bg-[#FF879B] hover:bg-[#E5677F] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm w-full">
          Quero me inscrever
        </button>
      </div>
    </div>
  );
};

export default CursoCard;
