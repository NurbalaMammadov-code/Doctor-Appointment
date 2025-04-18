import { ArrowRight, Calendar, CheckCircle, HeartPulse, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorsSection from "@/components/DoctorsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sağlık Hizmetlerimiz</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sağlık Zaman olarak modern tıbbi ekipmanlarımız ve uzman doktor kadromuzla sağlığınız için buradayız.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="appointment-card">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <HeartPulse size={48} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Kardiyoloji</h3>
                  <p className="text-gray-600 mb-4">
                    Kalp ve damar hastalıklarının teşhis ve tedavisi için uzman kardiyoloji ekibimiz ile hizmetinizdeyiz.
                  </p>
                  <Link to="/about" className="text-primary hover:underline flex items-center gap-1">
                    Daha Fazla <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="appointment-card">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <ShieldCheck size={48} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Check-Up</h3>
                  <p className="text-gray-600 mb-4">
                    Kapsamlı sağlık taramaları ile hastalıkları erken teşhis etmek için düzenli check-up hizmetleri sunuyoruz.
                  </p>
                  <Link to="/about" className="text-primary hover:underline flex items-center gap-1">
                    Daha Fazla <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="appointment-card">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <Calendar size={48} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Online Randevu</h3>
                  <p className="text-gray-600 mb-4">
                    Zaman kaybetmeden, online randevu sistemimiz ile istediğiniz doktordan kolayca randevu alabilirsiniz.
                  </p>
                  <Link to="/appointments" className="text-primary hover:underline flex items-center gap-1">
                    Daha Fazla <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Doctors Section */}
        <DoctorsSection />
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Neden Bizi Seçmelisiniz?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sağlık hizmetlerinde kalitenin ve güvenin adresiyiz. İşte bizi tercih etmeniz için nedenler:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-primary" size={24} />
                  <h3 className="text-lg font-semibold">Uzman Doktorlar</h3>
                </div>
                <p className="text-gray-600">
                  Alanında uzmanlaşmış, deneyimli doktor kadromuz ile hizmet veriyoruz.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-primary" size={24} />
                  <h3 className="text-lg font-semibold">Modern Teknoloji</h3>
                </div>
                <p className="text-gray-600">
                  En son teknolojiye sahip tıbbi ekipmanlarla doğru tanı ve tedavi.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-primary" size={24} />
                  <h3 className="text-lg font-semibold">Hasta Odaklı</h3>
                </div>
                <p className="text-gray-600">
                  Hastalarımızın konfor ve memnuniyeti bizim için önceliklidir.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-primary" size={24} />
                  <h3 className="text-lg font-semibold">Kolay Erişim</h3>
                </div>
                <p className="text-gray-600">
                  Online randevu sistemi ile istediğiniz zaman erişilebilirlik.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link to="/appointments">Randevu Al</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
