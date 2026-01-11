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

export default function MaterialCard({ material }: MaterialCardProps){
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
        <div className="pixel-card p-4 transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{getCategoryEmoji()}</span>
            <h4 className="pixel-font text-foreground text-xs leading-relaxed">
              {material.name}
            </h4>
          </div>
          <p className="retro-font text-muted-foreground text-lg">
            Precisamos de{" "}
            <span className="text-primary font-bold">
              {material.quantity_needed.toLocaleString()}
            </span>{" "}
            {material.unit}
          </p>
        </div>
        <Button 
          onClick={handleWhatsAppClick}
          className="pixel-btn bg-green-500 hover:bg-green-600 text-white border-green-700 pixel-font text-[10px] gap-1 px-3 py-2"
        >
          <MessageCircle className="w-4 h-4" />
          DOAR
        </Button>
      </div>
    </div>
    )
}