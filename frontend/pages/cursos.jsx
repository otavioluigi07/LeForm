import React, { useState, useEffect } from 'react';
import CursoCard from '../components/CursoCard';
import Filtros from '../components/Filtros';
import Hero from '../components/Hero';
import { Search, Filter } from 'lucide-react';
import { mockCourses } from '../data/mockCourses';

const Cursos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(mockCourses);
  const [selectedFilters, setSelectedFilters] = useState({
    specialization: [],
    priceRange: ''
  });
  
  // Função para filtrar cursos com base nos filtros selecionados
  useEffect(() => {
    let result = [...mockCourses];
    
    // Filtrar por termo de pesquisa
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtrar por especialização
    if (selectedFilters.specialization.length > 0) {
      result = result.filter(course => 
        selectedFilters.specialization.includes(course.specialization)
      );
    }
    
    // Filtrar por faixa de preço
    if (selectedFilters.priceRange) {
      const [min, max] = selectedFilters.priceRange.split('-').map(Number);
      result = result.filter(course => {
        const coursePrice = parseFloat(course.price.replace(',', '.'));
        return coursePrice >= min && coursePrice <= max;
      });
    }
    
    setFilteredCourses(result);
  }, [searchTerm, selectedFilters]);
  
  // Função para limpar filtros
  const clearFilters = () => {
    setSelectedFilters({
      specialization: [],
      priceRange: ''
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">
          Quer se especializar? Conheça nossos cursos.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Pesquise pelo nome, especialização..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF879B] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <button 
            className="sm:hidden flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            Filtrar
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className={`${showFilters ? 'block' : 'hidden'} sm:block flex-shrink-0`}>
            <Filtros 
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredCourses.length} cursos encontrados</p>
              {(selectedFilters.specialization.length > 0 || selectedFilters.priceRange || searchTerm) && (
                <button 
                  onClick={clearFilters}
                  className="text-[#FF879B] text-sm font-medium"
                >
                  Limpar filtros
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((curso, index) => (
                <CursoCard key={index} {...curso} />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500">Nenhum curso encontrado com os filtros selecionados.</p>
              </div>
            )}

            {filteredCourses.length > 0 && (
              <div className="flex justify-center items-center mt-12 gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100">&lt;</button>
                <button className="p-2 rounded-lg bg-[#FF879B] text-white">1</button>
                <button className="p-2 rounded-lg hover:bg-gray-100">...</button>
                <button className="p-2 rounded-lg hover:bg-gray-100">12</button>
                <button className="p-2 rounded-lg hover:bg-gray-100">&gt;</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursos;