"use client";

import { Button } from "@/components/ui/button";
import { HardHat, Heart, MessageCircle, ChevronDown, Copy, Check } from "lucide-react";
import PixelWorker from "./pixelWorker";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Importe o QR Code

const WHATSAPP_NUMBER = "5561981311414";

export default function HeroSection() {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const pixKey = "50.615.676/0001-68";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToMaterials = () => {
    document.getElementById("materials")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a campanha de doações de material para o Edukhan.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-mono pt-12 pb-24">
      {/* Backgrounds */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute bottom-0 left-0 right-0 h-[40%] brick-pattern opacity-20" />
      
      {/* --- CENÁRIO --- */}
      <div className="absolute top-16 left-[10%] opacity-60 animate-float">
        <div className="flex">
          <div className="w-12 h-6 bg-white rounded-full shadow-lg" />
          <div className="w-16 h-8 bg-white rounded-full -ml-4 -mt-2 shadow-lg" />
        </div>
      </div>

      {/* Base da Construção */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-edukhan-green border-t-8 border-edukhan-green/30" />
        <div className="absolute bottom-24 left-0 right-0 h-6 construction-stripes shadow-xl" />
        
        <div className="absolute bottom-32 left-6 md:left-20">
          <div className="w-2 h-44 bg-gray-700/40" />
          <div className="absolute left-10 top-0 w-2 h-44 bg-gray-700/40" />
          <div className="absolute left-2 top-4">
            <PixelWorker type="hammering" />
          </div>
        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="relative z-10 container mx-auto px-4 flex grow items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 mt-[-2vh]">
          
          <div className="inline-flex items-center gap-3 bg-edukhan-yellow border-4 border-foreground px-6 py-2 shadow-button -rotate-2 mb-2">
            <HardHat className="w-6 h-6 text-foreground" />
            <span className="text-sm font-black text-foreground uppercase tracking-widest">
              Campanha Reforma 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] drop-shadow-[0_8px_0_rgba(0,0,0,0.2)]">
            CONSTRUINDO O <br />
            <span className="text-edukhan-yellow italic uppercase">Futuro</span> <br />
            DO EDUKHAN
          </h1>

          <p className="text-lg md:text-2xl text-white font-bold max-w-2xl mx-auto bg-primary/20 backdrop-blur-md p-6 rounded-lg border-2 border-white/20">
            Juntos na reforma da nossa nova sede. Cada tijolo doado constrói um sorriso! 🧱❤️
          </p>

          {/* Botões Principais */}
          <div className="flex flex-col items-center w-full pt-4 pb-16 space-y-6">
            <button
              onClick={() => setIsPixModalOpen(true)}
              className="group relative bg-white text-primary px-10 py-5 rounded-full font-black text-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-all flex items-center gap-3 overflow-hidden"
            >
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-pulse" />
              Doar via PIX
            </button>

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
          </div>
        </div>
      </div>

      {/* --- MODAL PIX --- */}
      {isPixModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all">
          <div className="bg-white p-6 md:p-8 max-w-sm w-full relative border-4 border-foreground shadow-[12px_12px_0_0_rgba(0,0,0,1)] animate-in zoom-in-95 duration-200">
            
            {/* Fechar */}
            <button 
              onClick={() => setIsPixModalOpen(false)}
              className="absolute -top-4 -right-4 bg-edukhan-pink text-white w-10 h-10 border-4 border-foreground font-black text-xl hover:bg-red-600 transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              X
            </button>

            <div className="text-center space-y-4 mb-6">
              <h3 className="text-2xl font-black text-primary uppercase italic leading-none">Apoie a Reforma</h3>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                Escaneie o código ou copie a chave abaixo
              </p>
            </div>

            {/* QR Code Container */}
            <div className="flex justify-center mb-6 bg-white p-4 border-4 border-foreground shadow-[6px_6px_0_0_rgba(0,0,0,0.1)]">
              <QRCodeSVG 
                value={pixKey} 
                size={180}
                level="M"
                includeMargin={false}
              />
            </div>

            {/* Campo da Chave */}
            <div className="space-y-2">
              <div className="bg-slate-100 p-3 border-2 border-foreground/20 flex items-center justify-between">
                <code className="text-[12px] font-black truncate mr-2">{pixKey}</code>
                <button 
                  onClick={copyToClipboard}
                  className="text-primary hover:scale-110 transition-transform"
                >
                  {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              <Button 
                onClick={copyToClipboard}
                className={`w-full h-14 text-lg font-black transition-all ${
                  copied ? 'bg-green-500 hover:bg-green-600' : 'bg-edukhan-yellow hover:bg-edukhan-yellow/90'
                } text-foreground border-4 border-foreground shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1`}
              >
                {copied ? "COPIADO!" : "COPIAR CHAVE"}
              </Button>
            </div>

            <p className="mt-4 text-[9px] text-center font-bold text-gray-400 uppercase leading-tight">
              Instituto Edukhan <br/> CNPJ: 50.615.676/0001-68
            </p>
          </div>
        </div>
      )}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 cursor-pointer hidden md:block" onClick={scrollToMaterials}>
        <ChevronDown className="w-10 h-10" />
      </div>
    </section>
  );
}