import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Sağlığınız İçin En İyi Bakım
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Uzman doktor kadromuz ve modern tıbbi ekipmanlarımızla sağlığınız için hizmetinizdeyiz. 
            Online randevu sistemi ile hemen doktorlarımızdan randevu alabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/appointments">Randevu Al</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Doktorlarımız</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
