import { useState } from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Calendar as CalendarIcon, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const departmentPrices = {
  kardiyoloji: 750,
  noroloji: 800,
  ortopedi: 700,
  dahiliye: 650,
  goz: 600,
};

const AppointmentForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [doctor, setDoctor] = useState("");
  const [department, setDepartment] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const price = department ? departmentPrices[department as keyof typeof departmentPrices] : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!date || !doctor || !department || !time || !name || !phone || !email) {
      toast({
        title: "Eksik bilgi",
        description: "Lütfen tüm alanları doldurunuz.",
        variant: "destructive",
      });
      return;
    }
    
    // Show payment dialog
    setShowPaymentDialog(true);
  };

  const handlePaymentComplete = () => {
    toast({
      title: "Randevu Alındı!",
      description: `${format(date!, "PPP", { locale: tr })} tarihinde ${time} saatinde ${doctor} ile randevunuz oluşturuldu ve ödemeniz alındı.`,
    });
    
    // Reset form
    setDate(undefined);
    setDoctor("");
    setDepartment("");
    setTime("");
    setName("");
    setPhone("");
    setEmail("");
    setShowPaymentDialog(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Adınız Soyadınız</Label>
            <Input
              id="name"
              placeholder="Adınız Soyadınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon Numaranız</Label>
            <Input
              id="phone"
              placeholder="0(5XX) XXX XX XX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-posta Adresiniz</Label>
            <Input
              id="email"
              type="email"
              placeholder="ornek@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="department">Bölüm</Label>
            <Select onValueChange={setDepartment} value={department}>
              <SelectTrigger id="department">
                <SelectValue placeholder="Bölüm seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kardiyoloji">Kardiyoloji</SelectItem>
                <SelectItem value="noroloji">Nöroloji</SelectItem>
                <SelectItem value="ortopedi">Ortopedi</SelectItem>
                <SelectItem value="dahiliye">Dahiliye</SelectItem>
                <SelectItem value="goz">Göz Hastalıkları</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="doctor">Doktor</Label>
            <Select onValueChange={setDoctor} value={doctor}>
              <SelectTrigger id="doctor">
                <SelectValue placeholder="Doktor seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ahmet-yilmaz">Dr. Ahmet Yılmaz</SelectItem>
                <SelectItem value="ayse-demir">Dr. Ayşe Demir</SelectItem>
                <SelectItem value="mehmet-kaya">Dr. Mehmet Kaya</SelectItem>
                <SelectItem value="zeynep-aksoy">Dr. Zeynep Aksoy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Tarih</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: tr }) : <span>Tarih seçiniz</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time">Saat</Label>
            <Select onValueChange={setTime} value={time}>
              <SelectTrigger id="time">
                <SelectValue placeholder="Saat seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="13:00">13:00</SelectItem>
                <SelectItem value="14:00">14:00</SelectItem>
                <SelectItem value="15:00">15:00</SelectItem>
                <SelectItem value="16:00">16:00</SelectItem>
                <SelectItem value="17:00">17:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {department && (
          <div className="p-4 bg-muted rounded-lg">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Ücret Bilgisi</h3>
              <p className="text-sm text-gray-500">
                {department && Object.keys(departmentPrices).includes(department) 
                  ? `${department.charAt(0).toUpperCase() + department.slice(1)} bölümü muayene ücreti: ${price} TL`
                  : 'Bölüm seçiniz'}
              </p>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full md:w-auto">
          <CreditCard className="mr-2 h-4 w-4" />
          Randevu Oluştur ve Öde
        </Button>
      </form>

      <AlertDialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ödeme Bilgileri</AlertDialogTitle>
            <AlertDialogDescription>
              Randevu ücretiniz: <strong>{price} TL</strong>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            <RadioGroup 
              defaultValue={paymentMethod} 
              onValueChange={setPaymentMethod}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card">Kredi/Banka Kartı</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="transfer" id="transfer" />
                <Label htmlFor="transfer">Havale/EFT</Label>
              </div>
            </RadioGroup>

            {paymentMethod === 'credit-card' && (
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Kart Numarası</Label>
                  <Input id="card-number" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Son Kullanma Tarihi</Label>
                    <Input id="expiry" placeholder="AA/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-name">Kart Üzerindeki İsim</Label>
                  <Input id="card-name" placeholder="Ad Soyad" />
                </div>
              </div>
            )}

            {paymentMethod === 'transfer' && (
              <div className="border rounded-md p-4 bg-muted">
                <h4 className="font-medium mb-2">Banka Hesap Bilgileri</h4>
                <p className="text-sm mb-1">Banka: Türkiye Sağlık Bankası</p>
                <p className="text-sm mb-1">IBAN: TR12 3456 7890 1234 5678 9012 34</p>
                <p className="text-sm mb-1">Hesap Sahibi: Sağlık Zaman Tıp Merkezi</p>
                <p className="text-sm text-gray-500 mt-2">
                  * Lütfen açıklama kısmına "Randevu - {name}" yazınız.
                </p>
              </div>
            )}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction onClick={handlePaymentComplete}>
              Ödemeyi Tamamla
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AppointmentForm;
