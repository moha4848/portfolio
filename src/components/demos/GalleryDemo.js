import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export const GalleryDemo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { id:1, title:'Lever de soleil', emoji:'🌅', color:'from-purple-500 to-pink-500' },
    { id:2, title:'Paysage', emoji:'🏞️', color:'from-blue-500 to-cyan-500' },
    { id:3, title:'Océan', emoji:'🌊', color:'from-green-500 to-emerald-500' }
  ];

  if(selectedImage){
    return (
      <div className="p-6 bg-slate-800 rounded-xl">
        <button onClick={()=>setSelectedImage(null)} className="flex items-center gap-2 text-slate-300 mb-4 hover:text-white">
          <ChevronLeft size={20}/> Retour
        </button>
        <div className={`h-64 rounded-xl bg-gradient-to-br ${selectedImage.color} flex items-center justify-center mb-4`}>
          <span className="text-8xl">{selectedImage.emoji}</span>
        </div>
        <h2 className="text-center text-xl font-bold text-white">{selectedImage.title}</h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-slate-800 rounded-xl">
      <h2 className="text-center text-xl mb-4 text-blue-400 font-bold">Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map(img=>(
          <button key={img.id} onClick={()=>setSelectedImage(img)}
            className={`h-32 rounded-lg bg-gradient-to-br ${img.color} flex flex-col items-center justify-center hover:scale-105 transition-transform`}>
            <span className="text-5xl mb-2">{img.emoji}</span>
            <span className="text-sm font-semibold text-white">{img.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
