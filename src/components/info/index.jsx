import React from 'react';

export default function Info() {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Pestaña Informativa</h2>
      <p className="text-gray-600 text-sm">
        Aquí se muestra la información principal del módulo.
      </p>
      
      <div className="border-t border-gray-100 pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-500">Estado:</span>
          <span className="text-green-600 font-semibold">Activo</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-500">Categoría:</span>
          <span className="text-gray-800">General</span>
        </div>
      </div>
    </div>
  );
}

