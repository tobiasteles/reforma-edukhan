"use client";

import { HardHat, Heart, MapPin, MessageCircle, Globe, Instagram, Linkedin } from "lucide-react";

const WHATSAPP_NUMBER = "5561981311414";

export default function Footer() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a campanha de doações da Edukhan.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    // Fundo cinza bem clarinho para o branco dos botões e cards se destacar
    <footer className="bg-[#f4f4f4] py-16 relative overflow-hidden font-mono border-t-8 border-[#0a28e6]">
      {/* Listras de Construção (Preto e Amarelo - Contraste Real) */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-yellow-400 overflow-hidden">
        <div className="w-full h-full opacity-20 construction-stripes" />
      </div>
      
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand/Sobre */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-[#FFD700] border-4 border-[#0a28e6] flex items-center justify-center shadow-[4px_4px_0px_#0a28e6] -rotate-3">
                <HardHat className="w-8 h-8 text-[#0a28e6]" />
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase text-[#0a28e6]">EDUKHAN</span>
            </div>
            <p className="font-bold text-gray-800 leading-relaxed text-lg">
              Construindo o futuro através da educação e tecnologia! 
              Sua doação é o motor dessa transformação. 🚀
            </p>
            {/* Links Sociais com fundo escuro para saltar no fundo claro */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/_edukhan/" target="_blank" className="p-3 bg-[#0a28e6] text-white rounded-xl hover:bg-[#e60a78] transition-all shadow-md">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://edukhan.ong.br" target="_blank" className="p-3 bg-[#0a28e6] text-white rounded-xl hover:bg-[#0aaae6] transition-all shadow-md">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contato - Ícones com cores fortes */}
          <div className="space-y-8">
            <h3 className="font-black text-sm uppercase tracking-[0.3em] text-[#e60a78]">Contato</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#22c55e] border-4 border-[#0a28e6] flex items-center justify-center shadow-[4px_4px_0px_#0a28e6] group-hover:rotate-6 transition-transform">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest">WhatsApp</p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="text-xl font-black text-[#0a28e6] hover:underline transition-all">
                    (61) 98131-1414
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#0aaae6] border-4 border-[#0a28e6] flex items-center justify-center shadow-[4px_4px_0px_#0a28e6] group-hover:rotate-6 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest">Endereço</p>
                  <p className="text-xl font-black uppercase text-[#0a28e6]">Estrutural, DF</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Chamada para Ação (CTA) - CONTRASTE FORÇADO */}
          <div className="space-y-8">
            <h3 className="font-black text-sm uppercase tracking-[0.3em] text-[#e60a78]">Faça Parte</h3>
            <div className="flex flex-col gap-4">
              {/* Botão Rosa -> Texto Branco e Borda Azul Escura */}
              <a 
                href="#materials" 
                className="bg-[#e60a78] text-white text-center font-black text-base py-4 px-8 rounded-2xl flex items-center justify-center gap-3 border-4 border-[#0a28e6] shadow-[6px_6px_0px_#0a28e6] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <Heart className="w-6 h-6 fill-white" />
                DOE MATERIAIS
              </a>
              {/* Botão Branco -> Texto Azul Escuro e Borda Azul Escura */}
              <button
                onClick={openWhatsApp}
                className="bg-white text-[#0a28e6] font-black text-base py-4 px-8 rounded-2xl flex items-center justify-center gap-3 border-4 border-[#0a28e6] shadow-[6px_6px_0px_#0a28e6] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                FALE CONOSCO
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé Final com sua Assinatura */}
        <div className="mt-20 pt-10 border-t-4 border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="font-black text-sm text-[#0a28e6] uppercase tracking-widest text-center md:text-left">
              © 2026 Edukhan - Multiplicando Sorrisos
            </p>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-600">
                Desenvolvido por
                <a
                  href="https://www.linkedin.com/in/tobias-teles"
                  target="_blank"
                  className="bg-[#0a28e6] px-4 py-2 rounded-xl text-white font-black hover:bg-[#e60a78] transition-all flex items-center gap-2"
                >
                  Tobias Teles
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[10px] font-black uppercase text-gray-400 flex items-center gap-1">
                Feito com <Heart className="w-3 h-3 text-[#e60a78] fill-[#e60a78] animate-pulse" /> para a comunidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}