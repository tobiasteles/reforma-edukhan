"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

type MaterialCategory = "basico" | "estrutural" | "eletrica" | "agua" | "esgoto" | "acabamento";

interface Material {
  id: string;
  name: string;
  quantity_needed: number;
  unit: string;
  category: MaterialCategory;
}

interface MaterialCardProps {
  material: Material;
}

const WHATSAPP_NUMBER = "5561981311414";

export default function MaterialCard({ material }: MaterialCardProps) {
  const getCategoryEmoji = () => {
    switch (material.category) {
      case "basico": return "🧱";
      case "estrutural": return "🪵";
      case "eletrica": return "⚡";
      case "agua": return "💧";
      case "esgoto": return "🔧";
      case "acabamento": return "🎨";
      default: return "📦";
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de doar para a campanha Edukhan:\n\n` +
      `📦 Material: ${material.name}\n` +
      `📊 Quantidade necessária: ${material.quantity_needed} ${material.unit}\n\n` +
      `Como posso ajudar?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="pixel-card p-5 bg-white group hover:border-edukhan-sky transition-all duration-200">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl bg-muted p-2 rounded-xl group-hover:bg-edukhan-yellow transition-colors duration-300">
            {getCategoryEmoji()}
          </span>
          <div className="flex-1">
            <h4 className="font-black text-primary text-base uppercase leading-tight">
              {material.name}
            </h4>
            <p className="text-foreground/60 text-xs font-bold font-mono">
              Necessário: <span className="text-primary">{material.quantity_needed.toLocaleString()}</span> {material.unit}
            </p>
          </div>
        </div>

        <Button 
          onClick={handleWhatsAppClick}
          className="pixel-btn bg-edukhan-green hover:bg-edukhan-green/90 text-white w-full h-12 text-xs font-black gap-2 shadow-[4px_4px_0_rgba(0,0,0,0.1)]"
        >
          <MessageCircle className="w-5 h-5" />
          EU QUERO DOAR
        </Button>
      </div>
    </div>
  );
}