import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";

const About = () => {
  // Dummy doctor data
  const doctors = [
    {
      name: "Dr. Ahmet Yılmaz",
      title: "Prof. Dr.",
      speciality: "Kardiyoloji",
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      description: "Kalp ve damar hastalıkları uzmanı olarak 20 yılı aşkın deneyimle hastalarına hizmet vermektedir."
    },
    {
      name: "Dr. Ayşe Demir",
      title: "Doç. Dr.",
      speciality: "Nöroloji",
      imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      description: "Nöroloji alanında uzmanlaşmış, deneyimli bir hekim olarak beyin ve sinir sistemi hastalıklarının tanı ve tedavisinde uzman."
    },
    {
      name: "Dr. Mehmet Kaya",
      title: "Uzm. Dr.",
      speciality: "Ortopedi",
      imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      description: "Ortopedi ve travmatoloji uzmanı olarak eklem hastalıkları, spor yaralanmaları ve travma sonrası tedaviler konusunda uzman."
    },
    {
      name: "Dr. Zeynep Aksoy",
      title: "Prof. Dr.",
      speciality: "Dahiliye",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
      description: "İç hastalıkları uzmanı olarak kronik hastalıklar, metabolizma bozuklukları ve check-up konularında hizmet vermektedir."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* About Us Hero */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
              <p className="text-lg text-gray-700 mb-8">
                Sağlık Zaman olarak, 2005 yılından beri hastalarımıza kaliteli sağlık hizmeti sunmaktayız. Uzman doktor kadromuz, modern teknolojik ekipmanlarımız ve hasta odaklı yaklaşımımızla sağlığınız için buradayız.
              </p>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Tarihçemiz</h2>
                <p className="text-gray-700 mb-4">
                  Sağlık Zaman, 2005 yılında İstanbul'da kuruldu. Kuruluşumuzdan bu yana, sağlık sektöründe öncü olma vizyonuyla hareket ediyoruz.
                </p>
                <p className="text-gray-700 mb-4">
                  2010 yılında hastanemizi genişleterek daha fazla uzmanlık alanında hizmet vermeye başladık. Modern tıbbi cihazlarımız ve uzman kadromuzla hastalarımızın sağlığı için çalışıyoruz.
                </p>
                <p className="text-gray-700">
                  Bugün, geniş uzman hekim kadromuz ve son teknoloji tıbbi ekipmanlarımızla yılda binlerce hastaya hizmet vermekteyiz. Misyonumuz, kaliteli sağlık hizmetini herkes için erişilebilir kılmaktır.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sağlık Zaman Hastanesi" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Doctors */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Doktorlarımız</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Alanında uzman, deneyimli doktor kadromuzla sağlığınız için hizmetinizdeyiz. 
                Uzmanlarımızla tanışın ve güvenle tedavinizi planlayın.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <DoctorCard 
                  key={index}
                  name={doctor.name}
                  title={doctor.title}
                  speciality={doctor.speciality}
                  imageUrl={doctor.imageUrl}
                  description={doctor.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission and Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
                <p className="text-gray-700">
                  Sağlık Zaman olarak misyonumuz; hastalarımıza en kaliteli sağlık hizmetini sunmak, 
                  tedavi süreçlerinde en yeni tıbbi yöntemleri kullanarak hasta memnuniyetini en üst 
                  seviyede tutmak ve herkes için erişilebilir sağlık hizmeti sağlamaktır.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
                <p className="text-gray-700">
                  Vizyonumuz, sağlık sektöründe öncü olarak, yenilikçi tedavi yöntemleri ve hasta 
                  odaklı yaklaşımımızla ulusal ve uluslararası düzeyde tercih edilen, saygın bir 
                  sağlık kurumu olmaktır.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
