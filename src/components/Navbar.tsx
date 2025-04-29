
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-coffee-dark/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-coffee-light" />
          <span className="text-2xl font-playfair font-bold text-coffee-light">Coffee House</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button variant="outline" className="border-coffee-light text-coffee-light hover:bg-coffee-light hover:text-coffee-dark">
            Заказать столик
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-coffee-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-coffee-dark/95 backdrop-blur-md absolute top-full left-0 w-full">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <NavLinks mobile onClick={() => setIsOpen(false)} />
            <Button variant="outline" className="border-coffee-light text-coffee-light hover:bg-coffee-light hover:text-coffee-dark">
              Заказать столик
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }: { mobile?: boolean; onClick?: () => void }) => {
  const linkClass = mobile
    ? "text-lg text-coffee-light hover:text-coffee-medium transition-colors py-2"
    : "text-coffee-light hover:text-coffee-medium transition-colors";

  return (
    <div className={mobile ? "flex flex-col" : "flex gap-8"}>
      <a href="#about" className={linkClass} onClick={onClick}>О нас</a>
      <a href="#menu" className={linkClass} onClick={onClick}>Меню</a>
      <a href="#contact" className={linkClass} onClick={onClick}>Контакты</a>
    </div>
  );
};
