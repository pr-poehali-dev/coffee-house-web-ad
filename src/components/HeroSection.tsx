
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-coffee-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <Coffee className="h-16 w-16 text-coffee-light mx-auto mb-6 animate-float" />
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-coffee-light mb-6">
          Coffee House
        </h1>
        <p className="text-xl md:text-2xl text-coffee-light mb-8 max-w-2xl mx-auto">
          Идеальное место для ценителей настоящего кофе и уютной атмосферы
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-coffee-medium hover:bg-coffee-dark text-white">
            Наше меню
          </Button>
          <Button size="lg" variant="outline" className="border-coffee-light text-coffee-light hover:bg-coffee-light hover:text-coffee-dark">
            Забронировать столик
          </Button>
        </div>
        
        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-full border-2 border-coffee-light flex justify-center pt-2">
            <div className="w-1 h-3 bg-coffee-light rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
