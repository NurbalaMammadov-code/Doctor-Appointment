import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <div className="bg-primary p-2 rounded-full">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold text-primary hidden sm:inline">Sağlık Zaman</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Ana Sayfa
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
            Hakkımızda
          </Link>
          <Link to="/appointments" className="text-gray-700 hover:text-primary font-medium">
            Randevu Al
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
            İletişim
          </Link>
          <Button asChild>
            <Link to="/appointments">
              Hemen Randevu Al
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Hakkımızda
            </Link>
            <Link 
              to="/appointments" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Randevu Al
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              İletişim
            </Link>
            <Button asChild className="w-full mt-2">
              <Link to="/appointments">
                Hemen Randevu Al
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
