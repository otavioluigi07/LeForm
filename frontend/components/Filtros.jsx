import React from 'react';

const Filtros = () => {
  return (
    <div className="w-full md:w-64 bg-white p-6 rounded-2xl border border-gray-100">
      <h3 className="font-semibold text-lg mb-6">Aplicar filtros</h3>
      
      <div className="mb-8">
        <h4 className="font-medium mb-4">Especialização</h4>
        <div className="space-y-3">
          {['Rinoplastia', 'Mamoplastia', 'Lipoaspiração', 'Abdominoplastia'].map((item) => (
            <label key={item} className="flex items-center">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#FF879B] focus:ring-[#FF879B]" />
              <span className="ml-3 text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-4">Valor</h4>
        <div className="space-y-3">
          {['R$ 0-100', 'R$ 100-200', 'R$ 200-300', 'R$ +300'].map((item) => (
            <label key={item} className="flex items-center">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#FF879B] focus:ring-[#FF879B]" />
              <span className="ml-3 text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filtros;