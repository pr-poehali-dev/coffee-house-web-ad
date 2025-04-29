
import { Coffee, Award, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-coffee-black mb-4">О нашей кофейне</h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-coffee-dark mb-6">Традиции и качество с 2010 года</h3>
            <p className="text-coffee-black mb-6">
              Coffee House — это место, где современные тенденции встречаются с вековыми традициями приготовления кофе. 
              Мы создали уютное пространство, где каждый может насладиться идеальной чашкой кофе, 
              приготовленного из отборных зерен с лучших плантаций мира.
            </p>
            <p className="text-coffee-black mb-8">
              Наши бариста — настоящие художники своего дела, постоянно совершенствующие мастерство 
              и экспериментирующие с новыми вкусами, чтобы удивлять даже самых искушенных ценителей кофе.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Coffee className="w-10 h-10 mx-auto text-coffee-dark mb-2" />
                <p className="font-bold text-xl text-coffee-black">15+</p>
                <p className="text-coffee-dark">сортов кофе</p>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 mx-auto text-coffee-dark mb-2" />
                <p className="font-bold text-xl text-coffee-black">5</p>
                <p className="text-coffee-dark">наград</p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 mx-auto text-coffee-dark mb-2" />
                <p className="font-bold text-xl text-coffee-black">10k+</p>
                <p className="text-coffee-dark">клиентов</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Интерьер Coffee House" 
              className="rounded-lg shadow-xl object-cover w-full h-[500px]"
            />
            <div className="absolute -bottom-8 -left-8 bg-coffee-medium p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-white font-playfair text-lg font-bold">
                "Мы не просто продаем кофе, мы создаем впечатления"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
