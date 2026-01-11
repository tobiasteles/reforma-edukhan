"use client";

import { Button } from "@/components/ui/button";
import {  HardHat, Heart, MessageCircle } from "lucide-react";
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
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Clouds - pixel style */}
      <div className="absolute top-20 left-[10%] opacity-90">
        <div className="flex">
          <div className="w-8 h-4 bg-white rounded-full" />
          <div className="w-12 h-6 bg-white rounded-full -ml-2 -mt-1" />
          <div className="w-8 h-4 bg-white rounded-full -ml-2" />
        </div>
      </div>
      <div className="absolute top-32 right-[15%] opacity-80">
        <div className="flex">
          <div className="w-6 h-3 bg-white rounded-full" />
          <div className="w-10 h-5 bg-white rounded-full -ml-2 -mt-1" />
          <div className="w-6 h-3 bg-white rounded-full -ml-2" />
        </div>
      </div>
      <div className="absolute top-48 left-[30%] opacity-70">
        <div className="flex">
          <div className="w-10 h-5 bg-white rounded-full" />
          <div className="w-14 h-7 bg-white rounded-full -ml-3 -mt-1" />
          <div className="w-8 h-4 bg-white rounded-full -ml-2" />
        </div>
      </div>

      {/* Brick wall background at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] brick-pattern opacity-90" />
      
      {/* Construction site elements */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Ground/dirt */}
        <div className="h-16 bg-linear-to-t from-amber-800 to-amber-700" />
        
        {/* Construction stripes warning bar */}
        <div className="absolute bottom-16 left-0 right-0 h-4 construction-stripes" />
        
        {/* Scaffolding left */}
        <div className="absolute bottom-16 left-8 md:left-24">
          <div className="w-2 h-40 bg-gray-600" />
          <div className="absolute left-8 top-0 w-2 h-40 bg-gray-600" />
          <div className="absolute left-0 top-8 w-10 h-2 bg-gray-500" />
          <div className="absolute left-0 top-20 w-10 h-2 bg-gray-500" />
          <div className="absolute left-0 top-32 w-10 h-2 bg-gray-500" />
          {/* Worker on scaffolding */}
          <div className="absolute left-1 top-6">
            <PixelWorker type="hammering" />
          </div>
        </div>

        {/* Scaffolding right */}
        <div className="absolute bottom-16 right-8 md:right-24">
          <div className="w-2 h-48 bg-gray-600" />
          <div className="absolute left-8 top-0 w-2 h-48 bg-gray-600" />
          <div className="absolute left-0 top-12 w-10 h-2 bg-gray-500" />
          <div className="absolute left-0 top-28 w-10 h-2 bg-gray-500" />
          <div className="absolute left-0 top-44 w-10 h-2 bg-gray-500" />
          {/* Worker on scaffolding */}
          <div className="absolute left-1 top-10">
            <PixelWorker type="waving" flip />
          </div>
        </div>

        {/* Workers on ground */}
        <div className="absolute bottom-20 left-[25%] hidden md:block">
          <PixelWorker type="carrying" />
        </div>
        <div className="absolute bottom-20 right-[30%] hidden md:block">
          <PixelWorker type="walking" flip />
        </div>

        {/* Brick piles */}
        <div className="absolute bottom-16 left-[40%] flex flex-col">
          <div className="flex">
            <div className="w-4 h-2 bg-red-700 border border-red-900" />
            <div className="w-4 h-2 bg-red-600 border border-red-800" />
          </div>
          <div className="flex -mt-px">
            <div className="w-4 h-2 bg-red-600 border border-red-800" />
            <div className="w-4 h-2 bg-red-700 border border-red-900" />
            <div className="w-4 h-2 bg-red-600 border border-red-800" />
          </div>
        </div>

        {/* Cement mixer */}
        <div className="absolute bottom-16 right-[40%] hidden md:block">
          <div className="w-8 h-6 bg-yellow-500 rounded-full border-2 border-yellow-700" />
          <div className="w-10 h-2 bg-gray-600 -mt-1 -ml-px" />
          <div className="flex justify-between px-1">
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
          </div>
        </div>
      </div>

      {/* Scanlines overlay for retro effect */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 border-4 border-yellow-600 px-4 py-2 text-foreground text-sm pixel-font animate-fade-in shadow-button mt-12">
            <HardHat className="w-5 h-5" />
            <span className="text-xs">CAMPANHA 2026</span>
          </div>

          {/* Main title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl pixel-font text-foreground leading-tight animate-fade-in pixel-text-shadow" style={{ animationDelay: "0.1s", lineHeight: "1.4" }}>
            CONSTRUINDO O{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">FUTURO</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400" />
            </span>{" "}
            DA EDUKHAN
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 retro-font max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Rumo a 2026: Juntos na reforma da nossa nova sede! 
            Cada tijolo doado nos aproxima do sonho de um espaço melhor para todos.
          </p>

          {/* Stats - pixel style boxes */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card border-4 border-foreground/20 p-4 shadow-card">
              <div className="text-3xl md:text-4xl pixel-font text-primary">2026</div>
              <div className="text-foreground/60 text-sm retro-font mt-1">INAUGURAÇÃO</div>
            </div>
            <div className="bg-card border-4 border-foreground/20 p-4 shadow-card">
              <div className="text-3xl md:text-4xl pixel-font text-yellow-500">6</div>
              <div className="text-foreground/60 text-sm retro-font mt-1">CATEGORIAS</div>
            </div>
            <div className="bg-card border-4 border-foreground/20 p-4 shadow-card">
              <div className="text-3xl md:text-4xl pixel-font text-green-600">100+</div>
              <div className="text-foreground/60 text-sm retro-font mt-1">ITENS</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in relative -top-10" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              onClick={scrollToMaterials}
              className="pixel-btn bg-orange-500 hover:bg-orange-600 text-white pixel-font text-xs gap-2"
            >
              <Heart className="w-5 h-5" />
              VER MATERIAIS
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={openWhatsApp}
              className="pixel-btn bg-green-500 hover:bg-green-600 text-white border-green-700 pixel-font text-xs gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WHATSAPP
            </Button>
          </div>
        </div>

       
      </div>
    </section>
    )
}