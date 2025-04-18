import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Contact Hero */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">İletişim</h1>
              <p className="text-lg text-gray-700">
                Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilir veya iletişim formunu doldurabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Bize Yazın</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Adres</p>
                          <p className="text-gray-600">Atatürk Cad. No:123, Şişli/İstanbul</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Telefon</p>
                          <p className="text-gray-600">+90 212 345 6789</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">E-posta</p>
                          <p className="text-gray-600">info@saglikzaman.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Çalışma Saatleri</p>
                          <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                          <p className="text-gray-600">Cumartesi: 09:00 - 14:00</p>
                          <p className="text-gray-600">Pazar: Kapalı</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
                    <div className="flex gap-4">
                      <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white transition-colors p-3 rounded-full">
                        <Facebook size={24} />
                      </a>
                      <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white transition-colors p-3 rounded-full">
                        <Instagram size={24} />
                      </a>
                      <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white transition-colors p-3 rounded-full">
                        <Twitter size={24} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Bize Ulaşın</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96309.26907225454!2d28.90932643505627!3d41.03454942411977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zxZ5pxZ9saSwgxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1712759694391!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sağlık Zaman Konumu"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
