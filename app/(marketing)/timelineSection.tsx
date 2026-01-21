"use client";

import { Check, Clock, Hammer, Home, Paintbrush, Sparkles, Construction } from "lucide-react";

const timelineSteps = [
  {
    id: 1,
    title: "Compra da Casa",
    description: "Projeto arquitetônico e aprovações oficiais.",
    date: "Jun - Nov 2025",
    icon: Clock,
    status: "completed",
    color: "bg-edukhan-green",
    textColor: "text-edukhan-green"
  },
  {
    id: 2,
    title: "Início das Obras",
    description: "Estrutura base e alicerces da nova sede.",
    date: "Nov 2025",
    icon: Hammer,
    status: "completed",
    color: "bg-edukhan-yellow",
    textColor: "text-edukhan-yellow"
  },
  {
    id: 3,
    title: "Estrutura",
    description: "Paredes, telhado e instalações básicas.",
    date: "Dez 2025",
    icon: Home,
    status: "current",
    color: "bg-edukhan-sky",
    textColor: "text-edukhan-sky"
  },
  {
    id: 4,
    title: "Acabamento",
    description: "Pintura, piso e detalhes finais.",
    date: "Jan - Mar 2026",
    icon: Paintbrush,
    status: "upcoming",
    color: "bg-edukhan-purple",
    textColor: "text-edukhan-purple"
  },
  {
    id: 5,
    title: "Inauguração",
    description: "Abertura oficial da nossa nova casa!",
    date: "Abril 2026",
    icon: Sparkles,
    status: "upcoming",
    color: "bg-edukhan-pink",
    textColor: "text-edukhan-pink"
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-10 right-[-5%] opacity-5 rotate-12 hidden lg:block">
        <Construction size={300} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl md:text-6xl font-black text-primary uppercase drop-shadow-[0_4px_0_rgba(0,0,0,0.1)] mb-6">
            Jornada <span className="text-edukhan-pink">2026</span>
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto font-bold">
            Cada tijolo colocado é um passo em direção ao sonho da sede própria.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Linha Central Estilizada (Estilo Listra de Construção) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-full bg-muted rounded-full hidden md:block overflow-hidden">
             <div className="w-full h-full construction-stripes opacity-20" />
          </div>

          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={step.id}
                className={`relative flex items-center mb-20 last:mb-0 animate-in fade-in slide-in-from-bottom-10 duration-700 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content card - Estilo Pixel Card */}
                <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div 
                    className={`pixel-card bg-white group hover:-translate-y-2 transition-all duration-300 ${
                      step.status === "current" ? "border-edukhan-sky" : "border-foreground"
                    }`}
                  >
                    <div className={`inline-block px-3 py-1 rounded-full mb-3 text-[10px] font-black uppercase tracking-tighter text-white ${step.color}`}>
                      {step.date}
                    </div>
                    <h3 className={`text-2xl font-black mb-2 uppercase ${step.status === "upcoming" ? "text-foreground/40" : "text-primary"}`}>
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 font-bold leading-tight">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center icon - Círculo com Borda Grossa */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex z-20">
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-foreground shadow-button rotate-3 transition-transform group-hover:rotate-12 ${
                      step.status === "completed" ? "bg-edukhan-green" :
                      step.status === "current" ? "bg-edukhan-sky animate-bounce" : "bg-white"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <Check className="w-8 h-8 text-white stroke-[4px]" />
                    ) : (
                      <Icon className={`w-8 h-8 ${step.status === "current" ? "text-white" : "text-foreground/30"}`} />
                    )}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}