import React, { useState } from 'react';

const GalleryDemo = () => {
  const [selected, setSelected] = useState(null);
  const images = [
    { id: 1, color: 'from-purple-500 to-pink-500' },
    { id: 2, color: 'from-blue-500 to-cyan-500' },
    { id: 3, color: 'from-green-500 to-emerald-500' },
    { id: 4, color: 'from-orange-500 to-red-500' },
    { id: 5, color: 'from-indigo-500 to-purple-500' },
    { id: 6, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {images.map(img => (
          <div
            key={img.id}
            onClick={() => setSelected(img)}
            className={`h-32 bg-gradient-to-br ${img.color} rounded-lg cursor-pointer hover:scale-105 transition-transform flex items-center justify-center text-white font-bold text-2xl`}
          >
            {img.id}
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className={`w-96 h-96 bg-gradient-to-br ${selected.color} rounded-lg flex items-center justify-center text-white font-bold text-6xl`}>
            {selected.id}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDemo;