
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-coffee-dark text-coffee-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-coffee-light" />
              <span className="text-2xl font-playfair font-bold">Coffee House</span>
            </Link>
            <p className="mb-4">
              Место, где каждая чашка кофе становится частью особой истории. 
              Приходите к нам за вкусом, атмосферой и вдохновением.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-coffee-medium transition-colors">Кофе</a></li>
              <li><a href="#" className="hover:text-coffee-medium transition-colors">Десерты</a></li>
              <li><a href="#" className="hover:text-coffee-medium transition-colors">Завтраки</a></li>
              <li><a href="#" className="hover:text-coffee-medium transition-colors">Обеды</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-coffee-medium transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-coffee-medium transition-colors">Галерея</a></li>
              <li><a href="#" className="hover:text-coffee-medium transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-coffee-medium transition-colors">Карьера</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Подпишитесь</h3>
            <p className="mb-4">Получайте обновления о специальных предложениях и событиях</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-2 rounded-l-md w-full bg-coffee-black text-white border-coffee-medium border focus:outline-none"
              />
              <button className="bg-coffee-medium hover:bg-coffee-light hover:text-coffee-dark px-4 py-2 rounded-r-md transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-coffee-medium/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Coffee House. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-coffee-medium transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-coffee-medium transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
