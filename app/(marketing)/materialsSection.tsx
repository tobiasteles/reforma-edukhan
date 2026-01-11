"use client";

import { Button } from "@/components/ui/button";
import { HardHat } from "lucide-react";
import { useState } from "react";
import MaterialCard from "./materialCard";

type MaterialCategory = "basico" | "estrutural" | "eletrica" | "agua" | "esgoto" | "acabamento";

interface Material {
  id: string;
  name: string;
  quantity_needed: number;
  unit: string;
  category: MaterialCategory;
}

const categoryConfig: Record<MaterialCategory, { name: string; emoji: string }> = {
  basico: { name: "BÁSICO", emoji: "🧱" },
  estrutural: { name: "ESTRUTURA", emoji: "🪵" },
  eletrica: { name: "ELÉTRICA", emoji: "⚡" },
  agua: { name: "ÁGUA", emoji: "💧" },
  esgoto: { name: "ESGOTO", emoji: "🔧" },
  acabamento: { name: "ACABAMENTO", emoji: "🎨" },
};

const categoryOrder: MaterialCategory[] = ["basico", "estrutural", "eletrica", "agua", "esgoto", "acabamento"];

// Lista estática de materiais
const materialsData: Material[] = [
  // BÁSICO
  { id: "b1", name: "Tijolos", quantity_needed: 2000, unit: "unidades", category: "basico" },
  { id: "b2", name: "Cimento", quantity_needed: 30, unit: "sacos", category: "basico" },
  { id: "b3", name: "Areia lavada média", quantity_needed: 5, unit: "m³", category: "basico" },
  { id: "b4", name: "Brita 0", quantity_needed: 4, unit: "m³", category: "basico" },
  { id: "b5", name: "Vedacit Vedalit", quantity_needed: 1, unit: "balde", category: "basico" },
  { id: "b6", name: "Vedapren Preto", quantity_needed: 1, unit: "balde", category: "basico" },
  { id: "b7", name: "Arame recozido", quantity_needed: 5, unit: "kg", category: "basico" },
  { id: "b8", name: "Prego 17x21", quantity_needed: 3, unit: "kg", category: "basico" },
  { id: "b9", name: "Prego 17x27", quantity_needed: 3, unit: "kg", category: "basico" },

  // ESTRUTURAL (Madeiramento)
  { id: "s1", name: "Tábua de 30cm", quantity_needed: 42, unit: "unidades", category: "estrutural" },
  { id: "s2", name: "Tábua de 20cm", quantity_needed: 20, unit: "unidades", category: "estrutural" },
  { id: "s3", name: "Tábua de 10cm", quantity_needed: 2, unit: "unidades", category: "estrutural" },
  { id: "s4", name: "Tarugo de 5cm", quantity_needed: 30, unit: "unidades", category: "estrutural" },

  // ELÉTRICA
  { id: "e1", name: "Caixas 4x2 PVC", quantity_needed: 75, unit: "unidades", category: "eletrica" },
  { id: "e2", name: "Caixas 4x4 PVC", quantity_needed: 8, unit: "unidades", category: "eletrica" },
  { id: "e3", name: "Mangueira elétrica 25mm", quantity_needed: 3, unit: "rolos", category: "eletrica" },
  { id: "e4", name: "Mangueira elétrica 20mm", quantity_needed: 1, unit: "rolo", category: "eletrica" },
  { id: "e5", name: "Mangueira elétrica 32mm", quantity_needed: 1, unit: "rolo", category: "eletrica" },
  { id: "e6", name: "Caixas para 18 a 24 disjuntores", quantity_needed: 2, unit: "unidades", category: "eletrica" },
  { id: "e7", name: "Fita isolante 20m", quantity_needed: 2, unit: "unidades", category: "eletrica" },

  // ÁGUA
  { id: "a1", name: "Tubos de 25mm água", quantity_needed: 6, unit: "unidades", category: "agua" },
  { id: "a2", name: "Tubo de 20mm água", quantity_needed: 1, unit: "unidade", category: "agua" },
  { id: "a3", name: "Joelhos de 25x90°", quantity_needed: 45, unit: "unidades", category: "agua" },
  { id: "a4", name: "Joelhos de 25x45°", quantity_needed: 15, unit: "unidades", category: "agua" },
  { id: "a5", name: "Tê de 25mm", quantity_needed: 12, unit: "unidades", category: "agua" },
  { id: "a6", name: "Bucha de redução 25x20mm", quantity_needed: 4, unit: "unidades", category: "agua" },
  { id: "a7", name: "Joelhos azul 25x1/2", quantity_needed: 20, unit: "unidades", category: "agua" },
  { id: "a8", name: "Joelhos azul 25x3/4", quantity_needed: 3, unit: "unidades", category: "agua" },
  { id: "a9", name: "Plug 1/2", quantity_needed: 25, unit: "unidades", category: "agua" },
  { id: "a10", name: "Plug 3/4", quantity_needed: 3, unit: "unidades", category: "agua" },
  { id: "a11", name: "Fita veda rosca 25m", quantity_needed: 5, unit: "unidades", category: "agua" },
  { id: "a12", name: "Base de registro de gaveta 3/4", quantity_needed: 6, unit: "unidades", category: "agua" },
  { id: "a13", name: "Base de registro de pressão 3/4", quantity_needed: 2, unit: "unidades", category: "agua" },
  { id: "a14", name: "Adaptador de 25x3/4", quantity_needed: 15, unit: "unidades", category: "agua" },
  { id: "a15", name: "Luvas LR azul 25x3/4", quantity_needed: 4, unit: "unidades", category: "agua" },

  // ESGOTO
  { id: "es1", name: "Tubos de 100mm", quantity_needed: 3, unit: "unidades", category: "esgoto" },
  { id: "es2", name: "Tubo de 50mm esgoto", quantity_needed: 1, unit: "unidade", category: "esgoto" },
  { id: "es3", name: "Tubos de 40mm esgoto", quantity_needed: 3, unit: "unidades", category: "esgoto" },
  { id: "es4", name: "Caixa de gordura cinza", quantity_needed: 1, unit: "unidade", category: "esgoto" },
  { id: "es5", name: "Ralos 150x50 sifonado", quantity_needed: 4, unit: "unidades", category: "esgoto" },
  { id: "es6", name: "Ralos 10x10 sifonado", quantity_needed: 4, unit: "unidades", category: "esgoto" },
  { id: "es7", name: "Junção de 100", quantity_needed: 4, unit: "unidades", category: "esgoto" },
  { id: "es8", name: "Tê de 100", quantity_needed: 4, unit: "unidades", category: "esgoto" },
  { id: "es9", name: "Redução de 100x50", quantity_needed: 4, unit: "unidades", category: "esgoto" },
  { id: "es10", name: "Joelhos de 100x90°", quantity_needed: 10, unit: "unidades", category: "esgoto" },
  { id: "es11", name: "Joelhos de 100x45°", quantity_needed: 8, unit: "unidades", category: "esgoto" },
  { id: "es12", name: "Luvas de 100", quantity_needed: 15, unit: "unidades", category: "esgoto" },
  { id: "es13", name: "Joelhos de 50x90°", quantity_needed: 8, unit: "unidades", category: "esgoto" },
  { id: "es14", name: "Joelhos de 50x45°", quantity_needed: 6, unit: "unidades", category: "esgoto" },
  { id: "es15", name: "Luvas de 50 esgoto", quantity_needed: 8, unit: "unidades", category: "esgoto" },
  { id: "es16", name: "Tê de 50 esgoto", quantity_needed: 2, unit: "unidades", category: "esgoto" },
  { id: "es17", name: "Junção de 50 esgoto", quantity_needed: 2, unit: "unidades", category: "esgoto" },
  { id: "es18", name: "Joelhos de 40x90° esgoto", quantity_needed: 20, unit: "unidades", category: "esgoto" },
  { id: "es19", name: "Joelhos de 40x45° esgoto", quantity_needed: 10, unit: "unidades", category: "esgoto" },
  { id: "es20", name: "Luvas de 40 esgoto", quantity_needed: 10, unit: "unidades", category: "esgoto" },
  { id: "es21", name: "Tê de 40 esgoto", quantity_needed: 4, unit: "unidades", category: "esgoto" },
  { id: "es22", name: "Junção de 40 esgoto", quantity_needed: 5, unit: "unidades", category: "esgoto" },
  { id: "es23", name: "Joelhos com anel 40mm", quantity_needed: 12, unit: "unidades", category: "esgoto" },
  { id: "es24", name: "Anéis de 100mm", quantity_needed: 25, unit: "unidades", category: "esgoto" },
  { id: "es25", name: "Anéis de 50mm", quantity_needed: 15, unit: "unidades", category: "esgoto" },
  { id: "es26", name: "Pasta lubrificante Tigre", quantity_needed: 2, unit: "unidades", category: "esgoto" },
  { id: "es27", name: "Cola PVC (litro)", quantity_needed: 2, unit: "unidades", category: "esgoto" },

  // ACABAMENTO (Ferramentas e Lixas)
  { id: "ac1", name: "Lâminas de serra", quantity_needed: 4, unit: "unidades", category: "acabamento" },
  { id: "ac2", name: "Lixa ferro n° 100", quantity_needed: 5, unit: "folhas", category: "acabamento" },
];
export default function MaterialsSection() {
    const [activeCategory, setActiveCategory] = useState<MaterialCategory>("basico");
  
  const filteredMaterials = materialsData.filter(m => m.category === activeCategory);
    return (
        <section id="materials" className="py-24 bg-background brick-pattern-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 border-4 border-yellow-600 px-4 py-2 shadow-button mb-6">
            <HardHat className="w-5 h-5 text-foreground" />
            <span className="pixel-font text-xs text-foreground">LISTA DE MATERIAIS</span>
          </div>
          <h2 className="text-xl md:text-3xl pixel-font text-foreground mb-4 pixel-text-shadow leading-relaxed">
            O QUE PRECISAMOS
          </h2>
          <p className="retro-font text-muted-foreground text-xl max-w-2xl mx-auto">
            Cada item faz diferença! Escolha como contribuir para a construção da nossa nova sede.
          </p>
        </div>

        {/* Category tabs - pixel style */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryOrder.map((categoryKey) => {
            const config = categoryConfig[categoryKey];
            const isActive = activeCategory === categoryKey;
            return (
              <Button
                key={categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
                className={`pixel-btn pixel-font text-[10px] gap-2 ${
                  isActive 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-card text-foreground border-foreground/20 hover:bg-muted"
                }`}
              >
                <span className="text-lg">{config.emoji}</span>
                {config.name}
              </Button>
            );
          })}
        </div>

        {/* Materials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMaterials.map((material, index) => (
            <div
              key={material.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <MaterialCard material={material} />
            </div>
          ))}
        </div>

      </div>
    </section>
    )
}