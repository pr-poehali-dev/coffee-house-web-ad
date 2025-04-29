
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-coffee-black mb-4">Свяжитесь с нами</h2>
          <div className="w-24 h-1 bg-coffee-medium mx-auto mb-6"></div>
          <p className="text-coffee-dark max-w-2xl mx-auto">
            Мы всегда рады вашим вопросам и предложениям. Заходите в гости или напишите нам!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-playfair font-bold text-coffee-black mb-6">Информация</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin />} 
                  title="Адрес" 
                  content={<>Республика Бурятия, город Улан-Удэ<br />ул. Ербанова 4</>} 
                />
                
                <ContactInfo 
                  icon={<Clock />} 
                  title="Часы работы" 
                  content={<>Пн-Пт: 8:00 - 22:00<br />Сб-Вс: 9:00 - 23:00</>} 
                />
                
                <ContactInfo 
                  icon={<Phone />} 
                  title="Телефон" 
                  content="+7 (999) 123-45-67" 
                />
                
                <ContactInfo 
                  icon={<Mail />} 
                  title="Email" 
                  content="info@coffeehouse.ru" 
                />
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-playfair font-bold text-coffee-black mb-4">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  <SocialButton icon="vk" />
                  <SocialButton icon="telegram" />
                  <SocialButton icon="instagram" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-coffee-black mb-6">Отправьте сообщение</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
                      Имя
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full border-coffee-light focus:border-coffee-medium"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Ваш email" 
                      className="w-full border-coffee-light focus:border-coffee-medium"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-coffee-dark mb-1">
                    Тема
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Тема сообщения" 
                    className="w-full border-coffee-light focus:border-coffee-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Ваше сообщение" 
                    className="w-full border-coffee-light focus:border-coffee-medium min-h-[150px]"
                  />
                </div>
                
                <Button className="w-full bg-coffee-medium hover:bg-coffee-dark text-white">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-lg h-[400px] relative">
          <div className="absolute inset-0 bg-coffee-dark/30 flex items-center justify-center">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-playfair font-bold text-coffee-black mb-2">Карта загружается...</h3>
              <p className="text-coffee-dark mb-4">Мы находимся в центре города, в пешей доступности от остановок</p>
              <Button className="bg-coffee-medium hover:bg-coffee-dark text-white">
                Показать на Google Maps
              </Button>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Карта расположения" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: React.ReactNode; 
}) => {
  return (
    <div className="flex items-start">
      <div className="text-coffee-medium mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-coffee-black">{title}</h4>
        <div className="text-coffee-dark">{content}</div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon }: { icon: string }) => {
  let emoji = "☕";
  
  switch (icon) {
    case "vk":
      emoji = "ВК";
      break;
    case "telegram":
      emoji = "✈️";
      break;
    case "instagram":
      emoji = "📷";
      break;
  }
  
  return (
    <button className="w-10 h-10 rounded-full bg-coffee-light flex items-center justify-center text-coffee-dark hover:bg-coffee-medium hover:text-white transition-colors">
      {emoji}
    </button>
  );
};
