import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DoctorCardProps {
  name: string;
  title: string;
  speciality: string;
  imageUrl: string;
  description: string;
}

const DoctorCard = ({ name, title, speciality, imageUrl, description }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={`Dr. ${name}`}
          className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>
          {title} - {speciality}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full">
          <Link to="/appointments">Randevu Al</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
