
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
};

export const CoffeeMenu = () => {
  const [activeTab, setActiveTab] = useState("coffee");

  const coffeeItems: MenuItem[] = [
    {
      name: "Эспрессо",
      description: "Классический итальянский эспрессо из свежеобжаренных зерен",
      price: "150₽",
      image: "https://images.unsplash.com/photo-1510707577719-ae7f77d70ddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Капучино",
      description: "Эспрессо с молочной пеной и корицей",
      price: "220₽",
      popular: true,
      image: "https://images.unsplash.com/photo-1534778356534-d3d45b6df1da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Латте",
      description: "Эспрессо с добавлением молока и нежной молочной пены",
      price: "250₽",
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const dessertItems: MenuItem[] = [
    {
      name: "Чизкейк Нью-Йорк",
      description: "Классический чизкейк с ванильным соусом",
      price: "320₽",
      popular: true,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Тирамису",
      description: "Итальянский десерт с кофейным сиропом и маскарпоне",
      price: "280₽",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Шоколадный брауни",
      description: "Теплый брауни с шариком ванильного мороженого",
      price: "240₽",
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const teaItems: MenuItem[] = [
    {
      name: "Зеленый чай",
      description: "Классический зеленый чай с жасмином",
      price: "180₽",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Фруктовый чай",
      description: "Авторский купаж с ягодами и фруктами",
      price: "200₽",
      popular: true,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Травяной чай",
      description: "Расслабляющий сбор из трав и цветов",
      price: "190₽",
      image: "https://images.unsplash.com/photo-1565377025694-08604bbe4585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-coffee-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-coffee-black mb-4">Наше меню</h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto mb-6"></div>
          <p className="text-coffee-dark max-w-2xl mx-auto">
            Мы тщательно отбираем лучшие ингредиенты, чтобы каждый глоток и каждый кусочек дарили вам незабываемые впечатления
          </p>
        </div>

        <Tabs defaultValue="coffee" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-cream">
            <TabsTrigger value="coffee" className="text-lg">Кофе</TabsTrigger>
            <TabsTrigger value="desserts" className="text-lg">Десерты</TabsTrigger>
            <TabsTrigger value="tea" className="text-lg">Чай</TabsTrigger>
          </TabsList>
          
          <TabsContent value="coffee" className="mt-0">
            <MenuItems items={coffeeItems} />
          </TabsContent>
          
          <TabsContent value="desserts" className="mt-0">
            <MenuItems items={dessertItems} />
          </TabsContent>
          
          <TabsContent value="tea" className="mt-0">
            <MenuItems items={teaItems} />
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-coffee-dark hover:bg-coffee-black text-white">
            Полное меню
          </Button>
        </div>
      </div>
    </section>
  );
};

const MenuItems = ({ items }: { items: MenuItem[] }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={item.image || "https://images.unsplash.com/photo-1565600444102-063041a0529f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} 
              alt={item.name} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 relative">
            {item.popular && (
              <span className="absolute top-0 right-6 -translate-y-1/2 bg-coffee-medium text-white text-xs px-3 py-1 rounded-full">
                Популярное
              </span>
            )}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-playfair font-bold text-coffee-black">{item.name}</h3>
              <span className="text-lg font-bold text-coffee-dark">{item.price}</span>
            </div>
            <p className="text-coffee-dark text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
