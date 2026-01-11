"use client";

import { Check, Clock, Hammer, Home, Paintbrush, Sparkles } from "lucide-react";

const timelineSteps = [
  {
    id: 1,
    title: "Compra da Casa",
    description: "Projeto arquitetônico e aprovações",
    date: "Jun - Nov 2025",
    icon: Clock,
    status: "completed",
    color: "edukhan-green"
  },
  {
    id: 2,
    title: "Inicio das Obras",
    description: "Estrutura base e alicerces",
    date: "Nov 2024",
    icon: Hammer,
    status: "completed",
    color: "edukhan-yellow"
  },
  {
    id: 3,
    title: "Estrutura",
    description: "Paredes, telhado e instalações básicas",
    date: "Dez 2025",
    icon: Home,
    status: "current",
    color: "edukhan-sky"
  },
  {
    id: 4,
    title: "Acabamento",
    description: "Pintura, piso e detalhes finais",
    date: "Jan - Fev 2026",
    icon: Paintbrush,
    status: "upcoming",
    color: "edukhan-purple"
  },
  {
    id: 5,
    title: "Inauguração",
    description: "Abertura da nova sede",
    date: "Mar 2026",
    icon: Sparkles,
    status: "upcoming",
    color: "edukhan-pink"
  },
];

export default function TimelineSection() {
    return (
        <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-edukhan-purple/10 text-edukhan-purple rounded-full px-4 py-2 text-sm font-mono mb-4">
            <Clock className="w-4 h-4" />
            <span>Cronograma</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-foreground mb-4">
            Nossa Jornada até 2026
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada etapa nos aproxima do objetivo. Acompanhe o progresso da construção.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden md:block" />

          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={step.id}
                className={`relative flex items-center mb-12 last:mb-0 animate-fade-in ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div 
                    className={`bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-l-4 ${
                      step.status === "completed" ? "border-edukhan-green" :
                      step.status === "current" ? "border-edukhan-sky" : "border-muted"
                    }`}
                  >
                    <span className={`text-${step.color} font-mono text-sm`}>{step.date}</span>
                    <h3 className="text-xl font-mono font-bold text-foreground mt-1">{step.title}</h3>
                    <p className="text-muted-foreground mt-2">{step.description}</p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-4 border-background transition-all duration-300 ${
                      step.status === "completed" ? "bg-edukhan-green" :
                      step.status === "current" ? "bg-edukhan-sky animate-pulse" : "bg-muted"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <Check className="w-6 h-6 text-foreground" />
                    ) : (
                      <Icon className={`w-6 h-6 ${step.status === "current" ? "text-foreground" : "text-muted-foreground"}`} />
                    )}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
    )
}