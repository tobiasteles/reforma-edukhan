"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/obra-1.png", // Caminho para a imagem na pasta public
    alt: "Interior em reforma",
    caption: "Início do reboco e nivelamento interno",
  },
  {
    id: 2,
    src: "/obra-2.png",
    alt: "Área externa",
    caption: "Preparação da fachada e estrutura externa",
  },
  {
    id: 3,
    src: "/obra-3.png",
    alt: "Parede de tijolos",
    caption: "Levantamento das novas paredes da sede",
  },
  {
    id: 4,
    src: "/obra-4.png",
    alt: "Corredor em obras",
    caption: "Instalação elétrica e infraestrutura básica",
  },
  {
    id: 5,
    src: "/obra-5.png",
    alt: "Cômodo em reforma",
    caption: "Acabamento das salas de aula",
  },
  {
    id: 6,
    src: "/obra-6.png",
    alt: "Janela e reboco",
    caption: "Finalização das aberturas e iluminação natural",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-edukhan-sky/10 text-edukhan-sky rounded-full px-4 py-2 text-sm font-mono mb-4">
            <Camera className="w-4 h-4" />
            <span>Transparência Total</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-foreground mb-4">
            Acompanhe a Obra
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja de perto o progresso da construção da nossa nova sede. Cada
            foto representa um passo em direção ao nosso sonho.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800} // Aumentado para melhor qualidade
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-mono text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox dialog */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-foreground/50 hover:bg-foreground/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {selectedImage && (
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200} // Imagem grande para o destaque
                  height={900}
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-foreground/90 to-transparent rounded-b-xl">
                  <p className="text-white font-mono text-lg">
                    {selectedImage.caption}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
