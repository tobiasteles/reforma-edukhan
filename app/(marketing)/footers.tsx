"use client";

import { Button } from "@/components/ui/button";
import { HardHat, Heart, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5561981311414";


export default function Footer(){
    const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a campanha de doações da Edukhan.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };
    return (
        <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Construction stripes at top */}
      <div className="absolute top-0 left-0 right-0 h-4 construction-stripes" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 border-4 border-yellow-600 flex items-center justify-center shadow-button">
                <HardHat className="w-6 h-6 text-foreground" />
              </div>
              <span className="pixel-font text-xl text-background">EDUKHAN</span>
            </div>
            <p className="retro-font text-background/70 leading-relaxed text-lg">
              Construindo um futuro melhor através da educação e tecnologia! 
              Sua doação nos ajuda a criar um espaço de aprendizado moderno e acolhedor.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="pixel-font text-sm mb-6 text-background">CONTATO</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 border-2 border-green-700 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-background/60 retro-font">WhatsApp</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="retro-font text-lg hover:text-yellow-400 transition-colors"
                  >
                    (61) 98131-1414
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-background/10 border-2 border-background/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-background/60 retro-font">Endereço</p>
                  <p className="retro-font text-lg">Brasília, DF</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="pixel-font text-sm mb-6 text-background">FAÇA PARTE</h3>
            <p className="retro-font text-background/70 mb-6 text-lg">
              Cada contribuição conta! Juntos, estamos construindo o futuro da Edukhan.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="#materials" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground pixel-font text-xs px-6 py-3 pixel-btn"
              >
                <Heart className="w-5 h-5" />
                VER MATERIAIS
              </a>
              <Button
                onClick={openWhatsApp}
                className="pixel-btn bg-green-500 hover:bg-green-600 text-white border-green-700 pixel-font text-xs gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                FALE CONOSCO
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t-4 border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 retro-font text-lg">
              © 2026 Edukhan - Construindo o futuro juntos!
            </p>
            <p className="text-background/60 retro-font text-lg flex items-center gap-2">
              Feito com <Heart className="w-4 h-4 text-red-500 animate-pulse" /> pela comunidade
            </p>
            <p className="text-background/60 retro-font text-lg flex items-center gap-2">
              Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/tobias-teles"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700 transition-colors"
              >
                Tobias Teles
              </a>
            </p>
          </div>
        </div>

       
      </div>
    </footer>
    )
}