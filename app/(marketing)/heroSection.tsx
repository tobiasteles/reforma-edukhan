"use client";

import { Button } from "@/components/ui/button";
import { HardHat, Heart, MessageCircle, ChevronDown, Globe } from "lucide-react";
import PixelWorker from "./pixelWorker";

const WHATSAPP_NUMBER = "5561981311414";

export default function HeroSection() {
  const scrollToMaterials = () => {
    document.getElementById("materials")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a campanha de doações de material para o Edukhan.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const openHome = () => {
    window.open("https://edukhan.ong.br", "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-mono pt-12 pb-24">
      {/* Backgrounds */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute bottom-0 left-0 right-0 h-[40%] brick-pattern opacity-20" />
      
      {/* --- CENÁRIO RESTAURADO --- */}
      
      {/* Nuvens */}
      <div className="absolute top-16 left-[10%] opacity-60 animate-float">
        <div className="flex">
          <div className="w-12 h-6 bg-white rounded-full shadow-lg" />
          <div className="w-16 h-8 bg-white rounded-full -ml-4 -mt-2 shadow-lg" />
        </div>
      </div>
      <div className="absolute top-32 right-[10%] opacity-40 animate-bounce-slow">
        <div className="w-24 h-10 bg-white rounded-full shadow-lg" />
      </div>
      <div className="absolute top-60 left-[25%] opacity-30 hidden md:block">
        <div className="w-16 h-8 bg-white rounded-full shadow-lg" />
      </div>

      {/* Base da Construção */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-edukhan-green border-t-8 border-edukhan-green/30" />
        <div className="absolute bottom-24 left-0 right-0 h-6 construction-stripes shadow-xl" />
        
        {/* Andaime Esquerdo */}
        <div className="absolute bottom-32 left-6 md:left-20">
          <div className="w-2 h-44 bg-gray-700/40" />
          <div className="absolute left-10 top-0 w-2 h-44 bg-gray-700/40" />
          <div className="absolute left-2 top-4">
            <PixelWorker type="hammering" />
          </div>
        </div>

        {/* Andaime Direito */}
        <div className="absolute bottom-32 right-6 md:right-24">
          <div className="w-2 h-52 bg-gray-700/40" />
          <div className="absolute left-10 top-0 w-2 h-52 bg-gray-700/40" />
          <div className="absolute left-2 top-8">
            <PixelWorker type="waving" flip />
          </div>
        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}

      <div className="relative z-10 container mx-auto px-4 flex grow items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 mt-[-2vh]">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-edukhan-yellow border-4 border-foreground px-6 py-2 shadow-button -rotate-2 mb-2 animate-in fade-in duration-700">
            <HardHat className="w-6 h-6 text-foreground" />
            <span className="text-sm font-black text-foreground uppercase tracking-widest">
              Campanha Reforma 2026
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] drop-shadow-[0_8px_0_rgba(0,0,0,0.2)]">
            CONSTRUINDO O <br />
            <span className="text-edukhan-yellow italic uppercase">Futuro</span> <br />
            DO EDUKHAN
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-2xl text-white font-bold max-w-2xl mx-auto bg-primary/20 backdrop-blur-md p-6 rounded-lg border-2 border-white/20">
            Juntos na reforma da nossa nova sede. Cada tijolo doado constrói um sorriso! 🧱❤️
          </p>

          {/* Cards de Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            <div className="pixel-card bg-white py-6 px-4 flex flex-col items-center group hover:scale-105 transition-all">
              <span className="text-4xl font-black text-primary">2026</span>
              <span className="text-xs font-bold text-muted-foreground uppercase">Inauguração</span>
            </div>
            <div className="pixel-card bg-white py-6 px-4 flex flex-col items-center group hover:scale-105 transition-all border-edukhan-yellow">
              <span className="text-4xl font-black text-primary">06</span>
              <span className="text-xs font-bold text-muted-foreground uppercase">Categorias</span>
            </div>
            <div className="pixel-card bg-white py-6 px-4 flex flex-col items-center group hover:scale-105 transition-all">
              <span className="text-4xl font-black text-primary">100+</span>
              <span className="text-xs font-bold text-muted-foreground uppercase">Itens</span>
            </div>
          </div>

          {/* Botões Principais */}
          <div className="flex flex-col items-center w-full pt-4 pb-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Button 
                size="lg" 
                onClick={scrollToMaterials}
                className="pixel-btn bg-edukhan-pink hover:bg-edukhan-pink/90 text-white w-full sm:w-auto text-xl h-16 shadow-[6px_6px_0_rgba(0,0,0,0.2)]"
              >
                <Heart className="w-6 h-6 fill-white" />
                DOE MATERIAIS
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={openWhatsApp}
                className="pixel-btn bg-white hover:bg-gray-100 text-primary w-full sm:w-auto text-xl h-16 shadow-[6px_6px_0_rgba(0,0,0,0.1)]"
              >
                <MessageCircle className="w-6 h-6" />
                WHATSAPP
              </Button>
            </div>

            {/* Botão Página Inicial */}
            <Button 
              variant="link" 
              onClick={openHome}
              className="pixel-btn bg-edukhan-sky hover:bg-edukhan-sky/90 text-white w-full sm:w-auto text-sm h-12 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border-2"
            >
              <Globe className="w-4 h-4" />
              CONHEÇA O SITE DO EDUKHAN
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 cursor-pointer hidden md:block" onClick={scrollToMaterials}>
        <ChevronDown className="w-10 h-10" />
      </div>
    </section>
  );
}