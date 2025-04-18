import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DoctorCard from "@/components/DoctorCard";

// Sample doctor data with multiple departments
const doctors = [
  // Kardiyoloji
  {
    name: "Dr. Ahmet Yılmaz",
    title: "Prof. Dr.",
    speciality: "Kardiyoloji",
    imageUrl: "/placeholder.svg",
    description: "Kalp ve damar hastalıkları konusunda 15 yıllık deneyime sahip uzman hekim.",
  },
  {
    name: "Dr. Ayşe Demir",
    title: "Doç. Dr.",
    speciality: "Kardiyoloji",
    imageUrl: "/placeholder.svg",
    description: "Koroner arter hastalıkları ve kalp yetmezliği tedavisinde uzmanlaşmış hekim.",
  },
  
  // Nöroloji
  {
    name: "Dr. Mehmet Kaya",
    title: "Prof. Dr.",
    speciality: "Nöroloji",
    imageUrl: "/placeholder.svg",
    description: "Beyin ve sinir sistemi hastalıkları konusunda deneyimli uzman.",
  },
  {
    name: "Dr. Zeynep Yıldız",
    title: "Uzm. Dr.",
    speciality: "Nöroloji",
    imageUrl: "/placeholder.svg",
    description: "Migren ve baş ağrısı tedavisinde uzmanlaşmış nörolog.",
  },
  
  // Ortopedi
  {
    name: "Dr. Ali Özkan",
    title: "Prof. Dr.",
    speciality: "Ortopedi",
    imageUrl: "/placeholder.svg",
    description: "Eklem cerrahisi ve spor yaralanmaları konusunda uzman hekim.",
  },
  {
    name: "Dr. Selin Arslan",
    title: "Doç. Dr.",
    speciality: "Ortopedi",
    imageUrl: "/placeholder.svg",
    description: "Omurga cerrahisi ve skolyoz tedavisinde uzmanlaşmış ortopedi uzmanı.",
  },
  
  // Göz Hastalıkları
  {
    name: "Dr. Mustafa Aydın",
    title: "Prof. Dr.",
    speciality: "Göz Hastalıkları",
    imageUrl: "/placeholder.svg",
    description: "Retina hastalıkları ve katarakt cerrahisinde deneyimli göz doktoru.",
  },
  {
    name: "Dr. Buse Yalçın",
    title: "Uzm. Dr.",
    speciality: "Göz Hastalıkları",
    imageUrl: "/placeholder.svg",
    description: "Glokom ve kornea hastalıkları tedavisinde uzmanlaşmış oftalmolog.",
  },
  
  // Dermatoloji
  {
    name: "Dr. Canan Yücel",
    title: "Doç. Dr.",
    speciality: "Dermatoloji",
    imageUrl: "/placeholder.svg",
    description: "Cilt hastalıkları ve estetik dermatoloji alanında uzman hekim.",
  },
  {
    name: "Dr. Emre Şahin",
    title: "Uzm. Dr.",
    speciality: "Dermatoloji",
    imageUrl: "/placeholder.svg",
    description: "Akne ve saç dökülmesi tedavisinde deneyimli dermatolog.",
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Uzman Doktorlarımız</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Alanında uzmanlaşmış, deneyimli hekim kadromuzla sağlığınız için buradayız.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {doctors.map((doctor, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <DoctorCard
                  name={doctor.name}
                  title={doctor.title}
                  speciality={doctor.speciality}
                  imageUrl={doctor.imageUrl}
                  description={doctor.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative static left-0 right-0 translate-y-0" />
            <CarouselNext className="relative static left-0 right-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default DoctorsSection;
