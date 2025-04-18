import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !subject || !message) {
      toast({
        title: "Eksik bilgi",
        description: "Lütfen tüm alanları doldurunuz.",
        variant: "destructive",
      });
      return;
    }
    
    // Process form submission
    toast({
      title: "Mesajınız Gönderildi!",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
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
          <Label htmlFor="email">E-posta Adresiniz</Label>
          <Input
            id="email"
            type="email"
            placeholder="ornek@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Konu</Label>
        <Input
          id="subject"
          placeholder="Mesajınızın konusu"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Mesajınız</Label>
        <Textarea
          id="message"
          placeholder="Mesajınızı yazınız..."
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      
      <Button type="submit">
        Mesaj Gönder
      </Button>
    </form>
  );
};

export default ContactForm;
