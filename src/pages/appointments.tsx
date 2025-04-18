import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, Phone, Mail, MapPin } from "lucide-react";

const Appointments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Appointment Hero */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Randevu Al</h1>
              <p className="text-lg text-gray-700">
                Online randevu sistemimiz ile istediğiniz doktordan kolayca randevu alabilirsiniz. 
                Aşağıdaki formu doldurarak randevunuzu oluşturun.
              </p>
            </div>
          </div>
        </section>

        {/* Appointment Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6">Randevu Formu</h2>
                    <AppointmentForm />
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Randevu Bilgileri</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Çalışma Saatleri</p>
                          <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                          <p className="text-gray-600">Cumartesi: 09:00 - 14:00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Randevu Süreleri</p>
                          <p className="text-gray-600">Her randevu 30 dakika sürmektedir.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <User className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-medium">Randevu Alırken</p>
                          <p className="text-gray-600">Kimlik bilgilerinizi ve sağlık sigortası bilgilerinizi yanınızda bulundurunuz.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">İletişim</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="text-primary" size={20} />
                        <p className="text-gray-600">+90 212 345 6789</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="text-primary" size={20} />
                        <p className="text-gray-600">randevu@saglikzaman.com</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="text-primary mt-1" size={20} />
                        <p className="text-gray-600">Atatürk Cad. No:123, İstanbul</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Sık Sorulan Sorular</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Randevumu nasıl iptal edebilirim?</h3>
                  <p className="text-gray-600">
                    Randevunuzu iptal etmek için randevu saatinden en az 24 saat önce +90 212 345 6789 numaralı telefondan bize ulaşabilirsiniz.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Randevuma neleri getirmeliyim?</h3>
                  <p className="text-gray-600">
                    Randevunuza kimlik kartınızı, sağlık sigortası bilgilerinizi ve varsa önceki tetkik sonuçlarınızı getirmeniz gerekmektedir.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Randevuma geç kalırsam ne olur?</h3>
                  <p className="text-gray-600">
                    15 dakikadan fazla gecikme durumunda, randevunuzun yeniden planlanması gerekebilir. Gecikeceğinizi düşünüyorsanız lütfen önceden bizi bilgilendirin.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Online ödeme yapabilir miyim?</h3>
                  <p className="text-gray-600">
                    Evet, randevu ücretinizi online olarak ödeyebilirsiniz. Kredi kartı, banka kartı veya havale yöntemiyle ödeme yapabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appointments;
