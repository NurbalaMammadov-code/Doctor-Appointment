import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Sağlık Zaman</h3>
            <p className="text-gray-600 mb-4">
              Sağlığınız bizim önceliğimizdir. Profesyonel kadromuz ve modern ekipmanlarımızla hizmetinizdeyiz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-600 hover:text-primary transition-colors">
                  Randevu Al
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Çalışma Saatleri</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <Clock size={16} />
                <span>Pazartesi - Cuma: 09:00 - 18:00</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Clock size={16} />
                <span>Cumartesi: 09:00 - 14:00</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Clock size={16} />
                <span>Pazar: Kapalı</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span>+90 212 345 6789</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span>info@saglikzaman.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>Atatürk Cad. No:123, İstanbul</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sağlık Zaman. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
