
import Footer from "./footers";
import GallerySection from "./gallerySection";
import HeroSection from "./heroSection";
import MaterialsSection from "./materialsSection";
import TimelineSection from "./timelineSection";


export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <GallerySection />
      <TimelineSection />
      <MaterialsSection />
       <Footer />
    </main>
  );
}