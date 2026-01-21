"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, X, Play, Video as VideoIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { id: 1, src: "/obra-1.png", alt: "Interior", caption: "Início do reboco interno" },
  { id: 2, src: "/obra-2.png", alt: "Externa", caption: "Preparação da fachada" },
  { id: 3, src: "/obra-3.png", alt: "Tijolos", caption: "Levantamento das paredes" },
  { id: 4, src: "/obra-4.png", alt: "Corredor", caption: "Infraestrutura básica" },
  { id: 5, src: "/obra-5.png", alt: "Salas", caption: "Acabamento das salas de aula" },
  { id: 6, src: "/obra-6.png", alt: "Luz", caption: "Iluminação natural" },
];

const galleryVideos = [
  {
    id: 1,
    title: "Tour pela Nova Sede",
    src: "/video-1.mp4", 
    // DICA: Se você tiver uma imagem da capa, coloque o caminho aqui:
    poster: "/thumb-video-1.jpg", 
  },
  {
    id: 2,
    title: "Progresso da Reforma",
    src: "/video-2.mp4",
    poster: "/thumb-video-2.jpg",
  },
  {
    id: 3,
    title: "Mensagem da Equipe",
    src: "/video-3.mp4",
    poster: "/thumb-video-3.jpg",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<(typeof galleryVideos)[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-edukhan-sky/10 text-edukhan-sky rounded-full px-4 py-2 text-sm font-mono mb-4">
            <Camera className="w-4 h-4" />
            <span>Transparência Total</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-foreground mb-4">
            Acompanhe a Obra
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Veja em fotos e vídeos o progresso da construção da nossa nova sede.
          </p>
        </div>

        {/* --- SEÇÃO DE VÍDEOS LOCAIS --- */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 border-b border-edukhan-sky/20 pb-2">
            <VideoIcon className="text-edukhan-sky w-6 h-6" />
            <h3 className="font-mono font-bold text-xl uppercase tracking-wider text-primary">Vídeos da Reforma</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryVideos.map((video) => (
              <div key={video.id} className="group flex flex-col gap-4">
                <div 
                  className="relative aspect-video rounded-3xl overflow-hidden shadow-xl cursor-pointer border-4 border-white group-hover:border-edukhan-sky transition-all bg-gray-100"
                  onClick={() => setSelectedVideo(video)}
                >
                  <video 
                    // O segredo está no #t=0.1 que força o carregamento do primeiro frame
                    src={`${video.src}#t=0.1`} 
                    poster={video.poster}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    playsInline
                  />
                  {/* Ícone de Play centralizado */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary fill-primary" />
                    </div>
                  </div>
                </div>
                <p className="font-mono text-center font-bold text-primary uppercase text-sm">{video.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SEÇÃO DE FOTOS --- */}
        <div className="flex items-center gap-2 mb-8 border-b border-edukhan-sky/20 pb-2">
          <Camera className="text-edukhan-sky w-6 h-6" />
          <h3 className="font-mono font-bold text-xl uppercase tracking-wider text-primary">Galeria de Fotos</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer shadow-card hover:scale-[1.02] transition-all"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-mono text-xs px-4 text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL VÍDEO */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden rounded-3xl">
            <button 
              onClick={() => setSelectedVideo(null)} 
              className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedVideo && (
              <video 
                src={selectedVideo.src} 
                className="w-full h-auto max-h-[85vh]" 
                controls 
                autoPlay 
              />
            )}
          </DialogContent>
        </Dialog>

        {/* MODAL FOTO */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 p-2 text-white hover:text-edukhan-sky">
              <X className="w-8 h-8" />
            </button>
            {selectedImage && (
              <div className="relative aspect-4/3">
                <Image src={selectedImage.src} alt={selectedImage.alt} fill className="rounded-xl object-contain" />
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}